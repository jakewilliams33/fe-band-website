import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import billImg from "../images/Covers/billmurray.png";
import treeboyImg from "../images/Covers/treeboy.jpg";
import brokenImg from "../images/Covers/brokenEnglish.png";
import beRemixImg from "../images/Covers/beRemix.png";
import fomoImg from "../images/Covers/FOMO.png";
import hoarderImg from "../images/Covers/hoarder.png";
import iHadImg from "../images/Covers/iHad.png";
import iHadrmxImg from "../images/Covers/iHadRemix.png";
import "../Styles/ListenPageStyles.css";
import { motion } from "framer-motion";
import { ErrorPage } from "./ErrorPage";
import xmas from "../images/Covers/xmasCover.png";
import sadman from "../images/Covers/sadmancover.jpg";

export const ListenPage = ({ opacity }) => {
  const { release_id } = useParams();
  const [current, setCurrent] = useState({});

  const getCurrent = useCallback(() => {
    const releaseLinks = [
      {
        title: "Sadman Mancave",
        name: "sadman_mancave",
        spotify:
          "https://open.spotify.com/track/3ap3V9N1KDlNlE7nV53iCx?si=8783ef5393f34e0d",
        apple:
          "https://music.apple.com/gb/album/sadman-mancave/1662396497?i=1662396498",
        tidal: "https://listen.tidal.com/album/269560377/track/269560378",
        amazon:
          "https://music.amazon.co.uk/albums/B0BRJYMY66?trackAsin=B0BRJYP213",
        image: sadman,
      },
      {
        title: "Santa what you got for me?",
        name: "santa_what_you_got_for_me",
        spotify:
          "https://open.spotify.com/track/4bOjjtzrsJOZ1RyWYgtgUN?si=a9047bb56a13447d",
        apple:
          "https://music.apple.com/gb/album/santa-what-you-got-for-me/1657072793?i=1657072794",
        youtube: "https://www.youtube.com/watch?v=9R5_eZ-E_r0",
        tidal: "https://listen.tidal.com/album/263478383/track/263478384",
        amazon:
          "https://music.amazon.co.uk/albums/B0BNM24Y2Y?trackAsin=B0BNLZPMQL",
        deezer: "https://deezer.page.link/wNUvM3tiQAWV6Fy97",
        image: xmas,
      },
      {
        title: "Bill Murray",
        name: "bill_murray",
        spotify: "https://open.spotify.com/track/0Umhmtk4SDzt8wO2nDmOrR",
        apple:
          "https://music.apple.com/gb/album/bill-murray/1644105414?i=1644105415&app=music",
        bandcamp: "https://adultdvd.bandcamp.com/track/broken-english",
        youtube: "https://youtube.com/watch?v=URje0etGDoM",
        tidal: "https://listen.tidal.com/track/247313986",
        amazon: "https://music.amazon.com/albums/B0BDR76J9W",
        deezer: "https://www.deezer.com/track/1905303277",
        image: billImg,
      },
      {
        title: "role models - ADULT DVD remix",

        name: "role_models",
        spotify: "https://open.spotify.com/track/0Y4UrlRUESco26ddxbNBEL",
        bandcamp:
          "https://treeboyandarc.bandcamp.com/track/role-models-adult-dvd-remix",
        youtube: "https://youtube.com/watch?v=Aq5QLiGde-A",
        tidal: "https://listen.tidal.com/track/249264056",
        amazon: "https://music.amazon.com/albums/B0BFRT1J3Q",

        deezer: "https://www.deezer.com/track/1920569627",
        image: treeboyImg,
      },
      {
        title: "Hoarder",

        name: "hoarder",
        spotify: "https://open.spotify.com/track/1Tf7pxHdJqYAwSsQtUU3Ti",
        apple:
          "https://music.apple.com/gb/album/hoarder/1587284316?i=1587284317&app=music",

        youtube: "https://www.youtube.com/watch?v=OL7eKOQEGPE",
        tidal: "https://listen.tidal.com/track/198597860",
        amazon: "https://music.amazon.com/albums/B09H286BJ5",
        soundcloud: "https://soundcloud.com/adultdvd/hoarder?id=1132376053",
        bandcamp: "https://cpwm.bandcamp.com/track/hoarder-2",
        image: hoarderImg,
      },
      {
        title: "FOMO",

        name: "FOMO",
        spotify: "https://open.spotify.com/track/72bjnMEc19duGlKZKR3YIy",
        apple:
          "https://music.apple.com/gb/album/fomo/1574163648?i=1574163649&app=music",

        youtube: "https://youtube.com/watch?v=EiVI6t4PI10",
        tidal: "https://listen.tidal.com/track/189214201",
        amazon: "https://music.amazon.com/albums/B0983TT5N9",
        deezer: "https://www.deezer.com/track/1417369792",
        bandcamp: "https://adultdvd.bandcamp.com/track/fomo",
        image: fomoImg,
      },
      {
        title: "Broken English",

        name: "broken_english",
        spotify: "https://open.spotify.com/track/6QdjEOaORnqIRXiqUsYYtM",
        apple:
          "https://music.apple.com/gb/album/broken-english/1550456845?i=1550456846&app=music",

        youtube: "https://youtube.com/watch?v=5afPikq9nqg",
        tidal: "https://listen.tidal.com/track/170842278",
        amazon: "https://music.amazon.com/albums/B08TV59YVT",
        deezer: "https://www.deezer.com/track/1220367312",
        bandcamp: "https://adultdvd.bandcamp.com/track/broken-english",
        image: brokenImg,
      },
      {
        title: "I Had",

        name: "i_had",
        spotify: "https://open.spotify.com/track/03G0sABkF9h7nfrP5DBMTZ",
        apple:
          "https://music.apple.com/gb/album/i-had/1558744789?i=1558744790&app=music",

        youtube: "https://youtube.com/watch?v=U8GotrlsHcs",
        tidal: "https://listen.tidal.com/track/177345521",
        amazon: "https://music.amazon.com/albums/B08Z72Y3C4",
        deezer: "https://www.deezer.com/track/1277742752",
        bandcamp: "https://adultdvd.bandcamp.com/track/i-had",
        image: iHadImg,
      },
      {
        title: "Broken English - Remix EP",

        name: "broken_english_remix_ep",
        spotify: "https://open.spotify.com/album/2ELRQhmtXbMJSD42WHPh3Y",
        apple:
          "https://music.apple.com/gb/album/broken-english-remix-ep/1554518308?app=music",
        youtube:
          "https://youtube.com/playlist?list=OLAK5uy_l3ItUUqpO6G6ZtlpQPhnM25RkHJAbWT2g",
        tidal: "https://listen.tidal.com/album/174169048",
        amazon: "https://music.amazon.co.uk/albums/B08WY8HS2R",
        deezer: "https://www.deezer.com/album/209108982",
        bandcamp: "https://adultdvd.bandcamp.com/album/broken-english-remix-ep",
        image: beRemixImg,
      },
      {
        title: "I Had - Remix EP",

        name: "i_had_remix_ep",
        spotify: "https://open.spotify.com/album/4VbV2nqZRzzOxW1LHeXSjI",
        apple:
          "https://music.apple.com/gb/album/i-had-remix-single/1564110355?app=music",

        youtube:
          "https://youtube.com/playlist?list=OLAK5uy_k9t_7UO-Is_6s5UffcbwlX2IV6XEV7sPU",
        tidal: "https://listen.tidal.com/album/181366868",
        amazon: "https://music.amazon.com/albums/B0935BYZY8",
        deezer: "https://www.deezer.com/album/224511972",
        bandcamp: "https://adultdvd.bandcamp.com/album/i-had-remix-ep",
        image: iHadrmxImg,
      },
    ];

    releaseLinks.forEach((release) => {
      if (release.name.toString() === release_id) {
        setCurrent(release);
      }
    });
  }, [release_id]);

  useEffect(() => {
    getCurrent();
  }, [getCurrent]);

  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {Object.keys(current).length > 0 ? (
        <div style={{ paddingBottom: "900px" }}>
          <div className="linkContainer">
            <img alt="art" src={current.image}></img>
            <h1 className="trackTile">{current.title}</h1>
            <ul>
              <li>
                <a target="blank" href={current.spotify}>
                  <img
                    data-test="music-service-item-image"
                    src="https://services.linkfire.com/logo_spotify_onlight.svg"
                    alt="Spotify"
                  ></img>
                </a>
              </li>
              {current.apple && (
                <li>
                  <a target="blank" href={current.apple}>
                    <img
                      data-test="music-service-item-image"
                      src="https://services.linkfire.com/logo_applemusic_onlight.svg"
                      alt="Apple Music"
                    ></img>
                  </a>
                </li>
              )}
              {current.bandcamp && (
                <li>
                  <a target="blank" href={current.bandcamp}>
                    <img
                      data-test="music-service-item-image"
                      src="https://services.linkfire.com/logo_bandcamp_onlight.svg"
                      alt="bandcamp"
                    ></img>
                  </a>
                </li>
              )}
              <li>
                <a target="blank" href={current.youtube}>
                  <img
                    data-test="music-service-item-image"
                    src="https://services.linkfire.com/logo_youtube_onlight.svg"
                    alt="youtube"
                  ></img>
                </a>
              </li>
              <li>
                <a target="blank" href={current.tidal}>
                  <img
                    data-test="music-service-item-image"
                    src="https://services.linkfire.com/logo_tidal_onlight.svg"
                    alt="tidal"
                  ></img>
                </a>
              </li>
              {current.amazon && (
                <li>
                  <a target="blank" href={current.amazon}>
                    <img
                      data-test="music-service-item-image"
                      src="https://services.linkfire.com/logo_amazonmusic_onlight.svg"
                      alt="amazon"
                    ></img>
                  </a>
                </li>
              )}
              {current.deezer && (
                <li>
                  <a target="blank" href={current.deezer}>
                    <img
                      data-test="music-service-item-image"
                      src="https://services.linkfire.com/logo_deezer_onlight.svg"
                      alt="deezer"
                    ></img>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </motion.div>
  );
};
