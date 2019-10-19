import React from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import withNav from "./withNavbar";
import Page4 from "./page4";
import Page3 from "./page3";
import Footer from "../../components/Footer";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <div className="containerland">
          <div className="containerpage satu">
            <Page1 />
          </div>
          <div className="containerpage dua">
            <Page2 />
          </div>
          <div className="containerpage tiga">
            <Page3 />
          </div>
          <div className="containerpage empat">
            <Page4 />
          </div>
          <div className="containerpage footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default withNav(LandingPage);
