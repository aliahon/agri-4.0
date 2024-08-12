"use client";

import React, { useEffect } from "react";
import { secteurs } from "@/utils/Constants";
// gsap
import { gsap } from "gsap";
// types
import type { SelectedProps } from "@/utils/types";
import Link from "next/link";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// ==========================================================

const ActivitySectors = () => {
  const swiperRef = React.useRef<any | null>(null);

  const [selected, setSelected] = React.useState<SelectedProps>(secteurs[0]);

  const handleChangeSector = (sector: SelectedProps) => {
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

  const handleSwitch = (id: string) => {
    if (swiperRef.current && id) {
      const swiperInstance = swiperRef.current.swiper;
      const slideIndex = Array.from(swiperInstance.slides).findIndex(
        (slide: any) => slide.id === id
      );
      swiperInstance.slideTo(slideIndex);
    }
  };

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      const activeIndex = swiperInstance.activeIndex;
      const slide = swiperInstance.slides[activeIndex];
      const id = slide?.id;

      const sector = secteurs.find((sec) => sec.id === id);
      if (sector) {
        setSelected(sector);
      }
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-center w-full  mx-auto bg-[#F5F5F5] h-[520px]">
      <div className="flex-col items-center justify-center p-4 h-46 md:h-full md:p-10 md:w-1/3 bg-primary">
        <h1 className="text-2xl font-bold text-white md:text-4xl">
          Secteurs d&apos;activités
        </h1>
        <ul className="flex mt-8 space-x-2 overflow-x-scroll text-white md:space-x-0 style-scrollbar md:overflow-x-hidden md:flex-col md:space-y-3 text-md">
          {secteurs?.map((item, i) => (
            <li
              key={i}
              className="p-2 transition duration-300 ease-in-out transform border-2 rounded-md cursor-pointer text-md md:py-2 md:pl-5 md:rounded-3xl border-secondary hover:bg-secondary "
              onClick={() => {
                handleChangeSector(item);
                handleSwitch(item.id);
              }}
            >
              <span>{item?.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-[75%] md:h-full bg-[#F5F5F5]">
        <Swiper ref={swiperRef} slidesPerView={1} onSlideChange={handleSlideChange}>
          
          <SwiperSlide id="1">
            <div className="relative flex flex-col w-full h-full gap-10 p-6 md:p-20 md:pt-24 md:flex-row">
              <div className="relative">
                <div
                  className={`bg-[#2DB273] w-full md:w-[400px] h-40 md:h-96 rounded-3xl`}
                ></div>
                <div
                  className={`-top-3 right-3 w-full md:w-[400px] bg-[url("/events/agpre.jpg")] bg-center bg-cover object-cover h-40 md:h-96 rounded-3xl absolute z-[9999999]`}
                ></div>
              </div>
              <div className="">
                <Link href={`/sector/${selected?.id}`}>
                  <h1
                    className={`text-2xl md:text-4xl font-bold hover:underline text-[#2DB273]`}
                  >
                    {selected?.name}
                  </h1>
                </Link>
                <p className="mt-5 text-base leading-snug text-gray-600 md:text-md">
                  {selected?.desc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {selected?.subItems?.map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center w-full gap-4 mt-5"
                    >
                      <span
                        className={`w-9 h-9 flex justify-center items-center rounded-xl bg-[#2DB273]`}
                      >
                        {_?.icon}
                      </span>
                      <Link
                        className="text-sm md:font-semibold"
                        href={`/solutions/${_?.id}`}
                      >
                        {_?.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="2">
            <div className="relative flex flex-col w-full h-full gap-10 p-6 md:p-20 md:pt-24 md:flex-row">
              <div className="relative">
                <div
                  className={`bg-[#809DD0] w-full md:w-[400px] h-40 md:h-96 rounded-3xl`}
                ></div>
                <div className="bg-[url('/sectors/aquaculture.jpg')] bg-center bg-cover object-cover w-full md:w-[400px] h-40 md:h-96 rounded-3xl absolute -top-3 right-3 z-[9999999]"></div>
              </div>
              <div>
                <Link href={`/sector/${selected.id}`}>
                  <h1
                    className={`text-2xl md:text-4xl font-bold hover:underline text-[#305DAC]`}
                  >
                    {selected?.name}
                  </h1>
                </Link>
                <p className="mt-5 text-base leading-snug text-gray-600 md:text-md">
                  {selected?.desc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {selected?.subItems?.map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center w-full gap-4 mt-5"
                    >
                      <span
                        className={`w-9 h-9 flex items-center justify-center rounded-xl bg-[#305DAC]`}
                      >
                        {_?.icon}
                      </span>
                      <Link
                        className="text-sm md:font-semibold"
                        href={`/solutions/ap/1`}
                      >
                        {_?.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="3">
            <div className="relative flex flex-col w-full h-full gap-10 p-6 md:pt-24 md:p-20 md:flex-row">
              <div className="relative">
                <div
                  className={`bg-[#B87950] w-full md:w-[400px] h-40 md:h-96 rounded-3xl`}
                ></div>
                <div className="w-full md:w-[400px] h-40 md:h-96 bg-[url('/sectors/agroalimentaire.jpg')] bg-center bg-cover object-cover rounded-3xl absolute -top-3 right-3 z-[9999999]"></div>
              </div>
              <div>
                <Link href={`/sector/${selected.id}`}>
                  <h1
                    className={`text-2xl md:text-4xl font-bold hover:underline text-[#863500]`}
                  >
                    {selected?.name}
                  </h1>
                </Link>
                <p className="mt-5 text-base leading-snug md:text-md">
                  {selected?.desc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {selected?.subItems?.map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center w-full gap-4 mt-5"
                    >
                      <span
                        className={`w-9 h-9 rounded-xl bg-[#863500] shadow-md items-center justify-center flex`}
                      >
                        {_?.icon}
                      </span>
                      <Link
                        className="text-sm md:font-semibold"
                        href={`/solutions/ap/1`}
                      >
                        {_?.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="4">
            <div className="relative flex flex-col w-full h-full gap-10 p-6 md:pt-24 md:p-20 md:flex-row">
              <div className="relative">
                <div
                  className={`bg-[#7BADCAD1] w-full md:w-[400px] h-40 md:h-96 rounded-3xl`}
                ></div>
                <div className="w-full md:w-[400px] h-40 md:h-96 bg-[url('/sectors/smartCities.jpg')] bg-center bg-cover object-cover rounded-3xl absolute -top-3 right-3 z-[9999999]"></div>
              </div>
              <div>
                <Link href={`/sector/${selected.id}`}>
                  <h1
                    className={`text-2xl md:text-4xl font-bold hover:underline text-[#0082CE]`}
                  >
                    {selected?.name}
                  </h1>
                </Link>
                <p className="mt-5 text-base leading-snug md:text-md">
                  {selected?.desc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {selected?.subItems?.map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center w-full gap-4 mt-5"
                    >
                      <span
                        className={`w-9 h-9 flex justify-center items-center rounded-xl bg-[#0082CE]`}
                      >
                        {_?.icon}
                      </span>
                      <Link
                        className="text-sm md:font-semibold"
                        href={`/solutions/ap/1`}
                      >
                        {_?.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="5">
            <div className="relative flex flex-col w-full h-full gap-10 p-6 md:pt-24 md:p-20 md:flex-row">
              <div className="relative">
                <div
                  className={`bg-[#4DA99C] w-full md:w-[400px] h-40 md:h-96 rounded-3xl`}
                ></div>
                <div className="w-full md:w-[400px] h-40 md:h-96 bg-[url('/sectors/durabilite.jpg')] bg-center bg-cover object-cover rounded-3xl absolute -top-3 right-3 z-[9999999]"></div>
              </div>
              <div>
                <Link href={`/sector/${selected.id}`}>
                  <h1
                    className={`text-2xl md:text-4xl font-bold hover:underline text-[#00594C]`}
                  >
                    {selected?.name}
                  </h1>
                </Link>
                <p className="mt-5 text-base leading-snug md:text-md">
                  {selected?.desc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {selected?.subItems?.map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center w-full gap-4 mt-5"
                    >
                      <span
                        className={`w-9 h-9 flex justify-center items-center rounded-xl bg-[#00594C]`}
                      >
                        {_?.icon}
                      </span>
                      <Link
                        className="text-sm md:font-semibold"
                        href={`/solutions/ap/1`}
                      >
                        {_?.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="6">
            <div className="relative flex flex-col w-full h-full gap-10 p-6 md:pt-24 md:p-20 md:flex-row">
              <div className="relative">
                <div
                  className={`bg-[#585C5B] w-full md:w-[400px] h-40 md:h-96 rounded-3xl`}
                ></div>
                <div className="w-full md:w-[400px] h-40 md:h-96 bg-[url('/sectors/co-rd.jpg')] bg-center bg-cover object-cover rounded-3xl absolute -top-3 right-3 z-[9999999]"></div>
              </div>
              <div>
                <Link href={`/sector/${selected.id}`}>
                  <h1
                    className={`text-2xl md:text-4xl font-bold hover:underline text-[#081B15]`}
                  >
                    {selected?.name}
                  </h1>
                </Link>
                <p className="mt-5 text-base leading-snug text-gray-600 md:text-md">
                  {selected?.desc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {selected?.subItems?.map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center w-full gap-4 mt-5"
                    >
                      <span
                        className={`w-9 h-9 flex justify-center items-center rounded-xl bg-[#081B15]`}
                      >
                        {_?.icon}
                      </span>
                      <Link
                        className="text-sm md:font-semibold"
                        href={`/solutions/ap/1`}
                      >
                        {_?.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="7">
            <div className="relative flex flex-col w-full h-full gap-10 p-6 md:pt-24 md:p-20 md:flex-row">
              <div className="relative">
                <div
                  className={`bg-[#595866] w-full md:w-[400px] h-40 md:h-96 rounded-3xl`}
                ></div>
                <div className="w-full md:w-[400px] h-40 md:h-96 bg-[url('/sectors/conseil.jpg')] bg-center bg-cover object-cover rounded-3xl absolute -top-3 right-3 z-[9999999]"></div>
              </div>
              <div>
                <Link href={`/sector/${selected.id}`}>
                  <h1
                    className={`text-2xl md:text-4xl font-bold hover:underline text-[#262532]`}
                  >
                    {selected?.name}
                  </h1>
                </Link>
                <p className="mt-5 text-base leading-snug text-gray-600 md:text-md">
                  {selected?.desc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {selected?.subItems?.map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center w-full gap-4 mt-5"
                    >
                      <span
                        className={`w-9 h-9 flex justify-center items-center rounded-xl bg-[#262532]`}
                      >
                        {_?.icon}
                      </span>
                      <Link
                        className="text-sm md:font-semibold"
                        href={`/solutions/ap/1`}
                      >
                        {_?.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ActivitySectors;

