"use client";

import React, { useEffect } from "react";
import { secteurs } from "@/utils/Constants";
// gsap
import { gsap } from "gsap";
// types
import type { SelectedProps } from "@/utils/types";
// ==========================================================

const ActivitySectors = () => {
  const [selected, setSelected] = React.useState<SelectedProps>(secteurs[0]);

  const handleChangeSector = (sector: any) => {
    setSelected(sector);
  };

  // gsap animation on selected sector change from right to left
  useEffect(() => {
    const imgContainer = document.getElementById("img-container");
    const img = document.getElementById("img");

    if (imgContainer && img) {
      gsap.fromTo(
        imgContainer,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 }
      );
      gsap.fromTo(
        img,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }
  }, [selected]);

  const color =
    selected?.name === "Agriculture de précision"
      ? "#2DB273"
      : selected?.name === "Aquaculture 4.0"
      ? "#809DD0"
      : selected?.name === "Agroalimentaire 4.0"
      ? "#F18968"
      : selected?.name === "Smart cities"
      ? "#666A92"
      : selected?.name === "Durabilite"
      ? "#4DA99C"
      : selected?.name === "CO-R&D"
      ? "#315E50"
      : "#595866";

  return (
    <section className="flex flex-col md:flex-row justify-center w-full py-6 bg-[#F5F5F5]">
      <div className="flex-col items-center justify-center p-4 h-46 md:h-full md:p-10 md:w-1/4 bg-primary">
        <h1 className="text-2xl font-bold text-white md:text-4xl">
          Secteurs d&apos;activités
        </h1>
        <ul className="flex mt-5 space-x-2 overflow-x-scroll text-white style-scrollbar md:overflow-x-hidden md:flex-col md:space-y-4 text-md">
          {secteurs?.map((item, i) => (
            <li
              key={i}
              className="p-1 transition duration-300 ease-in-out transform border-2 rounded-md cursor-pointer md:py-2 md:pl-5 md:rounded-3xl border-secondary md:hover:-translate-y-1 hover:bg-secondary"
              onClick={() => {
                handleChangeSector(item);
              }}
            >
              <span>{item?.name}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Change content by the selected state */}
      <div
        className="flex flex-col w-full gap-4 p-8 md:flex-row md:gap-16 md:py-24 md:px-28"
        ref={(el) => {
          if (el) {
            gsap.fromTo(el, { x: 150 }, { x: 0, duration: 1 });
          }
        }}
      >
        <div
          id="img-container"
          className="relative flex items-center justify-center w-full h-full"
        >
          <div
            className="z-10 object-cover object-center md:h-96 h-64 w-64 md:w-[400px] shadow-xl rounded-xl"
            style={{
              backgroundImage: `url(${selected?.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className={`absolute z-0 object-cover object-center shadow-2xl md:h-96 h-64 w-64 md:w-[400px] rounded-xl md:bottom-[25px] md:left-[15px] ${
              selected?.name === "Agriculture de précision"
                ? "bg-[#2DB273]"
                : selected?.name === "Aquaculture 4.0"
                ? "bg-[#809DD0]"
                : selected?.name === "Agroalimentaire 4.0"
                ? "bg-[#F18968]"
                : selected?.name === "Smart cities"
                ? "bg-[#666A92]"
                : selected?.name === "Durabilite"
                ? "bg-[#4DA99C]"
                : selected?.name === "CO-R&D"
                ? "bg-[#315E50]"
                : "bg-[#595866]"
            }`}
          ></div>
        </div>

        <div className="">
          <h1
            className={`text-2xl md:text-4xl font-bold ${
              selected?.name === "Agriculture de précision"
                ? "text-[#2DB273]"
                : selected?.name === "Aquaculture 4.0"
                ? "text-[#809DD0]"
                : selected?.name === "Agroalimentaire 4.0"
                ? "text-[#F18968]"
                : selected?.name === "Smart cities"
                ? "text-[#666A92]"
                : selected?.name === "Durabilite"
                ? "text-[#4DA99C]"
                : selected?.name === "CO-R&D"
                ? "text-[#315E50]"
                : "text-[#595866]"
            }`}
          >
            {selected?.name}
          </h1>
          <p className="mt-5 text-base leading-snug md:text-md">
            {selected?.desc}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {selected?.subItems?.map((_, i) => (
              <div key={i} className="flex items-center w-full gap-4 mt-5">
                <span
                  className={`w-8 h-8 rounded-xl ${
                    selected?.name === "Agriculture de précision"
                      ? "bg-[#2DB273]"
                      : selected?.name === "Aquaculture 4.0"
                      ? "bg-[#809DD0]"
                      : selected?.name === "Agroalimentaire 4.0"
                      ? "bg-[#F18968]"
                      : selected?.name === "Smart cities"
                      ? "bg-[#666A92]"
                      : selected?.name === "Durabilite"
                      ? "bg-[#4DA99C]"
                      : selected?.name === "CO-R&D"
                      ? "bg-[#315E50]"
                      : "bg-[#595866]"
                  }`}
                >
                  {_?.icon}
                </span>
                <span className="text-sm md:font-semibold">{_?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* )} */}
    </section>
  );
};

export default ActivitySectors;
