import React from "react";
import { MerchPage } from "../Screens/MerchPage";
import { TourPage } from "../Screens/TourPage";
import { ContactPage } from "../Screens/ContactPage";
import { ErrorPage } from "../Screens/ErrorPage";
import { HomePage } from "../Screens/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import { MusicPage } from "../Screens/MusicPage";
import { AnimatePresence } from "framer-motion";
import { ListenPage } from "../Screens/ListenPage";

export const AnimatedRoutes = ({ showBackground }) => {
  const location = useLocation();

  const opacity = showBackground
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };

  const slide = showBackground
    ? {
        initial: { width: "100%", opacity: 1 },
        animate: { width: "100%", opacity: 1 },
        exit: { width: "100%", opacity: 1 },
      }
    : {
        initial: { width: 0, opacity: 0 },
        animate: { width: "100%", opacity: 1 },
        exit: { x: 5000, opacity: 0 },
      };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<HomePage opacity={opacity} />} />
        <Route path="/music" element={<MusicPage slide={slide} />} />
        <Route path="/merch" element={<MerchPage opacity={opacity} />} />
        <Route path="/tour" element={<TourPage slide={slide} />} />
        <Route path="/contact" element={<ContactPage opacity={opacity} />} />
        <Route
          path="/listen/:release_id"
          element={<ListenPage opacity={opacity} />}
        />
        <Route path="/*" element={<ErrorPage opacity={opacity} />} />
      </Routes>
    </AnimatePresence>
  );
};
