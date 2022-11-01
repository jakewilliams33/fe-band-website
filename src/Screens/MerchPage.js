import React from "react";
import "../Styles/MerchPageStyles.css";
import white from "../images/whiteTee.png";
import orange from "../images/orangeTee.png";
import { motion } from "framer-motion";

const transitions = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const MerchPage = () => {
  return (
    <motion.div
      variants={transitions}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      <div className="merchContainer">
        <h1 className="merchTitle">Merch</h1>
        <section className="merchGrid">
          <div className="item">
            <a
              href="https://adultdvd.bandcamp.com/merch/adult-dvd-tee"
              target="blank"
            >
              <img alt="shirt" src={orange}></img>

              <h3>Black/Orange Tee</h3>
            </a>
            <h4>£15</h4>
          </div>
          <div className="item">
            <a
              href="https://adultdvd.bandcamp.com/merch/adult-dvd-bill-murray-white-tee"
              target="blank"
            >
              <img alt="shirt" src={white}></img>

              <h3>White/Blue Tee</h3>
            </a>
            <h4>£15</h4>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
