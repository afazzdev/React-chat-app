import React from "react";
import TextField from "./InputField/TextField";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";
import SigningIn from "../../containers/LandingPage/signingin";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
      access_token: "",
      errors: "",
      isLoading: false,
      empty: "",
      type: "password",
      hidden: "fa-eye-slash"
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
    console.log(login);
    Axios.post(
      // "https://rocky-sierra-75836.herokuapp.com/api/login",
      "https://arcane-dawn-61247.herokuapp.com/api/login",
      login
    )
      .then(res => {
        localStorage.setItem("token", res.data.access_token);
        this.setState({
          access_token: res.data.access_token,
          redirect: true,
          isLoading: false
        });
        this.props.history.push("/dashboard");
        console.log(res);
      })
      .catch(err => {
        this.setState({ isLoading: false, errors: err });
        console.log(err);
      });
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
    const { isLoading, errors, empty, hidden, type } = this.state;

    return (
      <>
        {" "}
        {isLoading ? (
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

export default withRouter(LoginPage);
