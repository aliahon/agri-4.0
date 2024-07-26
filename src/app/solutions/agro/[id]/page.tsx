import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getSolutionDetails } from "@/utils/helperFunctions";
import { SolutionsDetailsProps } from "@/utils/types";
import { notFound } from "next/navigation";

const Solution = ({ params }: any) => {
  const { id } = params;

  useEffect(() => {
    const validIds = ['chambres-froides', 'machines-agroalimentaire', 'consommation-energetique', 'intelligence-artificielle'];
    if (!validIds.includes(id)) {
      notFound();
    }
  }, [id]);

  const [solution, setSolution] = useState<SolutionsDetailsProps | null>(null);

  useEffect(() => {
    setSolution(getSolutionDetails(id, "agro"));
  }, [id]);

  return (
    <section className="flex-col py-14">
      <div className="flex justify-between w-full px-2 md:px-20 pb-10 pt-16 text-white border-b-[10px] bg-[#081B15] border-b-secondary flex-col-reverse md:flex-row">
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
            alt="Solution Image"
            loader={({ src }) => src}
          />
        </div>
      </div>

      {solution?.services.map((section) => (
        <section key={section.id} className="flex items-center justify-between gap-20 p-24">
          <div className="flex flex-col max-w-lg space-y-3 text-justify">
            <h1 className="mb-5 text-4xl font-bold">{section.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: section.desc }} />
          </div>
          <div className="relative">
            <Image
              src={section.imgUrl}
              width={300}
              height={300}
              alt={section.name}
              className="z-50 drop-shadow-sm"
              loader={({ src }) => src}
            />
          </div>
        </section>
      ))}
    </section>
  );
};

export default Solution;












// const Solution = () => {
//   return (
//     <main className="px-20 py-64 text-center">
//       <h1 className="font-semibold text-primary">gffffffdhbhgh</h1>
//     </main>
//   );
// };

// export default Solution;
