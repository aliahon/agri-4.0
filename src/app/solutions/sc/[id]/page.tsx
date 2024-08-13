"use client";

import { getSCSolutionDetails } from "@/utils/helperFunctions";
import { SolutionsDetailsProps } from "@/utils/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { useEffect } from "react";

const Solution = ({ params }: any) => {
  const { id } = params;

  useEffect(() => {
    const solutions = [7, 8, 9, 10, 11, 12, 13];

    if (!solutions.includes(parseInt(id))) {
      notFound();
    }
  }, [id]);

  const [solution, setSolution] = React.useState<SolutionsDetailsProps | null>(
    null
  );

  useEffect(() => {
    // TODO: update segment for each sector
    setSolution(getSCSolutionDetails(id, "sc"));
  }, [id]);

  return (
    id!=13 ?
    (<section className="flex-col pt-14">
      <div className="flex justify-between w-full px-2 md:px-20 pb-10 pt-16 text-white border-b-[10px] bg-[#3054A5] border-b-[#7BADCA] flex-col-reverse md:flex-row">
        <div className="flex flex-col space-y-3 md:max-w-2xl md:text-justify p-20">
          <h1 className="mb-5 text-3xl font-black md:text-5xl">
            {solution?.name || null}
          </h1>
          <p className="text-base font-normal">
            {solution?.desc}
          </p>
          
        </div>
        <div className="relative">
          <Image
            className="p-16
            "
            src={solution?.imgUrl || ""}
            width={700}
            height={700}
            alt="Solution image"
            loader={({ src }) => src}
          />
        </div>
      </div>
    </section>)
    :
    (<section className="flex-col pt-14">
      <div className="flex justify-between w-full px-2 md:px-20 pb-10 pt-16 text-white border-b-[10px] bg-[#3054A5] border-b-[#7BADCA] flex-col-reverse md:flex-row">
        <div className="flex flex-col space-y-3 md:max-w-2xl md:text-justify">
          <h1 className="mb-5 text-xl font-bold md:text-4xl">
            Coming soon...
          </h1>
          
        </div>
        <div className="relative">
          <Image
            src={solution?.imgUrl || ""}
            width={500}
            height={500}
            alt="Solution image"
            loader={({ src }) => src}
          />
        </div>
      </div>
    </section>)
  );
};

export default Solution;
