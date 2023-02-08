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
import { SadmanMotion } from "./SadmanMotion";

export const ImageSlider = () => {
  const linkStyle = {
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div className="picContainer">
        <Swiper
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 13000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
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
            <Link to="/listen/sadman_mancave" style={linkStyle}>
              <SadmanMotion></SadmanMotion>
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
            <Link to="/listen/bill_murray" style={linkStyle}>
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
            <Link to="/listen/role_models" style={linkStyle}>
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
            <Link style={linkStyle} to="merch">
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
            <Link style={linkStyle} to="tour">
              <img src={group1} alt="band" className="band"></img>
              <img src={tourText} className="tourText" alt="tour dates"></img>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
