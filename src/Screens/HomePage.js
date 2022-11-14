import React from "react";
import { ImageSlider } from "../Components/ImageSlider";
import { motion } from "framer-motion";

const transitions = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const HomePage = ({ showBackground }) => {
  return (
    <motion.div
      variants={transitions}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      <ImageSlider showBackground={showBackground}></ImageSlider>
    </motion.div>
  );
};
