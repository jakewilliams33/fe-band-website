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

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/merch" element={<MerchPage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/listen/:release_id" element={<ListenPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
};
