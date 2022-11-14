import React from "react";
import { useScript } from "../Hooks/useScript";
import "../Styles/TourPageStyles.css";
import { motion } from "framer-motion";

export const TourPage = () => {
  useScript("//widget.songkick.com/10172348/widget.js");

  const transitions = {
    initial: { width: 0 },
    animate: { width: "100%" },
    exit: { x: 5000, opacity: 0 },
  };

  return (
    <motion.div
      variants={transitions}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      <div className="orangeLine"></div>
      <section className="skew-background-tour">
        <div className="widgetContainer">
          <h1>Tour</h1>

          <a
            href="https://www.songkick.com/artists/10172348"
            className="songkick-widget"
            data-theme="dark"
            data-other-artists="on"
            data-detect-style="true"
            data-background-color="transparent"
            data-locale="en"
          >
            Dates
          </a>
        </div>
      </section>
    </motion.div>
  );
};
