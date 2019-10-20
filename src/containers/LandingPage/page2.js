import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  // const [hover, changeHover] = React.useState({ phoneSS: false, pcSS: false });
  // const [invisible, changeInvisibility] = React.useState(false);

  // const onPointerEvent = e => {
  //   e.preventDefault();
  //   if (e.target.name === "web") {
  //     changeHover({ phoneSS: false, pcSS: true });
  //   } else {
  //     changeHover({ phoneSS: true, pcSS: false });
  //   }
  // };

  // const handlePointerOut = e => {
  //   e.preventDefault();
  //   changeHover({ phoneSS: false, pcSS: false });
  // };
  return (
    <>
      <div className="page2">
        <div className="input-group page2-label">
          <div className="input-group">
            <span className="input-label">Start your wonderful chat!</span>{" "}
          </div>
          <span>
            <Link to="/login">
              <button
                // onPointerEnter={onPointerEvent}
                // name="web"
                // onPointerOut={handlePointerOut}
                className="input-button"
              >
                Web
              </button>
            </Link>
            <Link to="/">
              <button
                // onPointerEnter={onPointerEvent}
                // name="phone"
                // onPointerOut={handlePointerOut}
                className="input-button"
              >
                Phone
              </button>
            </Link>
          </span>
        </div>
        {/* <div>
          {hover.pcSS === true ? (
            <div className="screenshoot">
              <img src={pcSS} alt="" />
            </div>
          ) : (
            <div className="screenshoot">
              <img src={phoneSS1} alt="" />
              <img src={phoneSS2} alt="" />
              <img src={phoneSS3} alt="" />
              <img src={phoneSS4} alt="" />
            </div>
          )}
        </div> */}
      </div>
    </>
  );
};

export default Page2;
