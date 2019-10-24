import React from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { update } from "../../redux/actions/UpdateProfileAction";

class Setting extends React.Component {
  state = {
    id: this.props.data.id,
    username: this.props.data.username,
    phone: this.props.data.phone,
    photo: this.props.data.photo,
    password: this.props.data.password,
    editable: false,
    hidden: "fa-eye-slash",
    type: "password",
    avatar: []
  };

  // UNSAFE_componentWillMount() {
  //   this.props.login();
  // }

  render() {
    const {
      id,
      username,
      phone,
      photo,
      editable,
      password,
      hidden,
      type,
      avatar
    } = this.state;

    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("reduxState");
      window.location.reload();
    };

    const handleSubmit = e => {
      e.preventDefault();
      this.setState({ editable: false });
      this.setState({
        hidden: "fa-eye-slash",
        type: "password",
        password: this.props.data.password
      });

      const updatedData = {
        id: id,
        username: username,
        phone: phone,
        password: password,
        photo: !avatar ? this.props.data.photo : avatar
      };
      console.log(updatedData);
      this.props.update(updatedData);
    };
    const handleEdit = e => {
      e.preventDefault();
      if (!editable) {
        this.setState({ editable: true, password: "" });
      }
    };

    const handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    const onHide = e => {
      e.preventDefault();

      if (type === "password") {
        this.setState({ hidden: "fa-eye", type: "text" });
      } else {
        this.setState({ hidden: "fa-eye-slash", type: "password" });
      }
    };

    return (
      <>
        <form className="profile-group" onSubmit={handleSubmit}>
          <div>
            <img
              src={photo}
              alt="Your face"
              style={{ width: "150px", height: "150px" }}
            />
            {editable && (
              <div>
                <input
                  className="profile-button"
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={handleChange}
                />
                <label htmlFor="avatar" className="profile-text">
                  Choose a photo
                </label>
              </div>
            )}
          </div>
          <div className="profile-group">
            <div className="profile-label">Username</div>
            <input
              type="text"
              className="profile-text"
              value={username}
              name="username"
              onChange={handleChange}
              disabled={!editable}
            />
          </div>
          <div className="profile-group">
            <div className="profile-label">Phone</div>
            <input
              type="text"
              className="profile-text"
              value={phone}
              name="phone"
              onChange={handleChange}
              disabled={!editable}
            />
          </div>
          <div className="profile-label">Password</div>
          <div className="profile-group">
            <input
              type={type}
              className="profile-text"
              value={password}
              name="password"
              onChange={handleChange}
              disabled={!editable}
            />{" "}
            {editable && (
              <button
                onClick={onHide}
                className="profile-button hidden-button setting-button"
              >
                <i className={`fas ${hidden}`}></i>
              </button>
            )}
          </div>
          {editable ? (
            <button className="profile-button" type="submit">
              save
            </button>
          ) : (
            <button className="profile-button" onClick={handleEdit}>
              edit
            </button>
          )}
        </form>
        <div className="profile-group">
          <input
            type="button"
            className="profile-button"
            onClick={handleLogout}
            value="Logout"
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  data: state.loginData.data
});

export default connect(
  mapStateToProps,
  { update }
)(withRouter(Setting));
