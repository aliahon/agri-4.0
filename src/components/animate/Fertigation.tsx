import React from "react";
import Lottie from "react-lottie";
import cameraAnimation from "@/animations/stationTete.json";

const Fertigation = ({ className = "" }: { className?: string }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cameraAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className={`flex justify-center items-center cursor-none ${className}`}
    >
      <Lottie options={defaultOptions} height={300} width={400} />
    </div>
  );
};

export default Fertigation;
