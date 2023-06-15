import React from "react";
import Lottie from "react-lottie";
import satteliteAnimation from "@/animations/satellite.json";

const Satellite = ({ className = "" }: { className?: string }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: satteliteAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className={`flex justify-center items-center cursor-none ${className}`}
    >
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default Satellite;
