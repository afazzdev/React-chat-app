import React from "react";
import { withRouter } from "react-router-dom";

const AuthPage = OriginalComponent => {
  class NewComp extends React.Component {
    state = {};
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
      const { history, location } = this.props;
      if (location.pathname === "/register" && !localStorage.getItem("token")) {
        history.push("/register");
      } else if (localStorage.getItem("token")) {
        history.push("/dashboard");
      } else {
        history.push("/login");
      }
    }
    render() {
      return <OriginalComponent {...this.props} />;
    }
  }

  return withRouter(NewComp);
};

export default AuthPage;
