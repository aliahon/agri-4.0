"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
// helper functions
import { getSolutionDetails } from "@/utils/helperFunctions";
import Drone from "@/components/animate/Drone";
import Satellite from "@/components/animate/Satellite";
import Camera from "@/components/animate/Camera";
import { SolutionsDetailsProps } from "@/utils/types";
import DevicesSection from "@/components/DevicesSection";
// ======================================================================
// TODO: ******************************
// 1 - [x] Create component to render devices
// 2 - [x] Add the devices to the page
// 3 - [x] Add the solutions to the page
// 4 - [] Dynamic rendring of the page
// ======================================================================

const Solution = ({ params }: any) => {
  const { id } = params;

  const [solution, setSolution] = React.useState<SolutionsDetailsProps | null>(
    null
  );

  useEffect(() => {
    // TODO: update segment for each sector
    setSolution(getSolutionDetails(id, "ap"));
  }, [id]);

  return (
    <section className="flex-col py-14">
      <div
        className="flex justify-between w-full px-5 md:px-20 pb-10 pt-16 text-white border-b-[10px] bg-[#081B15] border-b-secondary flex-col-reverse md:flex-row
      "
      >
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

      <h1
        className="text-4xl font-bold text-center my-14 text-[#00594C]"
        data-aos="fade-up"
      >
        All Services
      </h1>

      {solution?.services?.length && solution?.services?.length > 0 ? (
        solution?.services?.map((_, i) => (
          <>
            {_.desc}
            {_.devices ? (
              <DevicesSection devices={_.devices} />
            ) : (
              <div className="py-4" />
            )}
          </>
        ))
      ) : (
        <h1 className="text-xl font-bold text-center my-14 text-primary">
          Under Construction
        </h1>
      )}
    </section>
  );
};

export default Solution;

{
  /* <>
  <section className="relative flex items-center justify-between gap-10 px-24">
    
    <div className="absolute -z-10 bottom-[200px] left-20 opacity-20">
      <Drone />
    </div>
    <div className="flex flex-col max-w-2xl space-y-3 text-justify ">
      <h1 className="mb-5 text-4xl font-bold">Drone</h1>
      <ul className="space-y-3 list-disc marker:text-secondary">
        <li className="text-sm font-light leading-snug">
          L&apos;agriculture numérique est une industrie florissante et les
          drones sont en train de devenir de plus en plus accessibles et
          sophistiqués. Dotés de caméras haute résolution, ces engins aériens
          peuvent fournir des images en temps réel des cultures, ce qui en fait
          des outils clés pour la micro-Gestion des vastes étendues de terres
          agricoles.
        </li>
        <li className="text-sm font-light leading-snug">
          Les drones autonomes pourraient jouer un rôle majeur dans
          l&apos;inspection, le semis, l&apos;arrosage, le traitement et même la
          récolte des cultures. Chaque drone serait capable de prendre des
          microdécisions indépendantes lorsqu&apos;il se déplace entre les
          plantes individuelles, communiquant des informations utiles au reste
          de son équipe et les utilisant via l&apos;apprentissage automatique.
        </li>
        <li className="text-sm font-light leading-snug">
          {" "}
          Grâce aux drones il est possible de détecter le stress hydrique et
          réaliser des épandages précis de produits phytosanitaires ou
          d&apos;engrais.
        </li>
      </ul>
    </div>

    <div className="relative">
      <Image
        src="/DRONE.png"
        width={400}
        height={400}
        alt="Drone"
        className="z-[9999] rounded-xl"
        data-aos="zoom-out-left"
        loader={({ src }) => src}
      />
      <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

      <div className="absolute bottom-6 z-20 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" />
      <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" />
    </div>
  </section>

  <DevicesSection />

  <section className="flex items-center justify-between gap-20 p-24 bg-gray-100">
    <div className="relative">
      <Image
        src="/SATELLITE.png"
        width={500}
        height={500}
        alt="Drone"
        className="z-50 rotate-180 rounded-xl drop-shadow-sm"
        data-aos="zoom-out-right"
        loader={({ src }) => src}
      />
      <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

      <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" />
      <div className="absolute bottom-6 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" />
    </div>

    <div className="relative flex flex-col max-w-lg space-y-3 text-justify">
      <div className="absolute z-0 right-4 -top-[125px] opacity-20">
        <Satellite />
      </div>
      <h1 className="mb-5 text-4xl font-bold">Satellite</h1>
      <ul className="space-y-3 list-disc marker:text-secondary">
        <li className="text-sm font-light leading-snug">
          L&apos;utilisation des satellites de traitement d&apos;images dans
          l&apos;agriculture de précision aide les agriculteurs à prendre des
          décisions éclairées en fournissant des visualisations précises des
          variations d&apos;expression végétative des parcelles.
        </li>
        <li className="text-sm font-light leading-snug">
          Grâce à l&apos;utilisation de satellites pour le traitement
          d&apos;images, les agriculteurs peuvent analyser la tendance et
          l&apos;évolution de l&apos;état sanitaire de leurs cultures, calculer
          les indices de végétation et les paramètres physiologiques, et même
          détecter des problèmes tels que le stress hydrique, la sécheresse et
          la salinité des parcelles.
        </li>
        <li className="text-sm font-light leading-snug">
          Ces informations sont d&apos;une grande aide pour les agriculteurs,
          leur permettant de mieux comprendre la santé de leurs cultures et
          d&apos;ajuster leur gestion en conséquence. En fin de compte,
          l&apos;utilisation du traitement d&apos;images peut améliorer la
          productivité et la rentabilité de l&apos;exploitation agricole, tout
          en réduisant l&apos;impact sur l&apos;environnement.
        </li>
      </ul>
    </div>
  </section>

  <section className="flex items-center justify-between gap-20 p-24">
    <div className="flex flex-col max-w-lg space-y-3 text-justify">
      <h1 className="mb-5 text-4xl font-bold">Camera au sol</h1>
      <ul className="space-y-3 list-disc marker:text-secondary">
        <li className="text-sm font-light leading-snug">
          Les caméras au sol peuvent également être utilisées pour aider à
          cartographier les champs et à identifier les zones qui nécessitent une
          gestion différente. Les informations collectées peuvent être utilisées
          pour créer des cartes de rendement, pour planifier la plantation et la
          fertilisation des cultures, et pour identifier les zones qui
          nécessitent des traitements supplémentaires.
        </li>
        <li className="text-sm font-light leading-snug">
          Les avantages de l&apos;utilisation de caméras au sol en agriculture
          de précision sont leur capacité à fournir des informations détaillées
          sur les cultures et le sol à un coût relativement faible. Les images
          collectées peuvent être analysées pour fournir des informations utiles
          aux agriculteurs, ce qui peut les aider à prendre des décisions plus
          éclairées et à améliorer l&apos;efficacité de leur gestion des
          cultures.
        </li>
      </ul>
    </div>

    <div className="relative">
      <Image
        src="/CAMERA AU SOL.png"
        width={300}
        height={300}
        alt="Drone"
        className="z-50 drop-shadow-sm"
        unoptimized
        data-aos="zoom-out-left"
        loader={({ src }) => src}
      />
      <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

      <div className="absolute bottom-6 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" />
      <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" />
    </div>
  </section>
</>; */
}
