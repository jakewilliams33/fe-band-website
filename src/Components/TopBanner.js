import React from "react";
import { DvdBanner } from "./DvdBanner";

export const TopBanner = ({ showBackground }) => {
  return (
    <div className="bannerContainer">
      {!showBackground && <DvdBanner />}
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "30px",
          position: "absolute",
        }}
      ></div>
    </div>
  );
};
