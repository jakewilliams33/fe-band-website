import React from "react";
import errorImg from "../images/errorPage.png";
import { motion } from "framer-motion";

export const ErrorPage = ({ opacity }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          alt="page not found"
          src={errorImg}
          style={{
            width: "70%",
            paddingTop: "50px",
            marginLeft: "-30px",
            minWidth: "450px",
          }}
        ></img>
      </div>
    </motion.div>
  );
};
