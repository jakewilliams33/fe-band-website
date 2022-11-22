import React, { useRef } from "react";
import "../Styles/NewButtonStyle.css";

export const MenuButtonCopy = ({
  navbarOpen,
  setNavbarOpen,
  setShowBackground,
  showBackground,
}) => {
  const imgButton = useRef();

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
    setShowBackground((prev) => !prev);
    document.body.style.overflow = !showBackground ? "hidden" : "visible";
  };

  return (
    <>
      <div
        onClick={handleToggle}
        alt="menu button"
        ref={imgButton}
        className={!navbarOpen ? "case" : "caseOpen"}
        style={{ zIndex: 200000 }}
      ></div>
    </>
  );
};
