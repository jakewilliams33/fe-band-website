import React from "react";
import billmurray from "../images/Covers/billmurray.png";
import hoarder from "../images/Covers/hoarder.png";
import iHad from "../images/Covers/iHad.png";
import FOMO from "../images/Covers/FOMO.png";
import brokenEnglish from "../images/Covers/brokenEnglish.png";
import iHadRemix from "../images/Covers/iHadRemix.png";
import beRemix from "../images/Covers/beRemix.png";
import "../Styles/MusicPageStyles.css";
import { motion } from "framer-motion";
import treeboy from "../images/Covers/treeboy.jpg";
import { Link } from "react-router-dom";

const releaseContent = [
  {
    image: billmurray,
    title: "Bill Murray",
    link: "https://open.spotify.com/track/0Umhmtk4SDzt8wO2nDmOrR?si=311aad045a66449c",
    release_id: "bill_murray",
  },
  {
    image: treeboy,
    title: "role models - ADULT DVD remix",
    link: "https://open.spotify.com/track/0Y4UrlRUESco26ddxbNBEL?si=f0a4e090bfc94f17",
    release_id: "role_models",
  },
  {
    image: hoarder,
    title: "Hoarder",
    link: "https://open.spotify.com/track/1Tf7pxHdJqYAwSsQtUU3Ti?si=c2ecc103c1db46e8",
    release_id: "hoarder",
  },
  {
    image: FOMO,
    title: "FOMO",
    link: "https://open.spotify.com/track/72bjnMEc19duGlKZKR3YIy?si=5e903c3eb57f4444",
    release_id: "FOMO",
  },
  {
    image: iHad,
    title: "I Had",
    link: "https://open.spotify.com/track/03G0sABkF9h7nfrP5DBMTZ?si=9a4e3625689e4628",
    release_id: "i_had",
  },
  {
    image: brokenEnglish,
    title: "Broken English",
    link: "https://open.spotify.com/track/6QdjEOaORnqIRXiqUsYYtM?si=1d6cda126c4f460b",
    release_id: "broken_english",
  },
  {
    image: iHadRemix,
    title: "I Had - Remix EP",
    link: "https://open.spotify.com/album/4VbV2nqZRzzOxW1LHeXSjI?si=zd_XZTj8RIa3JrmaoJ-dkA",
    release_id: "i_had_remix_ep",
  },
  {
    image: beRemix,
    title: "Broken English - Remix EP",
    link: "https://open.spotify.com/album/2ELRQhmtXbMJSD42WHPh3Y?si=Phc5MdZrQ6Wzt4TKZleESw",
    release_id: "broken_english_remix_ep",
  },
];

const transitions = {
  initial: { width: 0 },
  animate: { width: "100%" },
  exit: { x: 5000, opacity: 0 },
};

export const MusicPage = () => {
  return (
    <motion.div
      variants={transitions}
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
