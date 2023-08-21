import React from "react";
import Lottie from "react-lottie";
import loadingAnimation from "@/animations/loading.json";

const Loading = ({ className = "" }: { className?: string }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className={`flex justify-center items-center cursor-none ${className}`}
    >
      <Lottie options={defaultOptions} height={400} width={450} />
    </div>
  );
};

export default Loading;
