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
    id: "slide1",
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
    id: "slide2",
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
    id: "slide3",
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
    id: "slide4",
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
    id: "slide5",
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
    id: "slide6",
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
    id: "slide7",
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
        desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        imgUrl: "/solutions/sig.png",
        devices: [
          {
            id: 1,
            name: "Parrot Sequoia The revolutionary multispectral",
            imgUrl: "/solutions/sig.png",
          },
          {
            id: 2,
            name: "MicaSense RedEdge-MX multispectral camera",
            imgUrl: "/solutions/sig.png",
          },
          {
            id: 3,
            name: "SLANTRANGE 3P NDVI Camera",
            imgUrl: "/solutions/sig.png",
          },
        ],
      },
      {
        id: 2,
        name: "Satellite",
        desc: "L'utilisation des satellites de traitement d'images dans l'agriculture de précision aide les agriculteurs à prendre des décisions éclairées en fournissant des visualisations précises des variations d'expression végétative des parcelles. Ces informations sont d'une grande aide pour les agriculteurs, leur permettant de mieux comprendre la santé de leurs cultures et d'ajuster leur gestion en conséquence. En fin de compte, l'utilisation du traitement d'images peut améliorer la productivité et la rentabilité de l'exploitation agricole, tout en réduisant l'impact sur l'environnement.",
        imgUrl: "/solutions/sig.png",
      },
      {
        id: 3,
        name: "Caméra",
        desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
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
    imgUrl: "/solutions/sig.png",
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
    imgUrl: "/solutions/sig.png",
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
    imgUrl: "/solutions/sig.png",
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
    imgUrl: "/solutions/sig.png",
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
    imgUrl: "/solutions/sig.png",
    services: [],
  },
];
