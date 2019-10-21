import React from "react";
import { withRouter } from "react-router-dom";

const Setting = props => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <div className="input-group">
        <button className="input-button" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </>
  );
};

export default withRouter(Setting);
