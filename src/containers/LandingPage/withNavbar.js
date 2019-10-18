import React from "react";
import Navbar from "./navbar";

const withnavbar = OriginalComponent => {
  class NewComponent extends React.Component {
    render() {
      return (
        <>
          <Navbar />
          <OriginalComponent />
        </>
      );
    }
  }
  return NewComponent;
};

export default withnavbar;
