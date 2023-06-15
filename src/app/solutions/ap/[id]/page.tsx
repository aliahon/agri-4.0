"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
// helper functions
import { getSolutionsBySectorId } from "@/utils/helperFunctions";
import Drone from "@/components/animate/Drone";
import Satellite from "@/components/animate/Satellite";
import Camera from "@/components/animate/Camera";

const Solution = ({ params }: any) => {
  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className}`} style={{ ...style }} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-current text-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-black`}
        style={{ ...style }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-current text-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerMode: true,
    // centerPadding: "60px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const { id } = params;

  // const [solutions, setSolutions] = React.useState<null | any[]>(null);

  // useEffect(() => {
  //   setSolutions(getSolutionsBySectorId(Number(id)));
  // }, [id]);

  const devices = [
    {
      id: 1,
      title: "Parrot Sequoia",
      description: "The revolutionary multispectral",
      image: "/DEVICE 1.png",
    },
    {
      id: 2,
      title: "MicaSense RedEdge-MX",
      description: "Multispectral camera",
      image: "/DEVICE 2.webp",
    },
    {
      id: 3,
      title: "SLANTRANGE 3P",
      description: "NDVI Camera",
      image: "/DEVICE 3.png",
    },
    {
      id: 4,
      title: "Drone",
      description: "Drone",
      image: "https://dummyimage.com/1200x600",
    },
  ];

  return (
    <section className="flex-col py-14">
      <div className="flex justify-between w-full p-20 text-white border-b-[10px] bg-[#081B15] border-b-secondary">
        <div className="flex flex-col max-w-2xl space-y-3 text-justify">
          <h1 className="mb-5 text-4xl font-bold">
            Vision et <br />
            Traitement D’image
          </h1>
          <p className="text-sm font-light leading-snug">
            La vision et le traitement d&apos;image sont des outils essentiels
            en agriculture de précision pour aider les agriculteurs à surveiller
            et à gérer leurs cultures de manière plus efficace et efficiente.
          </p>
          <p className="text-sm font-light leading-snug">
            L&apos;utilisation de drones équipés de caméras, de capteurs et de
            logiciels d&apos;imagerie sophistiqués permet aux agriculteurs
            d&apos;obtenir des images de haute qualité de leurs champs, y
            compris des images aériennes et de vue de près. Ces images peuvent
            ensuite être analysées pour fournir des informations précises sur
            les cultures, telles que la densité des plantes, la croissance, la
            santé des plantes, la présence de maladies et d&apos;insectes
            nuisibles, et plus encore.
          </p>
          <p className="text-sm font-light leading-snug">
            Les données collectées peuvent être traitées en temps réel à
            l&apos;aide d&apos;application web et mobile pour aider les
            agriculteurs à prendre des décisions plus éclairées sur
            l&apos;utilisation des fertilisants, des pesticides et de
            l&apos;eau. Cela peut aider à réduire les coûts, à augmenter les
            rendements et à améliorer la qualité des cultures.
          </p>
        </div>
        <div className="relative">
          <Image
            src="/TRAI.png"
            width={500}
            height={500}
            alt="Vision et Traitement D’image"
            loader={({ src }) => src}
          />
        </div>
      </div>
      {/*  */}
      <h1
        className="text-4xl font-bold text-center my-14 text-[#00594C]"
        data-aos="fade-up"
      >
        All Services
      </h1>

      <section className="relative flex items-center justify-between gap-10 px-24">
        <div className="flex flex-col max-w-2xl space-y-3 text-justify">
          <h1 className="mb-5 text-4xl font-bold">Drone</h1>
          <ul className="space-y-3 list-disc marker:text-secondary">
            <li className="text-sm font-light leading-snug">
              L&apos;agriculture numérique est une industrie florissante et les
              drones sont en train de devenir de plus en plus accessibles et
              sophistiqués. Dotés de caméras haute résolution, ces engins
              aériens peuvent fournir des images en temps réel des cultures, ce
              qui en fait des outils clés pour la micro-Gestion des vastes
              étendues de terres agricoles.
            </li>
            <li className="text-sm font-light leading-snug">
              Les drones autonomes pourraient jouer un rôle majeur dans
              l&apos;inspection, le semis, l&apos;arrosage, le traitement et
              même la récolte des cultures. Chaque drone serait capable de
              prendre des microdécisions indépendantes lorsqu&apos;il se déplace
              entre les plantes individuelles, communiquant des informations
              utiles au reste de son équipe et les utilisant via
              l&apos;apprentissage automatique.
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
          {/* Drone animation */}
          <div className="absolute -z-10 bottom-6 left-20 opacity-20">
            <Drone />
          </div>
          {/*  */}
        </div>
      </section>

      {/* devices */}
      <section className="flex flex-col px-24 pt-12 pb-24">
        <h1 className="text-2xl font-bold text-[#00594C] mb-8">Devices</h1>
        <div className="w-full h-full">
          <Slider {...settings}>
            {devices?.map((_, i) => (
              <Card
                key={i}
                title={_.title}
                description={_.description}
                image={_.image}
              />
            ))}
          </Slider>
        </div>
      </section>
      {/*  */}
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
          {/* Satellite animation */}
          <div className="absolute left-0 z-0 -top-20 opacity-20">
            <Satellite />
          </div>
          {/*  */}
        </div>

        <div className="flex flex-col max-w-lg space-y-3 text-justify">
          <h1 className="mb-5 text-4xl font-bold">Satellite</h1>
          <ul className="space-y-3 list-disc marker:text-secondary">
            <li className="text-sm font-light leading-snug">
              L&apos;utilisation des satellites de traitement d&apos;images dans
              l&apos;agriculture de précision aide les agriculteurs à prendre
              des décisions éclairées en fournissant des visualisations précises
              des variations d&apos;expression végétative des parcelles.
            </li>
            <li className="text-sm font-light leading-snug">
              Grâce à l&apos;utilisation de satellites pour le traitement
              d&apos;images, les agriculteurs peuvent analyser la tendance et
              l&apos;évolution de l&apos;état sanitaire de leurs cultures,
              calculer les indices de végétation et les paramètres
              physiologiques, et même détecter des problèmes tels que le stress
              hydrique, la sécheresse et la salinité des parcelles.
            </li>
            <li className="text-sm font-light leading-snug">
              Ces informations sont d&apos;une grande aide pour les
              agriculteurs, leur permettant de mieux comprendre la santé de
              leurs cultures et d&apos;ajuster leur gestion en conséquence. En
              fin de compte, l&apos;utilisation du traitement d&apos;images peut
              améliorer la productivité et la rentabilité de l&apos;exploitation
              agricole, tout en réduisant l&apos;impact sur
              l&apos;environnement.
            </li>
          </ul>
        </div>
      </section>
      {/*  */}
      <section className="flex items-center justify-between gap-20 p-24">
        <div className="flex flex-col max-w-lg space-y-3 text-justify">
          <h1 className="mb-5 text-4xl font-bold">Camera au sol</h1>
          <ul className="space-y-3 list-disc marker:text-secondary">
            <li className="text-sm font-light leading-snug">
              Les caméras au sol peuvent également être utilisées pour aider à
              cartographier les champs et à identifier les zones qui nécessitent
              une gestion différente. Les informations collectées peuvent être
              utilisées pour créer des cartes de rendement, pour planifier la
              plantation et la fertilisation des cultures, et pour identifier
              les zones qui nécessitent des traitements supplémentaires.
            </li>
            <li className="text-sm font-light leading-snug">
              Les avantages de l&apos;utilisation de caméras au sol en
              agriculture de précision sont leur capacité à fournir des
              informations détaillées sur les cultures et le sol à un coût
              relativement faible. Les images collectées peuvent être analysées
              pour fournir des informations utiles aux agriculteurs, ce qui peut
              les aider à prendre des décisions plus éclairées et à améliorer
              l&apos;efficacité de leur gestion des cultures.
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
          {/* Camera animation */}
          {/* <div className="absolute right-0 -z-10 -top-20 opacity-20">
            <Camera />
          </div> */}
          {/*  */}
        </div>
      </section>
    </section>
  );
};

export default Solution;

const Card = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col justify-between w-full h-full p-5 space-y-1 border border-gray-300 shadow-md rounded-xl">
      <Image
        src={image}
        width={500}
        height={500}
        alt={title}
        className="object-cover w-full mb-5 rounded-xl"
        loader={({ src }) => src}
      />
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-sm font-light leading-snug">{description}</p>
      </div>
    </div>
  );
};
