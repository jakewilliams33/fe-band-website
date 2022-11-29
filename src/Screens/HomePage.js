import React from "react";
import { ImageSlider } from "../Components/ImageSlider";
import { motion } from "framer-motion";

export const HomePage = ({ showBackground, opacity }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      <ImageSlider showBackground={showBackground}></ImageSlider>
    </motion.div>
  );
};
