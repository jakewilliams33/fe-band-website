import Tilt from "react-parallax-tilt";
import sadman from "../images/sadmanforeground.png";
import outNow from "../images/out now.png";
import listenHere from "../images/listen here.png";

export const SadmanMotion = () => {
  return (
    <>
      <Tilt
        transitionEasing={"cubic-bezier(.03,.03,.52,2)"}
        trackOnWindow={true}
        gyroscope={true}
        tiltReverse={true}
        perspective={6000}
      >
        <img className="out-now" alt="out now" src={outNow}></img>
      </Tilt>
      <Tilt
        tiltReverse={true}
        transitionSpeed={300}
        transitionEasing={"cubic-bezier(.03,.03,.52,2)"}
        trackOnWindow={true}
        gyroscope={true}
        scale={1}
        perspective={100000}
      >
        <img className="listen-here" alt="listen here" src={listenHere}></img>
      </Tilt>
      <Tilt
        transitionSpeed={300}
        transitionEasing={"cubic-bezier(.03,.03,.52,2)"}
        trackOnWindow={true}
        perspective={2000}
        gyroscope={true}
      >
        <img className="monkey" alt="monkey" src={sadman}></img>
      </Tilt>
    </>
  );
};
