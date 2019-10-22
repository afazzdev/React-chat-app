import React from "react";

class Page3 extends React.Component {
  state = {};
  handleKeyPress = e => {
    if (e.charCode === 13) {
      this.handleClick(e);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  render() {
    return (
      <>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <h2 className="input-label">
            Have some idea to improve our application?
          </h2>
          <h3 className="input-label">Let us now!</h3>
          <textarea
            type="text"
            className="input-text"
            placeholder="Type your idea here"
          />
          <button
            className="input-button"
            type="submit"
            onKeyPress={this.handleKeyPress}
          >
            Submit your idea!
          </button>
        </form>
      </>
    );
  }
}

export default Page3;
