import React from "react";
import { DvdBackground } from "./DvdBackground";
import { AnimatePresence, motion } from "framer-motion";
import "../Styles/NavbarStyles.css";

export const MobileDropdownBg = ({ showBackground }) => {
  const pageTransition = {
    in: {
      y: 0,
    },
    out: {
      y: "-100%",
    },
  };

  return (
    <AnimatePresence>
      {showBackground && (
        <div
          className="mobile-background"
          style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            zIndex: 2000000,
          }}
        >
          <motion.div
            key="background"
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
            transition={{ type: "just", duration: 1 }}
            style={{ backgroundColor: "black", height: "100%", width: "100%" }}
          >
            <DvdBackground />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
