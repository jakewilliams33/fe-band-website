import React from "react";
import errorImg from "../images/errorPage.png";
import { motion } from "framer-motion";

const transitions = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const ErrorPage = () => {
  return (
    <motion.div
      variants={transitions}
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
