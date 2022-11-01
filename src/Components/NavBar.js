import React, { useState } from "react";
import "../Styles/NavbarStyles.css";
import logo from "../images/logoroundbg.png";
import { MenuButtonCopy } from "./MenuButtonCopy";
import { Link } from "react-router-dom";
import {
  faApple,
  faBandcamp,
  faFacebook,
  faInstagram,
  faSpotify,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import initial from "../images/initial.png";
import animated from "../images/dvdAnimation2.png";
import animatedClosed from "../images/animationClosed2.png";

export const NavBar = ({ setShowBackground, showBackground }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [menuButtonGif, setMenuButtonGif] = useState(initial);

  let opacityVar;
  if (navbarOpen) {
    opacityVar = "opacity 2s ease-in";
  } else {
    opacityVar = "opacity .7s";
  }

  const handleToggle = () => {
    if (window.innerWidth <= 800) {
      setNavbarOpen((prev) => !prev);
      setShowBackground((prev) => !prev);
      document.body.style.overflow = !showBackground ? "hidden" : "visible";

      if (!navbarOpen) {
        setMenuButtonGif(animated);
      } else if (navbarOpen) {
        setMenuButtonGif(animatedClosed);
      }
    }
  };

  let facebookUrl = "https://www.facebook.com/Adltdvd";

  if (navigator.userAgent.match(/Android/i)) {
    facebookUrl = "fb://facewebmodal/f?href=https://www.facebook.com/Adltdvd";
  } else if (navigator.userAgent.match(/iPhone/i)) {
    facebookUrl = "fb://page/PAGEID";
  }

  return (
    <>
      <div
        className={
          navbarOpen ? "navbar-container-all active" : "navbar-container-all"
        }
      >
        <MenuButtonCopy
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
          setShowBackground={setShowBackground}
          initial={initial}
          setMenuButtonGif={setMenuButtonGif}
          menuButtonGif={menuButtonGif}
          showBackground={showBackground}
        ></MenuButtonCopy>

        <div style={{ width: "100%" }}>
          <nav>
            <img className="logo" alt="spinning Logo" src={logo}></img>
            <div>
              <ul
                className={
                  navbarOpen ? "navbar-pages-list active" : "navbar-pages-list"
                }
              >
                <li
                  style={{ transition: opacityVar }}
                  onClick={() => handleToggle()}
                >
                  <Link className="links" to="/">
                    HOME
                  </Link>
                </li>

                <li
                  style={{ transition: opacityVar }}
                  onClick={() => handleToggle()}
                >
                  <Link className="links" to="merch">
                    MERCH
                  </Link>
                </li>

                <li
                  style={{ transition: opacityVar }}
                  onClick={() => handleToggle()}
                >
                  <Link className="links" to="music">
                    MUSIC
                  </Link>
                </li>
                <li
                  style={{ transition: opacityVar }}
                  onClick={() => handleToggle()}
                >
                  <Link className="links" to="tour">
                    TOUR
                  </Link>
                </li>
                <li
                  style={{ transition: opacityVar }}
                  onClick={() => handleToggle()}
                >
                  <Link className="links" to="contact">
                    contact
                  </Link>
                </li>
              </ul>

              <div
                className={
                  navbarOpen ? "iconContainer active" : "iconContainer"
                }
              >
                <a
                  style={{ transition: opacityVar }}
                  href={facebookUrl}
                  target="blank"
                >
                  <FontAwesomeIcon
                    className="icons"
                    icon={faFacebook}
                    color={"white"}
                  />
                </a>
                <a
                  style={{ transition: opacityVar }}
                  href="https://www.instagram.com/adultdvdmenu/"
                  target="blank"
                >
                  <FontAwesomeIcon
                    className="icons"
                    icon={faInstagram}
                    color={"white"}
                  />
                </a>
                <a
                  style={{ transition: opacityVar }}
                  href="https://twitter.com/DvdAdult"
                  target="blank"
                >
                  <FontAwesomeIcon
                    className="icons"
                    icon={faTwitter}
                    color={"white"}
                    style={{ transition: opacityVar }}
                  />
                </a>
                <a
                  style={{ transition: opacityVar }}
                  href="https://www.youtube.com/channel/UCmGiw0z6dRClNlIFMCnS8Zw"
                  target="blank"
                >
                  <FontAwesomeIcon
                    className="icons"
                    icon={faYoutube}
                    color={"white"}
                    style={{ transition: opacityVar }}
                  />
                </a>
                <a
                  style={{ transition: opacityVar }}
                  href="https://open.spotify.com/artist/1lT3vDbjqz299SxePec6ZG?si=G6ESp6laRuyyfr8QzaV4wQ"
                  target="blank"
                >
                  <FontAwesomeIcon
                    className="icons"
                    icon={faSpotify}
                    color={"white"}
                    style={{ transition: opacityVar }}
                  />
                </a>
                <a
                  style={{ transition: opacityVar }}
                  href="https://adultdvd.bandcamp.com/?from=search&search_item_id=3458032651&search_item_type=b&search_match_part=%3F&search_page_id=2244543721&search_page_no=0&search_rank=1&logged_out_menubar=true"
                  target="blank"
                >
                  <FontAwesomeIcon
                    className="icons"
                    icon={faBandcamp}
                    color={"white"}
                    style={{ transition: opacityVar }}
                  />
                </a>
                <a
                  style={{ transition: opacityVar }}
                  href="https://music.apple.com/gb/artist/adult-dvd/1550456447"
                  target="blank"
                >
                  <FontAwesomeIcon
                    className="icons"
                    id="apple"
                    icon={faApple}
                    color={"white"}
                    style={{ transition: opacityVar }}
                  />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
