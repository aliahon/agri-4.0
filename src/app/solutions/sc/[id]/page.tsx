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
    <section className="flex-col pt-14">
      <div className="flex justify-between w-full px-2 md:px-20 pb-10 pt-16 text-white border-b-[10px] bg-[#3054A5] border-b-[#7BADCA] flex-col-reverse md:flex-row">
        <div className="flex flex-col space-y-3 md:max-w-2xl md:text-justify">
          <h1 className="mb-5 text-xl font-bold md:text-4xl">
            {solution?.name || null}
          </h1>
          {solution?.desc}
        </div>
        <div className="relative">
          <Image
            src={solution?.imgUrl || ""}
            width={500}
            height={500}
            alt="Vision et Traitement D’image"
            loader={({ src }) => src}
          />
        </div>
      </div>
    </section>
  );
};

export default Solution;
