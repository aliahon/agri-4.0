"use client";

import Image from "next/image";
import React from "react";

const Device = ({ params }: any) => {
  // TODO: make content dynamic
  console.log(params);

  return (
    <main className="px-10 pt-20 pb-20 md:pt-40 md:px-36">
      {/* Product header */}
      <section className="flex flex-col-reverse w-full md:flex-row md:items-center md:justify-between md:space-x-10 md:space-y-0 ">
        <div className="mt-4">
          <span className="px-2 py-1 text-white bg-green-500 rounded-lg">
            New
          </span>
          <p className="max-w-lg mt-2 text-2xl font-bold text-gray-900 md:text-4xl">
            Capteur de vent PCE FST-200-201 (vitesse)
          </p>
          <p className="mt-2 text-xs text-gray-500 md:max-w-lg md:text-base">
            Le capteur de vitesse est un générateur d&apos;impulsion qui
            transforme un mouvement de rotation mécanique en un signal
            électrique. Ce dernier est envoyé au calculateur pour être
            interprété et utilisé notamment par l&apos;affichage sur le tableau
            de bord.
          </p>
        </div>
        <div>
          <Image
            src="/logo.svg"
            alt="logo"
            width="350"
            height="350"
            loader={({ src }) => src}
          />
        </div>
      </section>
      {/* End product header */}
      <section>
        <h1 className="text-3xl font-bold text-green-700 mt-14">
          Product Information:
        </h1>
        <div className="flex flex-col justify-between mt-12 md:flex-row">
          <h1 className="text-2xl font-bold text-gray-900">Overview:</h1>
          <div className="max-w-4xl">
            <p className="mt-2 text-base text-gray-500 ">
              L&apos;utilisation des capteurs de roue actifs présente plusieurs
              avantages : Ils détectent la vitesse de rotation des roues à
              partir de l&apos;arrêt, donc permettent de fournir des données
              précises au système anti-patinage (ASR) lors du démarrage de la
              voiture. Ils détectent les mouvements d&apos;avance et de recul du
              véhicule.
              <br />
              <br />
              Le capteur de vitesse, un composant indispensable pour assurer le
              fonctionnement de plusieurs systèmes embarqués, permet de mesurer
              la vitesse de rotation magnétique afin de fournir une tension qui
              correspond à la vitesse de rotation.
            </p>
            <hr className="max-w-4xl mt-10 border-gray-300 border-opacity-50 border-solid border-1 " />
            <div className="flex justify-between">
              <p className="max-w-4xl mt-2 text-base text-gray-500">18</p>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section>
        <h1 className="mt-10 text-3xl font-bold text-green-800">
          Similar products:
        </h1>
        <hr className="max-w-[120px] mt-2 border-2 border-green-400 border-solid" />
        <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex flex-col items-center p-4 space-y-4 shadow-xl rounded-xl"
            >
              <Image
                src="/devices/DEVICE 3.png"
                alt="logo"
                width="250"
                height="250"
                loader={({ src }) => src}
              />
              <p className="mt-2 text-base font-bold text-gray-900">
                Capteur de vent PCE FST-200-201 (vitesse)
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*  */}
    </main>
  );
};

export default Device;
