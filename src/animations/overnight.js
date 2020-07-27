import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "./overnight.json";

export default function Overnight() {
  const [speed, setSpeed] = useState();

  useEffect(() => {
    setSpeed(5);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="animation">
      <Lottie options={defaultOptions} speed={speed} />
    </div>
  );
}
