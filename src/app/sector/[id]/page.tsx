"use client";

import Drone from "@/components/animate/Drone";
import { solutionsArr } from "@/utils/Constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Sector = ({ params }: any) => {
  const { id } = params;
  const [sector, setSector] = React.useState<null | any[]>(null);

  const [openTab, setOpenTab] = React.useState<number>(1);

  return (
    <section className="flex flex-col pt-14">
      {/* TOP SECTION */}
      <section className="flex flex-col md:flex-row justify-center w-full h-full bg-[#081B15] border-b-8 bg-gradient-to-r border-b-[#2DB273]">
        <div className="flex flex-col w-full h-full px-20 pt-16 mt-10">
          <h1 className="max-w-sm text-5xl font-bold text-white drop-shadow-md">
            Agriculture de Précision
          </h1>
          <p className="max-w-lg mt-3 leading-tight text-justify text-gray-300 text-md">
            <span className="text-green-600">
              L&apos;agriculture de précision
            </span>{" "}
            est une approche qui permet d&apos;optimiser la production agricole
            en utilisant les technologies de l&apos;information et de la
            communication pour prendre des décisions plus éclairées, plus
            rapides et plus précises. Elle offre de nombreux avantages pour les
            agriculteurs, l&apos;environnement et les consommateurs, tels que
            l&apos;augmentation des rendements, la réduction des coûts et de la
            pollution, ainsi que l&apos;amélioration de la qualité des produits
            agricoles.
          </p>
        </div>
        <div className="flex items-center justify-center w-[800px] h-[450px]">
          <Image
            src="/agric.png"
            width={800}
            height={700}
            className="object-cover w-full h-full"
            alt="Agriculture de Précision"
            loader={({ src }) => src}
          />
        </div>
      </section>
      {/* TOP SECTION */}
      {/*  */}
      <section className="flex-col w-full h-full ">
        <h1 className="text-3xl font-bold text-center text-[#00594C] pt-24">
          All Solutions Agriculture De Précision
        </h1>
        {/* tabs */}
        <div className="flex items-center justify-center w-full px-24 pt-20 mt-5 overflow-x-scroll no-scrollbar">
          <ul className="flex items-center justify-center w-full gap-5 pb-5 border-b-2 max-w-7xl border-b-gray-300">
            {solutionsArr.slice(0, 7).map((tab, i) => (
              <li
                key={i}
                className="flex items-center gap-3 w-full h-[50px] text-md font-bold cursor-pointer transition duration-300 ease-in-out"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(tab.id);
                }}
              >
                <span
                  className={`w-14 h-10 rounded-full ${
                    openTab === tab.id ? "bg-primary" : "bg-[#2DB273]"
                  }`}
                ></span>
                <span
                  className={`w-full text-xs ${
                    openTab === tab.id ? "text-primary" : "text-gray-500"
                  }`}
                >
                  {tab.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* SECOND SECTION */}
        <section className="flex items-center justify-between px-24 py-10">
          <div>
            {solutionsArr[openTab - 1].name !==
            "Vision et traitement d’image" ? (
              <Image
                src={solutionsArr[openTab - 1].imgUrl}
                alt="solution"
                className="object-cover h-[300px] w-[500px] rounded-xl"
                width={1920}
                height={1080}
                loader={({ src }) => src}
              />
            ) : (
              <Drone />
            )}
          </div>
          <div className="flex-col justify-center ">
            <h1 className="text-xl font-bold text-primary">
              {solutionsArr[openTab - 1].name}
            </h1>
            <p className="max-w-3xl mt-3 text-sm text-gray-700">
              {solutionsArr[openTab - 1].desc}
            </p>
            <Link href={`/solutions/ap/${solutionsArr[openTab - 1].id}`}>
              <button className="px-4 py-1.5 mt-4 border rounded-xl border-secondary text-primary hover:bg-secondary hover:text-white transition duration-300 ease-in-out">
                Discover the devices and solutions
              </button>
            </Link>
          </div>
        </section>
        <section className="flex items-center justify-between px-24 py-10 bg-gray-100">
          <div className="flex-col justify-center ">
            <h1 className="text-xl font-bold text-secondary">
              Pourquoi l’agriculture de précision
            </h1>
            <p className="max-w-2xl mt-3 text-sm text-justify text-gray-700">
              L`agriculture de précision est une approche de l`agriculture qui
              utilise les technologies de l`information et de la communication
              pour optimiser la gestion des cultures. Cette méthode permet de
              maximiser les rendements agricoles tout en réduisant l`utilisation
              de ressources telles que l`eau, les engrais et les pesticides. Les
              agriculteurs peuvent ainsi mieux contrôler et ajuster les
              pratiques agricoles en fonction des variations de conditions
              locales telles que les conditions climatiques, la qualité des sols
              et la présence de maladies ou d`insectes nuisibles.
              <br />
              <br />
              L`agriculture de précision peut également aider les agriculteurs à
              améliorer la qualité de leurs produits en ajustant la gestion des
              cultures en fonction de leurs besoins spécifiques. Cela peut aider
              à augmenter la valeur ajoutée des cultures et à améliorer la
              rentabilité des exploitations agricoles.
            </p>
          </div>
          <div>
            <Image
              src="/sectors/whyiot.png"
              alt="why us"
              className="object-cover h-[300px] rounded-xl w-full"
              width={1920}
              height={1080}
              loader={({ src }) => src}
            />
          </div>
        </section>
        <section className="flex items-center justify-between px-24 py-10">
          <div>
            <Image
              src="/sectors/ourGoals.png"
              alt="why us"
              className="object-cover h-[300px] rounded-xl w-full"
              width={1920}
              height={1080}
              loader={({ src }) => src}
            />
          </div>
          <div className="flex-col justify-center ">
            <h1 className="text-xl font-bold text-primary">
              Parmi nos missions à Agri 4.0 :
            </h1>
            <ul className="max-w-3xl mt-3 space-y-5 text-sm text-justify text-gray-700 list-disc marker:text-secondary marker:font-bold ">
              <li>
                Rendre l’agriculture rentable quelle que soit la taille du
                projet : réduire la consommation en intrants et en énergie et
                augmenter le rendement et la qualité et faire gagner à
                l’agriculteur en temps et en sérénité.
              </li>
              <li>
                Améliorer la qualité du produit pour répondre au besoin des
                marchés les plus exigeants.
              </li>
              <li>
                Réduire l’empreinte carbonique du secteur agricole : nous
                veillons à générer un fort impact environnementale.
              </li>
              <li>
                Innover pour trouver des solutions aux problèmes du quotidien
                des agriculteurs, nous sommes constamment attentifs aux
                différentes mutations et nous offrons à nos clients une mémoire
                d’exploitation intuitive, intelligente et accessible à tout
                moment des 5 coins du globe.
              </li>
              <li>
                Fournir une meilleure expertise agronomique pour dessiner un
                système agricole plus intelligent, prédictif et durable.
              </li>
              <li>
                Faire évoluer l’agriculture à une échelle plus structurée avec
                une traçabilité et des indicateurs de performances et donc une
                meilleure conduite des cultures.
              </li>
              <li>
                Rendre ce secteur plus attrayant pour les jeunes des villes et
                du monde rural et contribuer à la réduction du taux de chômage
                au Maroc.
              </li>
            </ul>
          </div>
        </section>
        {/* SECOND SECTION */}
      </section>
    </section>
  );
};

export default Sector;
