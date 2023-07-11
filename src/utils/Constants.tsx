import Drone from "@/components/animate/Drone";
import {
  AgriPreciseLogo,
  AgroLogo,
  AquaLogo,
  CoRdLogo,
  ConseilLogo,
  DurabiliteLogo,
  SmartCitiesLogo,
} from "./icons";
import { SelectedProps, SolutionsDetailsProps } from "./types";
import Irrigation from "@/components/animate/Water";
import Agribot from "@/components/animate/Agribot";
import Weather from "@/components/animate/Weather";
import Dashboard from "@/components/animate/Dashboard";
import Fertigation from "@/components/animate/Fertigation";
import Image from "next/image";
import Satellite from "@/components/animate/Satellite";
// ===============================================================================================

export const sidebarMenu = [
  {
    name: "Solutions",
    path: "/solutions",
  },
  {
    name: "Devices",
    path: "/devices",
  },
  {
    name: "Sectors",
    path: "/sectors",
  },
  {
    name: "More",
    path: "/more",
  },
];

export const secteurs: SelectedProps[] = [
  {
    id: "1",
    img: "/events/agpre.jpg",
    name: "Agriculture de précision",
    desc: "L'agriculture de précision est une approche qui permet d'optimiser la production agricole en utilisant les technologies de l'information et de la communication pour prendre des décisions plus éclairées.",
    subItems: [
      {
        icon: <AgriPreciseLogo />,
        name: "Vision et traitement d’image",
      },
      {
        icon: <AgriPreciseLogo />,
        name: "Fertigation connecté",
      },
      {
        icon: <AgriPreciseLogo />,
        name: "Gestion de l’eau et du sol",
      },
      {
        icon: <AgriPreciseLogo />,
        name: "IOT",
      },
      {
        icon: <AgriPreciseLogo />,
        name: "Robotique",
      },
      {
        icon: <AgriPreciseLogo />,
        name: "Farm management",
      },
      {
        icon: <AgriPreciseLogo />,
        name: "Climat monitoring",
      },
    ],
  },
  {
    id: "2",
    img: "/sectors/aquaculture.jpg",
    name: "Aquaculture 4.0",
    desc: "Nous intégrons des technologies avancées et des systèmes numériques dans l'industrie aquacole, dans le but d'améliorer l'efficacité, la durabilité et la rentabilité de la production. Cela comprend l'utilisation de capteurs, d'application",
    subItems: [
      {
        icon: <AquaLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AquaLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AquaLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AquaLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AquaLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AquaLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AquaLogo />,
        name: "xxxxxxxxxxxx",
      },
    ],
  },
  {
    id: "3",
    img: "/sectors/agroalimentaire.jpg",
    name: "Agroalimentaire 4.0",
    desc: "Usines intelligentes : les capteurs IoT et les appareils connectés peuvent aider à optimiser les processus de production, à améliorer l'efficacité et à réduire les temps d'arrêt.Maintenance prédictive...",
    subItems: [
      {
        icon: <AgroLogo />,
        name: "Frigo connecté",
      },
      {
        icon: <AgroLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AgroLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AgroLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AgroLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AgroLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AgroLogo />,
        name: "xxxxxxxxxxxx",
      },
    ],
  },
  {
    id: "4",
    img: "/sectors/smartCities.jpg",
    name: "Smart Cities",
    desc: "Les grandes villes marocaines ont un potentiel de développement considérable, mais leur croissance rapide crée des défis tels que la congestion urbaine et la pollution. Pour surmonter ces défis de manière...",
    subItems: [
      {
        icon: <SmartCitiesLogo />,
        name: "Gestion d'énergie",
      },
      {
        icon: <SmartCitiesLogo />,
        name: "Gestion d'irrigation",
      },
      {
        icon: <SmartCitiesLogo />,
        name: "Gestion de l'éclairage",
      },
      {
        icon: <SmartCitiesLogo />,
        name: "Gestion de transport",
      },
      {
        icon: <SmartCitiesLogo />,
        name: "Gestion de parking",
      },
      {
        icon: <SmartCitiesLogo />,
        name: "Traffic management",
      },
      {
        icon: <SmartCitiesLogo />,
        name: "Environnement intelligent",
      },
    ],
  },
  {
    id: "5",
    img: "/sectors/durabilite.jpg",
    name: "Durabilite",
    desc: "En intégrant la durabilité dans nos activités, nous pouvons contribuer à créer un monde plus juste, équitable et durable pour les générations futures. Cela peut se faire à travers des actions telles que la réduction de l'utilisation ...",
    subItems: [
      {
        icon: <DurabiliteLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <DurabiliteLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <DurabiliteLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <DurabiliteLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <DurabiliteLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <DurabiliteLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <DurabiliteLogo />,
        name: "xxxxxxxxxxxx",
      },
    ],
  },
  {
    id: "6",
    img: "/sectors/co-rd.jpg",
    name: "CO-R&D",
    desc: "Notre engagement envers la R&D ne relève pas d'un simple caprice, mais plutôt de notre conviction que c'est la pierre angulaire de la survie de toute entreprise, quelle que soit sa taille ou son modèle économique.",
    subItems: [
      {
        icon: <CoRdLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <CoRdLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <CoRdLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <CoRdLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <CoRdLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <CoRdLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <CoRdLogo />,
        name: "xxxxxxxxxxxx",
      },
    ],
  },
  {
    id: "7",
    img: "/sectors/conseil.jpg",
    name: "Conseil",
    desc: "Agri 4.0 ne limite pas ses prestations à la vente des produits et services. Nous assurons également un accompagnement de qualité avec une équipe jeune et pluridisciplinaire ayant comme point...",
    subItems: [
      {
        icon: <ConseilLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <ConseilLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <ConseilLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <ConseilLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <ConseilLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <ConseilLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <ConseilLogo />,
        name: "xxxxxxxxxxxx",
      },
    ],
  },
];

export const solutions = [
  {
    id: 1,
    name: "Agriculture de précision",
    icon: <AgriPreciseLogo />,
    description:
      "L'agriculture de précision est une approche qui permet d'optimiser...",
    projects: [
      {
        name: "Projet 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 3",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    apps: [
      {
        name: "Frigo.ma",
        description:
          "AGRI 4.0 propose des solutions de gestion à distance des chambres froides ; des cartes électroniques gérées par des applications web et mobile",
      },
      {
        name: "App 2",
        description:
          "AGRI 4.0 propose des solutions de gestion à distance des chambres froides ; des cartes électroniques gérées par des applications web et mobile",
      },
    ],
  },
  {
    id: 2,
    name: "Aquaculture 4.0",
    icon: <AquaLogo />,
    description:
      "Nous intégrons des technologies avancées et des systèmes numériques...",
    projects: [
      {
        name: "Projet 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 3",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    apps: [
      {
        name: "App 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "App 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
  {
    id: 3,
    name: "Agroalimentaire 4.0",
    icon: <AgroLogo />,
    description:
      "Usines intelligentes : les capteurs IoT et les appareils connectés peuvent...",
    projects: [
      {
        name: "Projet 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 3",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    apps: [
      {
        name: "App 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "App 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
  {
    id: 4,
    name: "Smart cities",
    icon: <SmartCitiesLogo />,
    description:
      "Les grandes villes marocaines ont un potentiel de développement...",
    projects: [
      {
        name: "Projet 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 3",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    apps: [
      {
        name: "App 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "App 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
  {
    id: 5,
    name: "Durabilite",
    icon: <DurabiliteLogo />,
    description:
      "En intégrant la durabilité dans nos activités, nous pouvons...",
    projects: [
      {
        name: "Projet 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 3",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    apps: [
      {
        name: "App 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "App 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
  {
    id: 6,
    name: "CO-R&D",
    icon: <CoRdLogo />,
    description:
      "Notre engagement envers la R&D ne relève pas d'un simple caprice...",
    projects: [
      {
        name: "Projet 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 3",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    apps: [
      {
        name: "App 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "App 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
  {
    id: 7,
    name: "Conseil",
    icon: <ConseilLogo />,
    description:
      "Agri 4.0 ne limite pas ses prestations à la vente des produits et services...",
    projects: [
      {
        name: "Projet 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 3",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    apps: [
      {
        name: "App 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "App 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
];

export const solutionsArr = [
  {
    id: 1,
    name: "Vision et traitement d’image",
    desc: "La vision et le traitement d'image sont des outils essentiels en agriculture de précision pour aider les agriculteurs...",
    imgUrl: "/solutions/sig.png",
    animation: <Drone />,
    sectorId: 1,
  },
  {
    id: 2,
    name: "Gestion de l’eau et du sol",
    desc: "En utilisant des capteurs smart et des applications AGRI 4.0, les agri- culteurs peuvent également prévoir les besoins en eau et en nutri- ments de leurs cultures",
    imgUrl: "/solutions/waterm.jpg",
    animation: <Irrigation />,
    sectorId: 1,
  },
  {
    id: 3,
    name: "Robotique",
    desc: "L'utilisation des robots dans l'agriculture de précision est de plus en plus courante et a de nombreux avantages potentiels. Les robots peuvent être utilisés dans : le désherbage, la Plantation, Récolte, Pulvérisation, Surveillance et autres...",
    imgUrl: "/solutions/wm.jpg",
    animation: <Agribot />,
    sectorId: 1,
  },
  {
    id: 4,
    name: "Suivi du climat",
    desc: "La surveillance du climat pour les cultures consiste à observer et à mesurer l'impact du temps et du climat sur la production agricole. Cela comprend la surveillance de variables telles que la température, les précipitations, l'humidité,...",
    imgUrl: "/solutions/farmm.jpeg",
    animation: <Weather />,
  },
  {
    id: 5,
    name: "IOT",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    imgUrl: "/solutions/robotic.jpg",
    animation: <Irrigation />,
  },
  {
    id: 6,
    name: "Fertigation connecté",
    desc: "Nous utilisons des captures pour mesurer les niveaux d'humidité du sol, de nutriments et de pH, ainsi que des dispositifs de contrôle pour ajuster les doses d'eau et d'engrais en fonction des besoins de la plante...",
    imgUrl: "/solutions/robotic.jpg",
    sectorId: 1,
    animation: <Fertigation />,
  },

  {
    id: 7,
    name: "Farm management",
    desc: "Nous mettons à la disposition de nos clients des applications leur permettant de gérer leurs cultures de la meilleure façon qui soit. Nous proposons des application qui aide les agriculteurs ....",
    imgUrl: "/solutions/smartparking.jpg",
    sectorId: 4,
    animation: <Dashboard />,
  },
  // smart cities
  {
    id: 8,
    name: "Gestion d'irrigation",
    desc: "En utilisation l’IOT; l’irrigation intelligente déclenche l’arrosage en temps opportun et en quantité optimale...",
    imgUrl: "/solutions/smartparking.jpg",
    sectorId: 4,
  },
  {
    id: 9,
    name: "Gestion de l'éclairage",
    desc: "La surveillance du climat pour les cultures consiste à observer et à mesurer l'impact du temps et du climat...",
    imgUrl: "/solutions/smartparking.jpg",
    sectorId: 4,
  },
  {
    id: 10,
    name: "Gestion de transport",
    desc: "Pour les sociétés de transport, nous offrons une application leur permettant de mieux gérer leur flotte de véhicules...",
    imgUrl: "/solutions/smartparking.jpg",
    sectorId: 4,
  },
  {
    id: 11,
    name: "Gestion de parking",
    desc: "AGRI 4.0 offre une solution de gestion de parking permettant La gestion intelligente des parkings en utilisant...",
    imgUrl: "/solutions/smartparking.jpg",
    sectorId: 4,
  },
  {
    id: 12,
    name: "Traffic management",
    desc: "Nos solutions offrent une multitude de services visant à mieux organiser le trafic routier. Nous utilisons...",
    imgUrl: "/solutions/smartparking.jpg",
    sectorId: 4,
  },
  {
    id: 13,
    name: "Environnement intelligent",
    desc: "L'environnement intelligent intègre des technologies avancées dans notre environnement quotidien...",
    imgUrl: "/solutions/smartparking.jpg",
    sectorId: 4,
  },
];

export const solutionsDetails: SolutionsDetailsProps[] = [
  // Vision et traitement d’image
  {
    id: "1",
    name: "Vision et traitement d’image",
    desc: (
      <>
        <p className="text-sm font-light leading-snug">
          La vision et le traitement d&apos;image sont des outils essentiels en
          agriculture de précision pour aider les agriculteurs à surveiller et à
          gérer leurs cultures de manière plus efficace et efficiente.
        </p>
        <p className="text-sm font-light leading-snug">
          L&apos;utilisation de drones équipés de caméras, de capteurs et de
          logiciels d&apos;imagerie sophistiqués permet aux agriculteurs
          d&apos;obtenir des images de haute qualité de leurs champs, y compris
          des images aériennes et de vue de près. Ces images peuvent ensuite
          être analysées pour fournir des informations précises sur les
          cultures, telles que la densité des plantes, la croissance, la santé
          des plantes, la présence de maladies et d&apos;insectes nuisibles, et
          plus encore.
        </p>
        <p className="text-sm font-light leading-snug">
          Les données collectées peuvent être traitées en temps réel à
          l&apos;aide d&apos;application web et mobile pour aider les
          agriculteurs à prendre des décisions plus éclairées sur
          l&apos;utilisation des fertilisants, des pesticides et de l&apos;eau.
          Cela peut aider à réduire les coûts, à augmenter les rendements et à
          améliorer la qualité des cultures.
        </p>
      </>
    ),
    imgUrl: "/solutionDetails/image.png",
    services: [
      {
        id: 1,
        name: "Drones",
        desc: (
          <section className="relative flex items-center justify-between gap-10 px-24">
            <div className="absolute -z-10 bottom-[200px] left-20 opacity-20">
              <Drone />
            </div>

            <div className="flex flex-col max-w-2xl space-y-3 text-justify ">
              <h1 className="mb-5 text-4xl font-bold">Drone</h1>
              <ul className="space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  L&apos;agriculture numérique est une industrie florissante et
                  les drones sont en train de devenir de plus en plus
                  accessibles et sophistiqués. Dotés de caméras haute
                  résolution, ces engins aériens peuvent fournir des images en
                  temps réel des cultures, ce qui en fait des outils clés pour
                  la micro-Gestion des vastes étendues de terres agricoles.
                </li>
                <li className="text-sm font-light leading-snug">
                  Les drones autonomes pourraient jouer un rôle majeur dans
                  l&apos;inspection, le semis, l&apos;arrosage, le traitement et
                  même la récolte des cultures. Chaque drone serait capable de
                  prendre des microdécisions indépendantes lorsqu&apos;il se
                  déplace entre les plantes individuelles, communiquant des
                  informations utiles au reste de son équipe et les utilisant
                  via l&apos;apprentissage automatique.
                </li>
                <li className="text-sm font-light leading-snug">
                  {" "}
                  Grâce aux drones il est possible de détecter le stress
                  hydrique et réaliser des épandages précis de produits
                  phytosanitaires ou d&apos;engrais.
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
        ),
        imgUrl: "/solutions/sig.png",
        devices: [
          {
            id: 1,
            title: "Parrot Sequoia",
            description: "The revolutionary multispectral",
            image: "/devices/DEVICE 1.png",
          },
          {
            id: 2,
            title: "MicaSense RedEdge-MX",
            description: "Multispectral camera",
            image: "/devices/DEVICE 2.webp",
          },
          {
            id: 3,
            title: "SLANTRANGE 3P",
            description: "NDVI Camera",
            image: "/devices/DEVICE 3.png",
          },
        ],
      },
      {
        id: 2,
        name: "Satellite",
        desc: (
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
                  L&apos;utilisation des satellites de traitement d&apos;images
                  dans l&apos;agriculture de précision aide les agriculteurs à
                  prendre des décisions éclairées en fournissant des
                  visualisations précises des variations d&apos;expression
                  végétative des parcelles.
                </li>
                <li className="text-sm font-light leading-snug">
                  Grâce à l&apos;utilisation de satellites pour le traitement
                  d&apos;images, les agriculteurs peuvent analyser la tendance
                  et l&apos;évolution de l&apos;état sanitaire de leurs
                  cultures, calculer les indices de végétation et les paramètres
                  physiologiques, et même détecter des problèmes tels que le
                  stress hydrique, la sécheresse et la salinité des parcelles.
                </li>
                <li className="text-sm font-light leading-snug">
                  Ces informations sont d&apos;une grande aide pour les
                  agriculteurs, leur permettant de mieux comprendre la santé de
                  leurs cultures et d&apos;ajuster leur gestion en conséquence.
                  En fin de compte, l&apos;utilisation du traitement
                  d&apos;images peut améliorer la productivité et la rentabilité
                  de l&apos;exploitation agricole, tout en réduisant
                  l&apos;impact sur l&apos;environnement.
                </li>
              </ul>
            </div>
          </section>
        ),
        imgUrl: "/solutions/sig.png",
      },
      {
        id: 3,
        name: "Caméra",
        desc: (
          <section className="flex items-center justify-between gap-20 p-24">
            <div className="flex flex-col max-w-lg space-y-3 text-justify">
              <h1 className="mb-5 text-4xl font-bold">Camera au sol</h1>
              <ul className="space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  Les caméras au sol peuvent également être utilisées pour aider
                  à cartographier les champs et à identifier les zones qui
                  nécessitent une gestion différente. Les informations
                  collectées peuvent être utilisées pour créer des cartes de
                  rendement, pour planifier la plantation et la fertilisation
                  des cultures, et pour identifier les zones qui nécessitent des
                  traitements supplémentaires.
                </li>
                <li className="text-sm font-light leading-snug">
                  Les avantages de l&apos;utilisation de caméras au sol en
                  agriculture de précision sont leur capacité à fournir des
                  informations détaillées sur les cultures et le sol à un coût
                  relativement faible. Les images collectées peuvent être
                  analysées pour fournir des informations utiles aux
                  agriculteurs, ce qui peut les aider à prendre des décisions
                  plus éclairées et à améliorer l&apos;efficacité de leur
                  gestion des cultures.
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
        ),
        imgUrl: "/solutions/sig.png",
      },
    ],
  },
  // Gestion de l’eau
  {
    id: "2",
    name: "Gestion de l’eau Et du sol",
    desc: (
      <>
        <p className="text-sm font-light leading-snug">
          En utilisant des capteurs smart et des applications AGRI 4.0, les
          agri- culteurs peuvent également prévoir les besoins en eau et en
          nutri- ments de leurs cultures. Ils peuvent ainsi prévoir les moments
          où les cultures auront besoin d&apos;eau ou de nutriments
          supplémentaires, ce qui permet de planifier les pratiques agricoles en
          conséquence et d&apos;optimiser les rendements tout en préservant les
          ressources.
        </p>
      </>
    ),
    imgUrl: "/solutionDetails/water.png",
    services: [],
  },
  // Robotique
  {
    id: "3",
    name: "Robotique",
    desc: (
      <>
        <p className="text-sm font-light leading-snug">
          L&apos;utilisation des robots dans l&apos;agriculture de précision est
          de plus en plus courante et a de nombreux avantages potentiels. Les
          robots peuvent être utilisés dans le désherbage, la Plantation,
          Récolte, Pulvérisation, Surveillance et autres.
        </p>
        <p className="text-sm font-light leading-snug">
          Dans l&apos;ensemble, l&apos;utilisation des robots dans
          l&apos;agriculture de préci- sion peut aider à réduire les coûts, à
          améliorer l&apos;efficacité et à réduire l&apos;impact environnemental
          de l&apos;agriculture.
        </p>
      </>
    ),
    imgUrl: "/solutionDetails/robotique.png",
    services: [],
  },
  // Suivi du Climat
  {
    id: "4",
    name: "Suivi du Climat",
    desc: (
      <>
        <p className="text-sm font-light leading-snug">
          La surveillance du climat pour les cultures consiste à observer et à
          mesurer l&apos;impact du temps et du climat sur la production
          agricole. Cela comprend la surveillance de variables telles que la
          tempéra- ture, les précipitations, l&apos;humidité, le vent et le
          rayonnement solaire, ainsi que l&apos;humidité du sol et les niveaux
          de nutriments.
        </p>
        <p className="text-sm font-light leading-snug">
          En surveillant les variables climatiques et leur impact sur la produc-
          tion agricole, les agriculteurs et les décideurs peuvent mieux com-
          prendre et gérer les risques et opportunités associés au change- ment
          climatique.
        </p>
      </>
    ),
    imgUrl: "/solutionDetails/climat.png",
    services: [],
  },
  // Fertigation connecté
  {
    id: "5",
    name: "Fertigation connecté",
    desc: (
      <>
        <p className="text-sm font-light leading-snug">
          Nous utilisons des capteurs pour mesurer les niveaux d&apos;humidité
          du sol, de nutriments et de pH, ainsi que des dispositifs de contrôle
          pour ajuster les doses d&apos;eau et d&apos;engrais en fonction des
          besoins de la plante. Ces données sont collectées et analysées à
          distance à l&apos;aide d&apos;une application mobile.
        </p>
        <p className="text-sm font-light leading-snug">
          La fertigation connectée aide les agriculteurs à optimiser leur pro-
          duction tout en réduisant les pertes et les coûts.
        </p>
      </>
    ),
    imgUrl: "/solutionDetails/fertigation.png",
    services: [],
  },
  // Farm management
  {
    id: "6",
    name: "Farm management",
    desc: (
      <>
        <p className="text-sm font-light leading-snug">
          Nous mettons à la disposition de nos clients des applications leur
          permettant de gérer leurs cultures de la meilleure façon qui soit.
          Nous proposons des applications qui aident les agriculteurs dans la
          planification des cultures, la cartographie des champs, la gestion des
          stocks et l&apos;analyse des rendements, la gestion des achats, la
          préparation des audits,....
        </p>
      </>
    ),
    imgUrl: "/solutionDetails/farm.png",
    services: [],
  },
];

export const sectors = [
  {
    id: "1",
    name: "Agriculture de Précision",
    desc: "L'agriculture de précision est une approche qui permet d'optimiser la production agricole en utilisant les technologies de l'information et de la communication pour prendre des décisions plus éclairées, plus rapides et plus précises. Elle offre de nombreux avantages pour les agriculteurs, l'environnement et les consommateurs, tels que l'augmentation des rendements, la réduction des coûts et de la pollution, ainsi que l'amélioration de la qualité des produits agricoles.",
    imgUrl: "/sectors/precision.png",
    details: [
      {
        id: "1",
        name: "Pourquoi l’agriculture de précision",
        desc: "dsds",
        image: "/sectors/precision.png",
      },
      {
        id: "2",
        name: "Parmi nos missions à Agri 4.0 :",
        desc: "dsds",
        image: "/sectors/precision.png",
      },
    ],
  },
  {
    id: "2",
    name: "AquaCulture",
    desc: "L'aquaculture est l'élevage de poissons, de crustacés, de mollusques, de plantes aquatiques et d'autres organismes aquatiques. Elle est l'une des industries alimentaires à la croissance la plus rapide au monde et joue un rôle important dans la sécurité alimentaire mondiale. L'aquaculture est également une industrie très diversifiée, qui va de la production de masse de poissons d'élevage à la production de niche de produits de luxe.",
    imgUrl: "/sectors/aqua.png",
    details: [
      {
        id: "1",
        name: "Pourquoi l’agriculture de précision",
        desc: "dsds",
        image: "/sectors/precision.png",
      },
    ],
  },
];
