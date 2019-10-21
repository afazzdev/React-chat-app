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

    const login = {
      phone: this.state.phone,
      password: this.state.password
    };
    this.setState({ errors: {}, isLoading: true });
    console.log(login);
    if (!e.target.value) {
      this.setState({ empty: "cannot be empty" });
    }
    Axios.post("https://rocky-sierra-75836.herokuapp.com/api/login", login)
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
        this.setState({ isLoading: false });
        console.log(err);
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHide = e => {
    e.preventDefault();
    if (this.state.type === "password") {
      this.setState({ hidden: "fa-eye", type: "text" });
    } else {
      this.setState({ hidden: "fa-eye-slash", type: "password" });
    }
  };

  render() {
    const { isLoading } = this.state;

    return (
      <>
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
              errors={this.state.errors}
              empty={this.state.empty}
              placeholder="Type your phone here"
            />
            <TextField
              label="Password"
              type={this.state.type}
              field="password"
              className="input-text"
              onChange={this.onChange}
              errors={this.state.errors}
              empty={this.state.empty}
              placeholder="Type your password here"
              onHide={this.onHide}
              hidden={this.state.hidden}
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
