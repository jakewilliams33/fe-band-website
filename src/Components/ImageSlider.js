import group1 from "../images/group.jpg";
import "../Styles/SliderStyles.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import billText from "../images/billText.png";
import merchText from "../images/merchText.png";
import tourText from "../images/tourText.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import sadman from "../images/sadmanforeground.png";
import outNow from "../images/out now.png";
import listenHere from "../images/listen here.png";

export const ImageSlider = ({ showBackground }) => {
  const [alpha, setAlpha] = useState();
  const [gamma, setGamma] = useState();

  window.addEventListener("deviceorientation", handleMotionEvent, true);

  const transitionVar = showBackground ? "1s" : "0s";

  const linkStyle = {
    height: "100%",
    width: "100%",
    transitionDelay: transitionVar,
  };

  function handleMotionEvent(event) {
    if (event.alpha > -35 && event.alpha < 35) {
      setAlpha(event.alpha);
    }

    if (event.gamma > -35 && event.gamma < 35) {
      setGamma(event.gamma);
    }
  }

  return (
    <>
      <div className="picContainer">
        <Swiper
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 25000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          navigation={true}
          breakpoints={{
            800: {
              allowTouchMove: false,
            },

            0: {
              allowTouchMove: true,
            },
          }}
        >
          <SwiperSlide>
            <Link
              to="/listen/sadman_mancave"
              style={linkStyle}
              className={showBackground ? "off" : "on"}
            >
              <Tilt tiltAngleYManual={gamma}>
                <img className="out-now" alt="out now" src={outNow}></img>
              </Tilt>
              <Tilt tiltAngleYManual={gamma}>
                <img
                  className="listen-here"
                  alt="listen here"
                  src={listenHere}
                ></img>
              </Tilt>
              <Tilt
                style={{ position: "absolute" }}
                tiltAngleXManual={alpha}
                tiltAngleYManual={gamma}
              >
                <img className="monkey" alt="monkey" src={sadman}></img>
              </Tilt>
              <div
                className="sadman"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="/listen/bill_murray"
              style={linkStyle}
              className={showBackground ? "off" : "on"}
            >
              <div
                className="bill"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <img
                  className="billText"
                  alt="bill murray out now"
                  src={billText}
                ></img>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://open.spotify.com/playlist/3ac6Sgi3KGNKaIGsHCIaFf?si=f056e2b745a34835"
              style={{ height: "100%", width: "100%" }}
            >
              <div
                className="playlist"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="/listen/role_models"
              style={linkStyle}
              className={showBackground ? "off" : "on"}
            >
              <div
                className="treeboy"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <div
                  className="treeboyText"
                  alt="treeboy and arc adult DVD remix"
                ></div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              style={linkStyle}
              to="merch"
              className={showBackground ? "off" : "on"}
            >
              <div
                className="shirts"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <img
                  src={merchText}
                  className="merchText"
                  alt="buy merch"
                ></img>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              style={linkStyle}
              to="tour"
              className={showBackground ? "off" : "on"}
            >
              <img src={group1} alt="band" className="band"></img>
              <img src={tourText} className="tourText" alt="tour dates"></img>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
