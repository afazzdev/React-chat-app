import React, { Component } from "react";
import PropTypes from "prop-types";
// import { isEmpty } from "lodash";
import TextField from "./InputField/TextField";
import axios from "axios";
import { Link } from "react-router-dom";
import CreatingNewAccount from "../../containers/LandingPage/creatingNewAccount";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      phone: "",
      password: "",
      // passwordConfirmation: "",
      errors: "",
      isLoading: false,
      wrong: false,
      type: "password",
      hidden: "fa-eye-slash"
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    this.setState({ errors: {}, isLoading: true });
    e.preventDefault();

    const dataInput = {
      username: this.state.username,
      password: this.state.password,
      phone: this.state.phone
    };

    axios
      .post("https://priores.serveo.net/api/register", dataInput)
      .then(res => {
        this.setState({
          username: "",
          password: "",
          phone: "",
          isLoading: false
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isLoading: false,
          errors: err
        });
      });
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
          <CreatingNewAccount />
        ) : (
          <form onSubmit={this.onSubmit}>
            <span className="auth-label">
              <h3>
                <i className="fa fa-fingerprint"></i> Sign up
              </h3>
            </span>
            <TextField
              label="Username"
              type="text"
              field="username"
              className="input-text"
              errors={this.state.errors}
              empty={this.state.empty}
              onChange={this.onChange}
              placeholder="Type your username here"
            />
            <TextField
              label="Phone number"
              type="text"
              field="phone"
              className="input-text"
              errors={this.state.errors}
              empty={this.state.empty}
              onChange={this.onChange}
              placeholder="Type your phone here"
            />
            <TextField
              label="Password"
              type={this.state.type}
              field="password"
              className="input-text"
              errors={this.state.errors}
              empty={this.state.empty}
              onChange={this.onChange}
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
                Sign Up
              </button>
            </div>
            <span className="input-badge">
              <Link to="login">Already have an account?</Link>
            </span>
          </form>
        )}
      </>
    );
  }
}

RegisterPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

export default RegisterPage;
