import React from "react";
import billmurray from "../images/Covers/billmurray.png";
import hoarder from "../images/Covers/hoarder.png";
import iHad from "../images/Covers/iHad.png";
import FOMO from "../images/Covers/FOMO.png";
import brokenEnglish from "../images/Covers/brokenEnglish.png";
import iHadRemix from "../images/Covers/iHadRemix.png";
import beRemix from "../images/Covers/beRemix.png";
import xmas from "../images/Covers/xmasCover.png";
import sadman from "../images/Covers/sadmancover.jpg";
import treeboy from "../images/Covers/treeboy.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Styles/MusicPageStyles.css";
import drivers from "../images/Covers/driversSide.png";

const releaseContent = [
  { title: "Drivers Side", image: drivers, release_id: "drivers_side" },
  {
    title: "Sadman Mancave",
    image: sadman,
    release_id: "sadman_mancave",
  },
  {
    image: xmas,
    title: "Santa what you got for me?",
    release_id: "santa_what_you_got_for_me",
  },
  {
    image: billmurray,
    title: "Bill Murray",
    release_id: "bill_murray",
  },
  {
    image: treeboy,
    title: "role models - ADULT DVD remix",
    release_id: "role_models",
  },
  {
    image: hoarder,
    title: "Hoarder",
    release_id: "hoarder",
  },
  {
    image: FOMO,
    title: "FOMO",
    release_id: "FOMO",
  },
  {
    image: iHad,
    title: "I Had",
    release_id: "i_had",
  },
  {
    image: brokenEnglish,
    title: "Broken English",
    release_id: "broken_english",
  },
  {
    image: iHadRemix,
    title: "I Had - Remix EP",
    release_id: "i_had_remix_ep",
  },
  {
    image: beRemix,
    title: "Broken English - Remix EP",
    release_id: "broken_english_remix_ep",
  },
];

export const MusicPage = ({ slide }) => {
  return (
    <motion.div
      variants={slide}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <div className="orangeLine"></div>
      <section className="o-page__section--discography">
        <div className="titleSection">
          <h1 className="title">RELEASES</h1>
        </div>
        <div className="c-releases">
          {releaseContent.map(({ image, title, link, release_id }) => {
            return (
              <div key={image} className="release">
                <motion.div
                  initial={{ opacity: 0, y: "20%", scale: "90%" }}
                  whileInView={{ opacity: 1, y: 0, scale: "100%" }}
                  transition={{ duration: 1 }}
                >
                  <div className="packshot">
                    <img alt="Album art" className="pictures" src={image}></img>
                  </div>
                </motion.div>
                <div className="info">
                  <motion.div
                    initial={{ opacity: 0, y: "20%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    <h2 className="release-title">{title}</h2>

                    <div className="release-meta">
                      <Link
                        to={`/listen/${release_id}`}
                        style={{ color: "white" }}
                      >
                        Listen
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};
