import React from "react";
import PropTypes from "prop-types";

import LoginPage from "../../components/Auth/Login";
import Logo from "../LandingPage/logo";
import withNav from "../LandingPage/withNavbar";

class MasukPage extends React.Component {
  render() {
    return (
      <>
        <div className="backgroundpage">
          <div className="container-slanted">
            <div className="autentication-form">
              <div class="card" style={{ width: "18rem" }}>
                <LoginPage />
              </div>
            </div>
            <div className="chat-brand">
              <div className="greetings">
                <div>Strengthen</div>
                <div className="bonds">bonds with</div>
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

MasukPage.propTypes = {
  userLoginRequest: PropTypes.func.isRequired
};

export default withNav(MasukPage);
