import React from "react";
import PropTypes from "prop-types";

import RegisterPage from "../../components/Auth/Register";
import Logo from "../LandingPage/logo";
import withNav from "../LandingPage/withNavbar";

class SignupPage extends React.Component {
  render() {
    return (
      <>
        <div className="backgroundpage">
          <div className="container-slanted">
            <div className="autentication-form">
              <div class="card" style={{ width: "18rem" }}>
                <RegisterPage />
              </div>
            </div>
            <div className="chat-brand">
              <div className="greetings">
                <div>Create new</div>
                <div>relations with</div>
                <div>
                  <Logo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

export default withNav(SignupPage);
