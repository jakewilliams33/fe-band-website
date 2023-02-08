import React from "react";
import { ImageSlider } from "../Components/ImageSlider";
import { motion } from "framer-motion";

export const HomePage = ({ opacity }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      <ImageSlider></ImageSlider>
    </motion.div>
  );
};
