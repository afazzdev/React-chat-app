import React from "react";
import TextField from "./InputField/TextField";

import { Link, withRouter } from "react-router-dom";
import SigningIn from "../../containers/LandingPage/signingin";

import { connect } from "react-redux";
import { login } from "../../redux/actions/LoginAction";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
      token: "",
      errors: this.props.error,
      isLoading: this.props.isLoading,
      empty: "",
      type: "password",
      hidden: "fa-eye-slash",
      redirect: this.props.redirect
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { phone, password } = this.state;
    const login = {
      phone: phone,
      password: password
    };
    this.setState({ errors: "", isLoading: true });
    // this.props.isLoading("IS_LOADING");
    console.log(login);
    this.props.login(login);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHide = e => {
    e.preventDefault();
    const { type } = this.state;

    if (type === "password") {
      this.setState({ hidden: "fa-eye", type: "text" });
    } else {
      this.setState({ hidden: "fa-eye-slash", type: "password" });
    }
  };

  handleKeyPress = e => {
    if (e.charCode === 13) {
      this.handleSubmit(e);
    }
  };

  render() {
    const { isLoading, errors, empty, hidden, type, redirect } = this.state;

    return (
      <>
        {localStorage.getItem("token") ? (
          this.props.history.push("/dashboard")
        ) : isLoading && !redirect && errors === "" ? (
          <SigningIn />
        ) : (
          <form onSubmit={this.handleSubmit}>
            <span className="auth-label">
              <h3>
                <i className="fa fa-fingerprint"></i> Sign in
              </h3>
            </span>
            <TextField
              label="Phone"
              type="text"
              field="phone"
              className="input-text"
              onChange={this.onChange}
              errors={errors}
              empty={empty}
              placeholder="Type your phone here"
              autoFocus={true}
              value={this.state.phone}
            />
            <TextField
              label="Password"
              type={type}
              field="password"
              className="input-text"
              onChange={this.onChange}
              errors={errors}
              empty={empty}
              placeholder="Type your password here"
              onHide={this.onHide}
              hidden={hidden}
              onKeyPress={this.handleKeyPress}
              value={this.state.password}
            />

            <div className="input-group">
              <button
                disabled={isLoading}
                className="input-button"
                type="submit"
              >
                Login
              </button>
            </div>

            <span className="input-badge">
              <Link to="/register">Don't have an account?</Link>
            </span>
          </form>
        )}
      </>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return { isLoading: () => dispatch({ type: "IS_LOADING" }) };
// };

const mapStateToProps = state => ({
  redirect: state.loginData.redirect,
  error: state.loginData.errors,
  isLoading: state.loginData.isLoading
});

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(LoginPage)
);
