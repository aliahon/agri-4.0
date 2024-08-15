"use client";

import Drone from "@/components/animate/Drone";
import { solutionsArr } from "@/utils/Constants";
import { getSectorById } from "@/utils/helperFunctions";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Sector = ({ params }: any) => {
  const { id } = params;
  const [sector, setSector] = React.useState<null | any>(null);

  useEffect(() => {
    setSector(getSectorById(id));
  }, [id]);

  const [openTab, setOpenTab] = React.useState<number>(1);

  return (
    <section className="flex flex-col pt-14">
      {/* TOP SECTION */}
      <section className="flex flex-col md:flex-row justify-center w-full h-full bg-[#081B15] border-b-8 bg-gradient-to-r border-b-[#2DB273]">
        <div className="flex flex-col w-full h-full md:p-20 mt-10 md:pt-16 md:px-20">
          <h1 className="max-w-sm text-5xl font-bold text-white md:text-5xl drop-shadow-md">
            {sector?.name}
          </h1>
          <p className="max-w-lg mt-3 leading-tight text-justify text-gray-300 text-md">
            {sector?.desc}
          </p>
        </div>
        <div className="items-center justify-center md:w-[800px] md:h-[450px] md:flex">
          <Image
            src="/agric.png"
            width={800}
            height={450}
            className="object-cover w-full h-full"
            alt="Agriculture de Précision"
            loader={({ src }) => src}
          />
        </div>
      </section>
      {/* TOP SECTION */}
      {/*  */}
      <section className="flex-col w-full h-full">
        <h1 className="text-3xl font-bold text-center text-[#00594C] pt-24">
        Toute Les Solutions {sector?.name}
        </h1>
        {id == 1 ? (
          <>
            {/* tabs */}
            <div className="flex items-center justify-center w-full px-24 pt-20 mt-5 overflow-x-scroll no-scrollbar">
              <ul className="flex items-center justify-center w-full gap-5 pb-5 border-b-2 max-w-7xl border-b-gray-300">
                {solutionsArr.slice(0, 7).map((tab, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 w-full md:h-[50px] text-md font-bold cursor-pointer transition duration-300 ease-in-out"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(tab.id);
                    }}
                  >

                    {/* les icons:
                        - 1 : <svg class="h-5 w-5 text-green-800"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"    stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="14.31" y1="8" x2="20.05" y2="17.94" />  <line x1="9.69" y1="8" x2="21.17" y2="8" />  <line x1="7.38" y1="12" x2="13.12" y2="2.06" />  <line x1="9.69" y1="16" x2="3.95" y2="6.06" />  <line x1="14.31" y1="16" x2="2.83" y2="16" />  <line x1="16.62" y1="12" x2="10.88" y2="21.94" /></svg>
                        - 2 : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/></svg>
                        - 3 :
                        - 4 :
                        - 5 :
                        - 6 :  <svg class="h-5 w-5 text-green-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="3.6" y1="9" x2="20.4" y2="9" />  <line x1="3.6" y1="15" x2="20.4" y2="15" />  <path d="M11.5 3a17 17 0 0 0 0 18" />  <path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                        - 7 : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 64l0 64 128 0L368 64l-80 0zM419.2 25.6L496 128l80 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32c-29.2-38.9-75.7-64-128-64s-98.8 25.1-128 64l-64 0c-29.2-38.9-75.7-64-128-64s-98.8 25.1-128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l160 0 0-80c0-26.5 21.5-48 48-48l96 0c20.1 0 39.1 9.5 51.2 25.6zM152 256l16 0c12.1 0 22.1 8.9 23.8 20.6c7.6 2.2 14.9 5.3 21.7 9c9.4-7 22.8-6.3 31.3 2.3l11.3 11.3c8.6 8.6 9.3 21.9 2.3 31.3c3.7 6.8 6.8 14.1 9 21.7c11.6 1.7 20.6 11.7 20.6 23.8l0 16c0 12.1-8.9 22.1-20.6 23.8c-2.2 7.6-5.3 14.9-9 21.7c7 9.4 6.3 22.8-2.3 31.3l-11.3 11.3c-8.6 8.6-21.9 9.3-31.3 2.2c-6.8 3.7-14.1 6.8-21.7 9C190.1 503.1 180.1 512 168 512l-16 0c-12.1 0-22.1-8.9-23.8-20.6c-7.6-2.2-14.9-5.3-21.7-9c-9.4 7.1-22.8 6.3-31.3-2.2L63.8 468.9c-8.6-8.6-9.3-21.9-2.3-31.3c-3.7-6.9-6.8-14.1-9-21.8C40.9 414.1 32 404.1 32 392l0-16c0-12.1 8.9-22.1 20.6-23.8c2.2-7.6 5.3-14.9 9-21.8c-7-9.4-6.3-22.8 2.3-31.3l11.3-11.3c8.6-8.6 21.9-9.3 31.3-2.3c6.8-3.7 14.1-6.8 21.7-9c1.7-11.6 11.7-20.6 23.8-20.6zm8 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM448.2 276.6c1.7-11.6 11.7-20.6 23.8-20.6l16 0c12.1 0 22.1 8.9 23.8 20.6c7.6 2.2 14.9 5.3 21.8 9c9.4-7 22.8-6.3 31.3 2.3l11.3 11.3c8.6 8.6 9.3 21.9 2.2 31.3c3.7 6.8 6.8 14.1 9 21.7c11.6 1.7 20.6 11.7 20.6 23.8l0 16c0 12.1-8.9 22.1-20.6 23.8c-2.2 7.6-5.3 14.9-9 21.7c7 9.4 6.3 22.8-2.2 31.3l-11.3 11.3c-8.6 8.6-21.9 9.3-31.3 2.2c-6.9 3.7-14.1 6.8-21.8 9C510.1 503.1 500.1 512 488 512l-16 0c-12.1 0-22.1-8.9-23.8-20.6c-7.6-2.2-14.9-5.3-21.7-9c-9.4 7.1-22.8 6.3-31.3-2.2l-11.3-11.3c-8.6-8.6-9.3-21.9-2.2-31.3c-3.7-6.9-6.8-14.1-9-21.8C360.9 414.1 352 404.1 352 392l0-16c0-12.1 8.9-22.1 20.6-23.8c2.2-7.6 5.3-14.9 9-21.8c-7-9.4-6.3-22.8 2.2-31.3l11.3-11.3c8.6-8.6 21.9-9.3 31.3-2.3c6.8-3.7 14.1-6.8 21.7-9zM528 384a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>
                    */}
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
            <section className="flex flex-col items-center text-2xs justify-between px-4 py-10 md:px-24 md:flex-row">
              <div>
                {/* {solutionsArr[openTab - 1].name !==
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
            )} */}
                {solutionsArr[openTab - 1].animation}
              </div>
              <div className="flex-col justify-center  lg:px-52">
                <h1 className="text-xl font-bold lg:pl-44 text-primary">
                  {solutionsArr[openTab - 1].name}
                </h1>
                <p className="max-w-3xl mt-3 text-base text-gray-500 lg:pr-40 lg:pl-44">
                  {solutionsArr[openTab - 1].desc}
                </p>
                <Link href={`/solutions/ap/${solutionsArr[openTab - 1].id}`} className=" lg:pl-44">
                  <button className="px-4 py-1.5 mt-4 border-2 text-primary rounded-xl border-secondary hover:bg-secondary hover:text-white transition duration-300 ease-in-out">
                    Discover the devices and solutions
                  </button>
                </Link>
              </div>
            </section>
            <section className="flex flex-col h:auto items-center justify-between px-4 py-10 space-y-5 bg-gray-100  lg:px-52 md:px-24 md:flex-row md:space-y-0">
              <div className="flex-col justify-center ">
                <h1
                  className="text-3xl font-bold text-tertiary"
                  data-aos="fade-left"
                >
                  Pourquoi l’agriculture de précision
                </h1>
                <ul
                  className="max-w-3xl mt-3 space-y-5 text-sm text-justify text-gray-700 list-disc marker:text-tertiary marker:font-bold "
                  data-aos="fade-left"
                >
                  <li>
                    L`agriculture de précision est une approche de l`agriculture
                    qui utilise les technologies de l`information et de la
                    communication pour optimiser la gestion des cultures. Cette
                    méthode permet de maximiser les rendements agricoles tout en
                    réduisant l`utilisation de ressources telles que l`eau, les
                    engrais et les pesticides. Les agriculteurs peuvent ainsi
                    mieux contrôler et ajuster les pratiques agricoles en fonction
                    des variations de conditions locales telles que les conditions
                    climatiques, la qualité des sols et la présence de maladies ou
                    d`insectes nuisibles.
                  </li>
                  <li>
                    L`agriculture de précision peut également aider les
                    agriculteurs à améliorer la qualité de leurs produits en
                    ajustant la gestion des cultures en fonction de leurs besoins
                    spécifiques. Cela peut aider à augmenter la valeur ajoutée des
                    cultures et à améliorer la rentabilité des exploitations
                    agricoles.
                  </li>
                  
                </ul>
              </div>
              <div>
                <Image
                  src="/sectors/whyiot.png"
                  alt="why us"
                  className="object-cover h-[300px] rounded-xl w-full"
                  width={537}
                  height={381}
                  loader={({ src }) => src}
                />
              </div>
            </section>
            <section className="flex flex-col items-center justify-between px-6 py-10 space-y-5 md:px-24 md:flex-row md:space-y-0 lg:px-52">
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
                <h1
                  className="text-3xl font-bold text-tertiary"
                  data-aos="fade-right"
                >
                  Parmi nos missions à Agri 4.0 :
                </h1>
                <ul
                  className="max-w-3xl mt-3 space-y-5 text-sm text-justify text-gray-700 list-disc marker:text-tertiary marker:font-bold "
                  data-aos="fade-right"
                >
                  <li>
                    Rendre l’agriculture rentable quelle que soit la taille du
                    projet : réduire la consommation en intrants et en énergie
                    et augmenter le rendement et la qualité et faire gagner à
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
                    Innover pour trouver des solutions aux problèmes du
                    quotidien des agriculteurs, nous sommes constamment
                    attentifs aux différentes mutations et nous offrons à nos
                    clients une mémoire d’exploitation intuitive, intelligente
                    et accessible à tout moment des 5 coins du globe.
                  </li>
                  <li>
                    Fournir une meilleure expertise agronomique pour dessiner un
                    système agricole plus intelligent, prédictif et durable.
                  </li>
                  <li>
                    Faire évoluer l’agriculture à une échelle plus structurée
                    avec une traçabilité et des indicateurs de performances et
                    donc une meilleure conduite des cultures.
                  </li>
                  <li>
                    Rendre ce secteur plus attrayant pour les jeunes des villes
                    et du monde rural et contribuer à la réduction du taux de
                    chômage au Maroc.
                  </li>
                </ul>
              </div>
            </section>
            {/* SECOND SECTION */}
          </>
        ) : (
          <h1 className="pt-10 pb-16 text-2xl font-bold text-center text-gray-600">
            Coming soon...
          </h1>
        )}
      </section>
    </section>
  );
};

export default Sector;
