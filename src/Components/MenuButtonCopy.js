import React, { useRef } from "react";
import "../Styles/NewButtonStyle.css";
import animated from "../images/dvdAnimation2.png";
import animatedClosed from "../images/animationClosed2.png";

export const MenuButtonCopy = ({
  navbarOpen,
  setNavbarOpen,
  setShowBackground,
  menuButtonGif,
  setMenuButtonGif,
  showBackground,
}) => {
  const imgButton = useRef();

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
    setShowBackground((prev) => !prev);
    document.body.style.overflow = !showBackground ? "hidden" : "visible";

    if (!navbarOpen) {
      setMenuButtonGif(animated);
    } else if (navbarOpen) {
      setMenuButtonGif(animatedClosed);
    }
  };

  return (
    <>
      <div className="caseWrapper">
        <img
          onClick={handleToggle}
          alt="menu button"
          ref={imgButton}
          className={!navbarOpen ? "case" : "caseOpen"}
          style={{ width: "150px" }}
          src={menuButtonGif}
        ></img>
      </div>
    </>
  );
};
