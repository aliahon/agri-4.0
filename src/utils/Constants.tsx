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
        id: "/ap/1",
        icon: <AgriPreciseLogo />,
        name: "Vision et traitement d’image",
      },
      {
        id: "/ap/5",
        icon: <AgriPreciseLogo />,
        name: "Fertigation connecté",
      },
      {
        id: "/ap/2",
        icon: <AgriPreciseLogo />,
        name: "Gestion de l’eau et du sol",
      },
      {
        id: "/ap/8",
        icon: <AgriPreciseLogo />,
        name: "IOT",
      },
      {
        id: "/ap/3",
        icon: <AgriPreciseLogo />,
        name: "Robotique",
      },
      {
        id: "/ap/6",
        icon: <AgriPreciseLogo />,
        name: "Farm management",
      },
      {
        id: "/ap/4",
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
        id: "/aqua/1",
        icon: <AquaLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/aqua/2",
        icon: <AquaLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/aqua/3",
        icon: <AquaLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/aqua/4",
        icon: <AquaLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/aqua/5",
        icon: <AquaLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/aqua/6",
        icon: <AquaLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/aqua/7",
        icon: <AquaLogo />,
        name: "Lorem ipsume",
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
        id: "/agro/1",
        icon: <AgroLogo />,
        name: "Frigo connecté",
      },
      {
        id: "/agro/2",
        icon: <AgroLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/agro/3",
        icon: <AgroLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/agro/4",
        icon: <AgroLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/agro/5",
        icon: <AgroLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/agro/6",
        icon: <AgroLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/agro/7",
        icon: <AgroLogo />,
        name: "Lorem ipsume",
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
        id: "/sc/1",
        icon: <SmartCitiesLogo />,
        name: "Gestion d'énergie",
      },
      {
        id: "/sc/2",
        icon: <SmartCitiesLogo />,
        name: "Gestion d'irrigation",
      },
      {
        id: "/sc/3",
        icon: <SmartCitiesLogo />,
        name: "Gestion de l'éclairage",
      },
      {
        id: "/sc/4",
        icon: <SmartCitiesLogo />,
        name: "Gestion de transport",
      },
      {
        id: "/sc/5",
        icon: <SmartCitiesLogo />,
        name: "Gestion de parking",
      },
      {
        id: "/sc/6",
        icon: <SmartCitiesLogo />,
        name: "Traffic management",
      },
      {
        id: "/sc/7",
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
        id: "/dura/1",
        icon: <DurabiliteLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/dura/2",
        icon: <DurabiliteLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/dura/3",
        icon: <DurabiliteLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/dura/4",
        icon: <DurabiliteLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/dura/5",
        icon: <DurabiliteLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/dura/6",
        icon: <DurabiliteLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/dura/7",
        icon: <DurabiliteLogo />,
        name: "Lorem ipsume",
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
        id: "/co/1",
        icon: <CoRdLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/co/2",
        icon: <CoRdLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/co/3",
        icon: <CoRdLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/co/4",
        icon: <CoRdLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/co/5",
        icon: <CoRdLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/co/6",
        icon: <CoRdLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/co/7",
        icon: <CoRdLogo />,
        name: "Lorem ipsume",
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
        id: "/cons/1",
        icon: <ConseilLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/cons/2",
        icon: <ConseilLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/cons/3",
        icon: <ConseilLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/cons/4",
        icon: <ConseilLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/cons/5",
        icon: <ConseilLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/cons/6",
        icon: <ConseilLogo />,
        name: "Lorem ipsume",
      },
      {
        id: "/cons/7",
        icon: <ConseilLogo />,
        name: "Lorem ipsume",
      },
    ],
  },
];

export const solutions = [
  {
    id: 1,
    name: "Agriculture de précision",
    icon: <AgriPreciseLogo color="#10ac84" />,
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
    name: "Smart cities",
    icon: <SmartCitiesLogo color="#10ac84" />,
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
    id: 3,
    name: "Aquaculture 4.0",
    icon: <AquaLogo color="#10ac84" />,
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
    id: 4,
    name: "Agroalimentaire 4.0",
    icon: <AgroLogo color="#10ac84" />,
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
    id: 5,
    name: "Durabilite",
    icon: <DurabiliteLogo color="#10ac84" />,
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
    icon: <CoRdLogo color="#10ac84" />,
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
    icon: <ConseilLogo color="#10ac84" />,
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
    name: "Fertigation connecté",
    desc: "Nous utilisons des captures pour mesurer les niveaux d'humidité du sol, de nutriments et de pH, ainsi que des dispositifs de contrôle pour ajuster les doses d'eau et d'engrais en fonction des besoins de la plante...",
    imgUrl: "/solutions/robotic.jpg",
    sectorId: 1,
    animation: <Fertigation />,
  },

  {
    id: 6,
    name: "Farm management",
    desc: "Nous mettons à la disposition de nos clients des applications leur permettant de gérer leurs cultures de la meilleure façon qui soit. Nous proposons des application qui aide les agriculteurs ....",
    imgUrl: "/solutions/smartparking.jpg",
    sectorId: 4,
    animation: <Dashboard />,
  },
  // smart cities
  {
    id: 7,
    name: "Gestion d'energie",
    desc: "Grace a un appareil connecte au compteur , il sera possible de visualiser la consommation energrtique...",
    imgUrl: "/solutions/smartparking.jpg",
    sectorId: 4,
  },
  {
    id: 8,
    name: "Gestion d'irrigation",
    desc: "En utilisation l’IOT, l’irrigation intelligente déclenche l’arrosage en temps opportun et en quantité optimale...",
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
          <section className="relative flex flex-col items-center justify-between gap-10 px-5 md:px-24 md:flex-row">
            <div className="absolute -z-10 bottom-[200px] left-20 opacity-20">
              <Drone />
            </div>

            <div className="flex flex-col max-w-2xl space-y-3 text-justify ">
              <h1 className="mb-5 text-4xl font-bold">Drone</h1>
              <ul className="px-2 space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  L&apos;agriculture numérique est une industrie orissante et
                  les drones sont en train de devenir de plus en plus
                  accessibles et sophistiqués. Dotés de caméras haute
                  résolution, ces engins aériens peuvent fournir des images en
                  temps réel des cultures, ce qui en fait des outils clés pour
                  la micro-Gestion des vastes étendues de terres agricoles..
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
          <section className="flex flex-col items-center justify-between gap-20 p-4 py-10 bg-gray-100 md:px-24 md:flex-row">
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
              <ul className="px-2 space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  Grâce à l&apos;utilisation d&apos;images satellitaires, nous
                  sommes en mesure de vous fournir une analyse approfondie de
                  vos cultures, orant ainsi une visibilité précise sur la
                  gestion optimale de vos ressources agricoles. Cette analyse
                  permettra de mettre en place une stratégie de gestion durable,
                  en prenant en compte les diférents facteurs qui inuencent la
                  santé et la productivité de vos cultures.
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
          <section className="flex flex-col items-center justify-between gap-20 p-4 md:px-24 md:flex-row ">
            <div className="flex flex-col max-w-lg space-y-3 text-justify">
              <h1 className="mb-5 text-4xl font-bold">Camera au sol</h1>
              <ul className="px-2 space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  Soucieux de suivre de près vos cultures et de détecter à temps
                  tout problème ? nos caméras au sol sont faites pour vous.
                  Grâce à nos caméras vous pouvez surveiller vos cultures,
                  détecter avant dégénération les ravageurs ou maladies,
                  détecter les mauvaises herbes et bien d&apos;autres avantages.
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
    services: [
      {
        id: 1,
        name: "Abar",
        desc: (
          <section className="relative flex flex-col items-center justify-between gap-10 px-4 md:px-24 md:flex-row">
            <div className="flex flex-col max-w-2xl space-y-3 text-justify ">
              <h1 className="mb-5 text-4xl font-bold">Abar</h1>
              <ul className="px-2 space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  www.abar.ma est une plateforme Marocaine unique créée par AGRI
                  4.0 qui regroupe toutes les informations sur les puits :
                  profondeur, quantité d’eau, qualité de l’eau, le cycle de
                  régénérations des nappes, équipement de forage pompage et
                  maintenance..
                </li>
              </ul>
            </div>

            <div className="relative">
              <Image
                src="/about/BG1.png"
                width={450}
                height={450}
                alt="Abar"
                className="z-[9999] rounded-xl"
                data-aos="zoom-out-left"
                loader={({ src }) => src}
              />
              {/* <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

              <div className="absolute bottom-6 z-20 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" />
              <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" /> */}
            </div>
          </section>
        ),
        imgUrl: "/solutions/sig.png",
        devices: [
          {
            id: 1,
            title: "Niveau Liquide",
            description: "capteur De Niveau Pour Eau",
            image: "/devices/DEVICE 12.png",
          },
          {
            id: 2,
            title: "Capteur de turbidite",
            description: "Mesures et Tests",
            image: "/devices/DEVICE 8.png",
          },
          {
            id: 3,
            title: "Transmetteur de turbidité",
            description: "Pour le controle En Ligne",
            image: "/devices/DEVICE 7.png",
          },
        ],
      },
      {
        id: 2,
        name: "Osmose",
        desc: (
          <section className="flex flex-col items-center justify-between gap-20 px-4 py-10 bg-gray-100 md:px-24 md:flex-row">
            <div className="relative">
              <Image
                src="/about/BG5.png"
                width={500}
                height={500}
                alt="Drone"
                className="z-50 rotate-180 rounded-xl drop-shadow-sm"
                data-aos="zoom-out-right"
                loader={({ src }) => src}
              />
              {/* <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

              <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" />
              <div className="absolute bottom-6 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" /> */}
            </div>

            <div className="relative flex flex-col max-w-2xl space-y-3 text-justify">
              <h1 className="mb-5 text-4xl font-bold">Osmose</h1>
              <ul className="px-3 space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  OSMOSE INVERSE MONITORING: Nous proposons une solution vous
                  permettant de suivre en temps réel l’efficacité de votre
                  osmose ainsi que le bon fonctionnement de tous ses
                  équipements.
                </li>
                <li className="text-sm font-light leading-snug">
                  Grâce à notre application vous pouvez suivre en temps réel :
                </li>
                <li className="text-sm font-light leading-snug">
                  Les différentiels de pression : Une chute de pression indique
                  un filtre obstrué, ce qui peut entraîner une réduction des
                  performances du système.
                </li>
                <li className="text-sm font-light leading-snug">
                  Le débit d’eau : Cela aide à déterminer l&apos;efficacité du
                  système et à détecter d&apos;éventuelles fuites.
                </li>
                <li className="text-sm font-light leading-snug">
                  Le débit d’eau : Cela aide à déterminer l&apos;efficacité du
                  système et à détecter d&apos;éventuelles fuites.
                </li>
                <li className="text-sm font-light leading-snug">
                  La concentration de solides dissous totaux dans l&apos;eau
                  avant et après le processus d&apos;osmose inverse Cela aide à
                  déterminer l&apos;efficacité du processus Le niveau de pH de
                  l&apos;eau avant et après le processus d&apos;osmose inverse.
                  Cela aide à déterminer l&apos;efficacité du processus dans
                  l&apos;élimination des impuretés. Un journal de toutes les
                  activités de maintenance, telles que les remplacements de
                  filtres, le nettoyage des membranes et les inspections du
                  système. Cela permet de suivre les performances du système au
                  fil du temps et d&apos;identifier les tendances ou les
                  problèmes qui doivent être résolus.
                </li>
              </ul>
            </div>
          </section>
        ),
        imgUrl: "/solutions/sig.png",
        devices: [
          {
            id: 1,
            title: "Capteur de pression",
            description: "différentielle en ligne",
            image: "/devices/DEVICE 19.png",
          },
          {
            id: 2,
            title: "Capteur de pH Numérique",
            description: "Camera S23 Ultr-camera au sol",
            image: "/devices/DEVICE 21.png",
          },
          {
            id: 3,
            title: "Capteur de Debit d’eau",
            description: "Camera S23 Ultr-camera au sol",
            image: "/devices/DEVICE 22.png",
          },
        ],
      },
      {
        id: 3,
        name: "Bassin et Stockage",
        desc: (
          <section className="flex flex-col items-center justify-between gap-20 px-4 md:px-24 md:flex-row">
            <div className="flex flex-col max-w-lg space-y-3 text-justify">
              <h1 className="mb-5 text-4xl font-bold">Bassin et Stockage</h1>
              <ul className="px-3 space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  Bassin et stockage : Nous vous orons des outils vous
                  permettant de surveiller régulièrement la qualité de
                  l&apos;eau et ainsi garantir que vos plantes reçoivent une eau
                  de qualité optimale pour une croissance saine et maximale. .
                </li>
              </ul>
            </div>

            <div className="relative">
              <Image
                src="/about/BG8.png"
                width={450}
                height={450}
                alt="Drone"
                className="z-50 drop-shadow-sm"
                unoptimized
                data-aos="zoom-out-left"
                loader={({ src }) => src}
              />
              {/* <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

              <div className="absolute bottom-6 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" />
              <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" /> */}
            </div>
          </section>
        ),
        imgUrl: "/about/BG8.png",
        devices: [
          {
            id: 1,
            title: "Niveau Liquide",
            description: "capteur De Niveau Pour Eau",
            image: "/devices/DEVICE 12.png",
          },
          {
            id: 2,
            title: "Capteur de turbidite",
            description: "Mesures et Tests",
            image: "/devices/DEVICE 8.png",
          },
          {
            id: 3,
            title: "Capteur de EC",
            description: "",
            image: "/devices/DEVICE 13.png",
          },
        ],
      },
      {
        id: 2,
        name: "Filtration",
        desc: (
          <section className="flex flex-col items-center justify-between gap-20 px-4 py-10 bg-gray-100 md:px-24 md:flex-row">
            <div className="relative">
              <Image
                src="/about/BG10.png"
                width={450}
                height={450}
                alt="Drone"
                className="z-50 rotate-180 rounded-xl drop-shadow-sm"
                data-aos="zoom-out-right"
                loader={({ src }) => src}
              />
              {/* <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

              <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" />
              <div className="absolute bottom-6 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" /> */}
            </div>

            <div className="relative flex flex-col max-w-lg space-y-3 text-justify">
              <h1 className="mb-5 text-4xl font-bold">Filtration</h1>
              <ul className="px-3 space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  Nos solutions permettent aux agriculteurs de maximiser leur
                  production avec une utilisation minimale des ressources. Grâce
                  aux données recueillies par nos capteurs, les agriculteurs
                  écoutent mieux les plantes et prennent ainsi les décisions les
                  plus adéquates..
                </li>
              </ul>
            </div>
          </section>
        ),
        imgUrl: "/solutions/sig.png",
        devices: [
          {
            id: 1,
            title: "Capteur de pression",
            description: "différentielle en ligne",
            image: "/devices/DEVICE 19.png",
          },
          {
            id: 2,
            title: "Capteur de pH Numérique",
            description: "Camera S23 Ultr-camera au sol",
            image: "/devices/DEVICE 21.png",
          },
          {
            id: 3,
            title: "Capteur de turbidite",
            description: "Mesures et Tests",
            image: "/devices/DEVICE 8.png",
          },
        ],
      },
    ],
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
    services: [
      {
        id: 1,
        name: "AGRIBOT Récolte",
        desc: (
          <section className="relative flex flex-col items-center justify-between gap-10 px-4 py-10 md:px-24 md:flex-row">
            <div className="flex flex-col max-w-2xl space-y-3 text-justify ">
              <h1 className="mb-5 text-4xl font-bold">AGRIBOT Récolte</h1>
              <ul className="px-3 space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  Notre produit AGRIBOT RECOLTE peut fournir les fonctionnalités
                  suivantes suivant le besoin de nos client :
                </li>
                <li className="text-sm font-light leading-snug">
                  Vision par ordinateur : Les robots peuvent être équipés de
                  caméras pour capturer des images de la culture et utiliser des
                  algorithmes de vision par ordinateur pour identifier les
                  fruits ou légumes mûrs à récolter.
                </li>
                <li className="text-sm font-light leading-snug">
                  Bras robotique : Les robots de récolte peuvent être équipés de
                  bras robotiques pour effectuer la cueillette des fruits ou
                  légumes. Les bras peuvent être conçus pour s&apos;adapter à
                  différentes tailles et formes de fruits et légumes.
                </li>
                <li className="text-sm font-light leading-snug">
                  Capteurs de pression : Les robots peuvent être équipés de
                  capteurs de pression pour détecter la maturité des fruits ou
                  légumes en mesurant leur fermeté. Les fruits mûrs ont tendance
                  à être plus souples et moins fermes que les fruits non mûrs.
                </li>
                <li className="text-sm font-light leading-snug">
                  Système de navigation : Les robots peuvent être équipés de
                  systèmes de navigation pour se déplacer à travers les champs
                  de manière autonome. Les systèmes de navigation peuvent
                  utiliser des capteurs lidar, des caméras ou des GPS pour aider
                  les robots à se déplacer avec précision.
                </li>
                <li className="text-sm font-light leading-snug">
                  Système de collecte : Les robots peuvent être équipés de
                  systèmes de collecte pour ramasser les fruits ou légumes
                  récoltés et les transporter vers des bacs ou des conteneurs de
                  stockage.
                </li>
                <li className="text-sm font-light leading-snug">
                  Nos robots peuvent contenir une ou plusieurs de ces
                  fonctionnalités pour créer des robots de récolte efficaces et
                  précis qui peuvent aider les agriculteurs à récolter leurs
                  cultures plus rapidement et de manière plus efficace.
                </li>
              </ul>
            </div>

            <div className="relative">
              <Image
                src="/about/BG2.png"
                width={450}
                height={450}
                alt="Drone"
                className="z-[9999] rounded-xl"
                data-aos="zoom-out-left"
                loader={({ src }) => src}
              />
              {/* <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

              <div className="absolute bottom-6 z-20 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" />
              <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" /> */}
            </div>
          </section>
        ),
        imgUrl: "/solutions/sig.png",
        devices: [
          {
            id: 1,
            title: "Camera de haut qualite ",
            description: "",
            image: "/devices/DEVICE 10.png",
          },
          {
            id: 2,
            title: "Capteur de pression",
            description: "",
            image: "/devices/DEVICE 19.png",
          },
          {
            id: 3,
            title: "RPLIDAR A1M8-R6 360° Laser Range",
            description: "Scanner - 12m range",
            image: "/devices/DEVICE 18.png",
          },
        ],
      },
      {
        id: 2,
        name: "AGRIBOT Traitement",
        desc: (
          <section className="flex flex-col items-center justify-between gap-20 px-6 py-10 bg-gray-100 md:px-24 md:flex-row">
            <div className="relative">
              <Image
                src="/about/BG11.png"
                width={450}
                height={450}
                alt="Drone"
                className="z-50 rotate-180 rounded-xl drop-shadow-sm"
                data-aos="zoom-out-right"
                loader={({ src }) => src}
              />
              {/* <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

              <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" />
              <div className="absolute bottom-6 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" /> */}
            </div>

            <div className="relative flex flex-col max-w-lg space-y-3 text-justify">
              <h1 className="mb-5 text-4xl font-bold">AGRIBOT Traitement</h1>
              <ul className="px-3 space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  Grâce à notre robot, vous bénéfciez d&apos;une pulvérisation
                  uniforme et homogène qui assure une protection optimale pour
                  l&apos;ensemble de vos cultures. Avec AGRIBOT Traitement vous
                  pouvez être sûr que toutes vos plantes seront servies.
                </li>
              </ul>
            </div>
          </section>
        ),
        imgUrl: "/solutions/sig.png",
        devices: [
          {
            id: 1,
            title: "Camera de haut qualite ",
            description: "",
            image: "/devices/DEVICE 10.png",
          },
          {
            id: 2,
            title: "Capteur de pression",
            description: "",
            image: "/devices/DEVICE 19.png",
          },
          {
            id: 3,
            title: "RPLIDAR A1M8-R6 360° Laser Range",
            description: "Scanner - 12m range",
            image: "/devices/DEVICE 18.png",
          },
        ],
      },
      {
        id: 3,
        name: "AGRIBOT Scan",
        desc: (
          <section className="flex flex-col items-center justify-between gap-20 p-2 md:px-24 md:flex-row">
            <div className="flex flex-col max-w-lg space-y-3 text-justify">
              <h1 className="mb-5 text-4xl font-bold">AGRIBOT Scan</h1>
              <ul className="px-3 space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  Notre robot scan sera équipé de caméras et de capteurs pour
                  vous permettre de détecter les signes de maladies dans vos
                  plantes. Ces signes pourraient inclure des changements de
                  couleur, de texture, de forme ou de croissance anormale,
                  d’identi er les couleurs des plantes. Cela aidera à identifer
                  les plantes qui ne sont pas en bonne santé ou qui ont besoin
                  d&apos;être récoltées..
                </li>
              </ul>
            </div>

            <div className="relative">
              <Image
                src="/about/BG12.png"
                width={450}
                height={450}
                alt="Drone"
                className="z-50 drop-shadow-sm"
                unoptimized
                data-aos="zoom-out-left"
                loader={({ src }) => src}
              />
              {/* <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

              <div className="absolute bottom-6 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" />
              <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" /> */}
            </div>
          </section>
        ),
        imgUrl: "/solutions/sig.png",
        devices: [
          {
            id: 1,
            title: "Camera de haut qualite ",
            description: "",
            image: "/devices/DEVICE 10.png",
          },
          {
            id: 2,
            title: "Capteur d'humidité",
            description: "",
            image: "/devices/DEVICE 16.png",
          },
          {
            id: 3,
            title: "Testeur portable de conductivité",
            description: "et température sols",
            image: "/devices/DEVICE 24.png",
          },
        ],
      },
    ],
  },
  // Suivi du Climat
  {
    id: "4",
    name: "Suivi du Climat",
    desc: (
      <p className="text-sm font-light leading-snug">
        Nous vous proposons un suivi climatique avancé en mettant à votre
        disposition tous les outils nécessaires pour surveiller à distance et en
        temps réel le climat de vos cultures. Grâce à nos capteurs, vous pouvez
        obtenir des informations sur la température, les précipitations,
        l&apos;humidité, le vent, le rayonnement solaire, l&apos;humidité du sol
        et les niveaux de nutriments. Ces données précieuses vous permettent de
        prendre des décisions éclairées en temps opportun, de gérer les risques
        et de saisir les opportunités liées au changement climatique..
      </p>
    ),
    imgUrl: "/solutionDetails/climat.png",
    services: [
      {
        id: 1,
        name: "MCCC",
        desc: (
          <section className="relative flex flex-col items-center justify-between gap-10 px-4 md:px-24 md:flex-row">
            <div className="flex flex-col max-w-2xl space-y-3 text-justify ">
              <h1 className="mb-5 text-4xl font-bold">MCCC</h1>
              <ul className="px-3 space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  MCC est une solution AGRI 4.0 qui permet la supervision de vos
                  culture à travers l&apos;installation de capteurs
                  électroniques SMART gérées par des applications web et mobile.
                </li>
                <li className="text-sm font-light leading-snug">
                  L&apos;application assure : Le suivi du climat sous-serre, -
                  Le suivi des irrigations (Nombre d’irrigation par serre, date
                  de début et de fin, niveau de l’EC et du PH lors de
                  l’irrigation etc.) - Le recueil des données importantes à la
                  bonne croissance de la plante se fait de manière automatique
                  et en temps réel et leur traitement se fait grâce à
                  l’intelligence artifcielle. Toutes les données du système sont
                  exploitables pour l’analyse des données et la réalisation des
                  rapports.
                </li>
              </ul>
            </div>

            <div className="relative">
              <Image
                src="https://dummyimage.com/1203x703"
                width={450}
                height={450}
                alt="Drone"
                className="z-[9999] rounded-xl"
                data-aos="zoom-out-left"
                loader={({ src }) => src}
              />
              {/* <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

              <div className="absolute bottom-6 z-20 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" />
              <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" /> */}
            </div>
          </section>
        ),
        imgUrl: "/solutions/sig.png",
        devices: [
          {
            id: 1,
            title: "Rain Gouge Sensor",
            description: "ECOWITT WH40 Wireless",
            image: "/devices/DEVICE 4.png",
          },
          {
            id: 2,
            title: "Capteur de direction du vent",
            description: "Tous les fabricants industriels",
            image: "/devices/DEVICE 6.PNG",
          },
          {
            id: 3,
            title: "Capteur de vent PCE",
            description: "FST-200-201 (vitesse)",
            image: "/devices/DEVICE 17.png",
          },
        ],
      },
    ],
  },
  // Fertigation connecté
  {
    id: "5",
    name: "Fertigation connecté",
    desc: (
      <p className="text-sm font-light leading-snug">
        Nous mettons à votre service des capteurs intelligents vous permettant
        de mesurer les niveaux d&apos;humidité du sol, de nutriments et de pH,
        ainsi que des dispositifs de contrôle pour ajuster les doses d&apos;eau
        et d&apos;engrais en fonction des besoins de la plante. Ces données sont
        collectées et analysées à distance à l&apos;aide d&apos;une application
        mobile accessible via téléphone, tablette ou PC.
      </p>
    ),
    imgUrl: "/solutionDetails/fertigation.png",
    services: [
      {
        id: 1,
        name: "Station tête monitoring",
        desc: (
          <section className="relative flex flex-col items-center justify-between gap-10 px-4 md:px-24 md:flex-row">
            <div className="flex flex-col max-w-2xl space-y-3 text-justify ">
              <h1 className="mb-5 text-4xl font-bold">
                Station tête monitoring
              </h1>
              <ul className="px-3 space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  L’application STM (Station Tête Monitoring) permet la
                  supervision de vos fermes. Elle assure : - Le suivi du climat
                  sous-serre : température, humidité, rayonnement, PH, EC et
                  autre - Le suivi des irrigations (Nombre d’irrigation par
                  serre, date de début et de fin, niveau de l’EC et du PH lors
                  de l’irrigation etc.) - Commander à distance et déclencher
                  tout un système comme celui de la brumisation si un changement
                  climatique inattendu prend place. - Recevoir des notifications
                  en cas de dépassement des seuils dénis - Toutes les données du
                  système sont exploitables pour l’analyse des données et la
                  réalisation des rapports..
                </li>
              </ul>
            </div>

            <div className="relative">
              <Image
                src="/about/BG3.png"
                width={450}
                height={450}
                alt="Drone"
                className="z-[9999] rounded-xl"
                data-aos="zoom-out-left"
                loader={({ src }) => src}
              />
              {/* <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

              <div className="absolute bottom-6 z-20 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" />
              <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" /> */}
            </div>
          </section>
        ),
        imgUrl: "/solutions/sig.png",
        devices: [
          {
            id: 1,
            title: "Manometre",
            description: "",
            image: "/devices/DEVICE 14.png",
          },
          {
            id: 2,
            title: "Debimetre",
            description: "",
            image: "/devices/DEVICE 9.png",
          },
          {
            id: 3,
            title: "Capteur EC ",
            description: "",
            image: "/devices/DEVICE 13.png",
          },
        ],
      },
      {
        id: 2,
        name: "SPAW",
        desc: (
          <section className="flex flex-col items-center justify-between gap-20 px-4 py-10 bg-gray-100 md:px-24 md:flex-row">
            <div className="relative">
              <Image
                src="/about/BG6.png"
                width={450}
                height={450}
                alt="Drone"
                className="z-50 rotate-180 rounded-xl drop-shadow-sm"
                data-aos="zoom-out-right"
                loader={({ src }) => src}
              />
              {/* <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

              <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" />
              <div className="absolute bottom-6 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" /> */}
            </div>

            <div className="relative flex flex-col max-w-lg px-3 space-y-3 text-justify">
              <h1 className="mb-5 text-4xl font-bold">SPAW</h1>
              <ul className="space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  Agri 4.0 propose une nouvelle invention nommée AGRI-SPAW :
                  SOIL – PLANT – AIR – WATER. C’est une solution intelligente
                  intégrée qui offre l’accessibilité à toutes les informations
                  liées à l’environnement de la plante, ce qui permet de donner
                  une visibilité globale sur sa santé, son évolution, sa
                  capacité de production, les maladies dont elle peut soufrir,
                  les ravageurs qui l’attaque, anticiper l’état de stress
                  qu’elle peut ressentir et connaitre exactement ses besoins en
                  nutrition et en eau. Cette solution permet de remonter en
                  temps réel toutes les informations utiles liés au sol, les
                  plantes, l’air et l’eau. Les données acquises sont accessibles
                  à tout moment via une application web dédiée, développée par
                  Agri 4.0..
                </li>
              </ul>
            </div>
          </section>
        ),
        imgUrl: "/solutions/sig.png",
        devices: [
          {
            id: 1,
            title: "Cellule de charge type- S ",
            description: "Serie HM-2300 | Geneql",
            image: "/devices/DEVICE 11.png",
          },
          {
            id: 2,
            title: "Capteur d'humidité",
            description: "de la surface des feuilles,",
            image: "/devices/DEVICE 5.png",
          },
          {
            id: 3,
            title: "Capteur pH pour eau pure",
            description: "OPTISENS PH 8100 - KROHNE",
            image: "/devices/DEVICE 21.png",
          },
        ],
      },
    ],
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
    services: [
      {
        id: 1,
        name: "Production",
        desc: (
          <section className="relative flex flex-col items-center justify-between gap-10 px-4 md:px-24 md:flex-row">
            <div className="flex flex-col max-w-2xl space-y-3 text-justify ">
              <h1 className="mb-5 text-4xl font-bold">Production</h1>
              <ul className="px-3 space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  Nous mettons à votre disposition des solutions vous permettant
                  de gérer à distance vos données, de visualiser les tendances
                  et de rester informé grâce à des alertes en temps réel.
                </li>
                <li className="text-sm font-light leading-snug">
                  Notre solution vous permettra de suivre en temps réel : L’état
                  de vos cultures : La température L’humidité
                  L’évapotranspiration Niveau d’eau Précipitations Humidité des
                  feuilles Niveau d’eau Vitesse de vent
                </li>
                <li className="text-sm font-light leading-snug">
                  Les prévisions des récoltes La gestion du stock La gestion des
                  achats des intrants La gestion de la maintenance des
                  équipements agricoles.
                </li>
              </ul>
            </div>

            <div className="relative">
              <Image
                src="/about/BG4.png"
                width={450}
                height={450}
                alt="Drone"
                className="z-[9999] rounded-xl"
                data-aos="zoom-out-left"
                loader={({ src }) => src}
              />
              {/* <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

              <div className="absolute bottom-6 z-20 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" />
              <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" /> */}
            </div>
          </section>
        ),
        imgUrl: "/solutions/sig.png",
      },
      {
        id: 2,
        name: "Qualité",
        desc: (
          <section className="flex flex-col items-center justify-between gap-20 px-4 py-10 bg-gray-100 md:px-24 md:flex-row">
            <div className="relative">
              <Image
                src="/about/BG7.png"
                width={450}
                height={450}
                alt="Drone"
                className="z-50 rotate-180 rounded-xl drop-shadow-sm"
                data-aos="zoom-out-right"
                loader={({ src }) => src}
              />
              {/* <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

              <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" />
              <div className="absolute bottom-6 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" /> */}
            </div>

            <div className="relative flex flex-col max-w-lg space-y-3 text-justify">
              <h1 className="mb-5 text-4xl font-bold">Qualité</h1>
              <ul className="px-3 space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  Avec notre application web et mobile AGRI-CERT, nous assurons
                  un suivi et contrôle de toutes les certifications disponibles
                  dans le secteur agricole, à savoir : Globalgap, Grasp, Tesco,
                  Smeta etc.
                </li>
                Exemple: GLOBALG.A.
                <li className="text-sm font-light leading-snug">
                  Notre solution vient digitaliser le référentiel GLOBAL G.A.P
                  avec une application simple et sans saisie. Ceci permettra
                  d’effectuer un audit préalable plus rapide et efficace
                </li>
                <li className="text-sm font-light leading-snug">
                  Cette application agricole facilite la gestion des activités
                  de production telles que la planification, la gestion des
                  tâches, la gestion des ressources et des stocks, ainsi que la
                  réalisation d&apos;audits. Elle fournit une analyse des coûts
                  de production et une planification financière pour aider les
                  agriculteurs à mieux gérer leur exploitation agricole.
                </li>
              </ul>
            </div>
          </section>
        ),
        imgUrl: "/solutions/sig.png",
      },
      {
        id: 3,
        name: "Supply chain",
        desc: (
          <section className="relative flex flex-col items-center justify-between gap-10 px-4 md:px-24 md:flex-row">
            <div className="flex flex-col max-w-2xl space-y-3 text-justify ">
              <h1 className="mb-5 text-4xl font-bold">Supply chain</h1>
              <ul className="px-3 space-y-3 list-disc marker:text-secondary">
                <li className="text-sm font-light leading-snug">
                  Notre application supply chain permet aux agriculteurs la
                  gestion de leur chaîne d&apos;approvisionnement, notamment le
                  suivi de la demande, la planification des achats, la gestion
                  des stocks, la gestion des magasins et autres.
                </li>
              </ul>
            </div>

            <div className="relative">
              <Image
                src="/about/BG9.png"
                width={450}
                height={450}
                alt="Drone"
                className="z-[9999] rounded-xl"
                data-aos="zoom-out-left"
                loader={({ src }) => src}
              />
              {/* <div className="absolute top-0 left-0 z-10 w-12 h-12 bg-[#2DB273] rounded-xl shadow-md" />

              <div className="absolute bottom-6 z-20 right-8 w-12 h-12 bg-[#081B15] rounded-xl shadow-sm" />
              <div className="absolute bottom-0 right-0 z-10 w-12 h-12 bg-green-600 shadow-md rounded-xl" /> */}
            </div>
          </section>
        ),
        imgUrl: "/solutions/sig.png",
      },
    ],
  },
];

export const smartCitiesSolutions = [
  // Gestion d'énergie
  {
    id: "7",
    name: "Gestion d'énergie",
    desc: (
      <>
        <p className="text-sm font-light leading-snug">
          En utilisant notre dispositif connecté à votre compteur et une
          application dédiée, notre solution vous offre la capacité de
          surveiller instantanément et à distance votre consommation
          d&apos;énergie. Vous pourrez ainsi ajuster vos habitudes pour une
          utilisation plus parcimonieuse et ciblée. Notre système de gestion de
          la consommation énergétique s&apos;avère un allié efficace pour
          réduire vos dépenses énergétiques.
        </p>
      </>
    ),
    imgUrl: "/solutionDetails/Group 832.png",
    services: [],
  },
  // Gestion d'irrigation
  {
    id: "8",
    name: "Gestion d'irrigation",
    desc: (
      <>
        <p className="text-sm font-light leading-snug">
          Avec notre système de contrôle de l&apos;irrigation, vous serez en
          mesure de déclencher l&apos;arrosage au moment propice et avec la
          quantité idéale. Cela assurera le développement optimal de vos
          végétaux tout en optimisant l&apos;utilisation de l&apos;eau et de
          l&apos;énergie.
        </p>
      </>
    ),
    imgUrl: "/solutionDetails/Group 833.png",
    services: [],
  },
  // Gestion de l'éclairage
  {
    id: "9",
    name: "Gestion de l'éclairage",
    desc: (
      <>
        <p className="text-sm font-light leading-snug">
          Grâce à des capteurs avancés et une technologie de pointe, nos
          solutions sont conçues pour répondre aux besoins spécifiques de chaque
          espace. En utilisant nos capteurs smart, notre système ajuste
          automatiquement l&apos;intensité lumineuse et permet ainsi un
          éclairage adéquat tout en minimisant la consommation d&apos;énergie.
          De plus, notre plateforme offre une interface conviviale qui permet
          aux utilisateurs de personnaliser les paramètres d&apos;éclairage en
          fonction de leurs préférences. .
        </p>
      </>
    ),
    imgUrl: "/solutionDetails/Group 836.png",
    services: [],
  },
  // Gestion de transport
  {
    id: "10",
    name: "Gestion de transport",
    desc: (
      <p className="text-sm font-light leading-snug">
        Notre solution repose sur des capteurs intelligents, des données en
        temps réel et des algorithmes, permettant de surveiller et
        d&apos;analyser en temps réel le flux de circulation, les conditions
        météorologiques et d&apos;autres paramètres pertinents. Cette analyse
        approfondie permet une gestion proactive du trafic, des itinéraires
        optimisés et une réduction des embouteillages.
      </p>
    ),
    imgUrl: "/solutionDetails/Group 834.png",
    services: [],
  },
  // Gestion de parking
  {
    id: "11",
    name: "Gestion de parking",
    desc: (
      <>
        <p className="text-sm font-light leading-snug">
          PARKINO une solution de gestion de parking développée par AGRI 4.0
          permettant La gestion intelligente des parkings, elle comporte :
        </p>
        <ul>
          <li>
            - Un système de comptage et de détection permettant aux conducteurs
            de trouver rapidement des places de parking disponibles à travers
            l&apos;application mobile dédiée.
          </li>
          <li>
            - Itinéraires en temps réel vers les places de parking disponibles,
            en tenant compte de la disponibilité.
          </li>
          <li>
            - Gestion des accès : faciliter le processus d&apos;entrée et de
            sortie dans les zones à barrières.
          </li>
        </ul>
      </>
    ),
    imgUrl: "/solutionDetails/Group 835.png",
    services: [],
  },
  // Gestion de trafic
  {
    id: "12",
    name: "Gestion de trafic",
    desc: (
      <>
        <p className="text-sm font-light leading-snug">
          Avec notre système de contrôle de l&apos;irrigation, vous serez en
          mesure de déclencher l&apos;arrosage au moment propice et avec la
          quantité idéale. Cela assurera le développement optimal de vos
          végétaux tout en optimisant l&apos;utilisation de l&apos;eau et de
          l&apos;énergie.
        </p>
      </>
    ),
    imgUrl: "/solutionDetails/Group 837.png",
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
