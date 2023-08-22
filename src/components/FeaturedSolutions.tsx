"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
// images
// import frigo from "/solutions/frigo.png";
// import spaw from "/solutions/spaw.png";
// import ws from "/solutions/ws.png";

const latestSolutions = [
  {
    name: "FRIGO",
    image: "/frigor.png",
    description:
      "AGRI 4.0 propose des solutions de gestion à distance des chambres froides ; des cartes électroniques gérées par des applications web et mobile. Nos capteurs permettent – suivant le besoin du client – de Remonter en temps réel le flux d’entrée/sortie, la température, l’humidité...",
  },
  {
    name: "STATION MÉTÉO",
    image: "/solutions/ws.png",
    description:
      "Agri 4.0 propose une solution SMART qui mesure et fournit des informations sur diverses conditions météorologiques, informations accessibles sur smartphone, tablette ou PC  grace à l'application mobile et web dédiées à cet effet. Vous pouvez suivre en temps réel...",
  },
  {
    name: "SPAW",
    image: "/solutions/spaw.png",
    description:
      "Agri 4.0 propose une solution intelligente integrée qui offre l’accessibilité à toutes les informations liées à l’environnement de la palnte, ce qui permet de donner une visibilité globale sur sa santé  et ses besoins pour une meilleure productivité. Cette solution permet de remonter en temps...",
  },
];

const FeaturedSolutions = () => {
  return (
    <>
      <section className="flex flex-col justify-center w-full h-full px-3 py-16 md:px-14">
        <h1 className="text-2xl md:text-4xl font-semibold text-[#00594C]">
          Dernières Solutions
        </h1>

        <div
          className="grid gap-5 mt-5 md:grid-cols-3 sm:grid-cols-1 "
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          {latestSolutions?.map((solution, i) => (
            <FeaturedSolutionCard key={i} solution={solution} />
          ))}
        </div>
      </section>
      {/*  */}
      <section className="bg-[#081B15] px-6 md:px-14 py-16 flex flex-col md:flex-row justify-between text-white md:items-center">
        <div>
          <h1 className="max-w-lg mb-3 text-2xl font-semibold md:items-center md:text-5xl drop-shadow-md">
            A Propos de Nous !
          </h1>
        </div>
        <div className="max-w-3xl">
          <p
            className="mb-1 text-base leading-snug text-gray-400"
            data-aos="fade-up"
          >
            Opter pour nos solutions avisées vous permettra de vous préparer
            efficacement au succès. Que vous cherchiez à superviser une ferme?
            une irrigation ou tout autre installation{" "}
            <span className="text-[#2DB273]">agricole</span>, notre solution est
            à la fois souple et puissante, vous offrant ainsi les données
            précises et fiables dont vous avez besoin.
          </p>
          <a
            className="inline-flex items-center text-[#2DB273] hover:underline"
            href="/about"
            data-aos="fade-left"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
          {/* <div className="grid grid-cols-3 gap-5 text-center text-white">
            <div>
              <h1 className="font-bold text-8xl">20+</h1>
              <h3 className="text-[#2DB273] font-semibold text-xl uppercase">
                EXPERIENCE
              </h3>
            </div>
            <div>
              <h1 className="font-bold text-8xl">30+</h1>
              <h3 className="text-[#2DB273] font-semibold text-xl uppercase">
                clients
              </h3>
            </div>
            <div>
              <h1 className="font-bold text-8xl">80+</h1>
              <h3 className="text-[#2DB273] font-semibold text-xl uppercase">
                solutions
              </h3>
            </div>
          </div> */}
        </div>
      </section>
      {/*  */}
    </>
  );
};

export default FeaturedSolutions;

const FeaturedSolutionCard = ({
  solution,
}: {
  solution?: {
    name: string;
    image: any;
    description: string;
  };
}) => {
  return (
    <div className="mb-6 border shadow-lg rounded-xl sm:mb-0 ">
      <div className="h-64 overflow-hidden rounded-t-md">
        <Image
          alt="content"
          className="object-cover object-center w-full h-full"
          src={solution?.image || "/solutions/frigo.png"}
          loader={({ src }) => src}
          width={503}
          height={503}
        />
      </div>
      <div className="px-4 pb-6">
        <h2 className="mt-5 text-lg font-semibold text-gray-900 title-font ">
          {solution?.name || "Agriculture de Précision"}
        </h2>
        <p className="mt-2 text-base leading-snug text-gray-600">
          {solution?.description || "Lorem ipsum dolor sit amet consectetur."}
        </p>
        <a
          className="inline-flex items-center mt-3 text-secondary hover:underline"
          href=""
        >
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
