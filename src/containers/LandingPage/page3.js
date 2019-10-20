import React from "react";

class Page3 extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="input-group">
          <h2 className="input-label">
            Have some idea to improve our application?
          </h2>
          <h3 className="input-label">Let us now!</h3>
          <textarea
            type="text"
            className="input-text"
            placeholder="Type your idea here"
          />
          <button className="input-button">Submit your idea!</button>
        </div>
      </>
    );
  }
}

export default Page3;
