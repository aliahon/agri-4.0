import Clients from "@/components/Clients";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="flex flex-col text-justify bg-gray-100 pt-14">
      <section className="flex flex-col justify-center w-full h-full px-20 py-20 border-b-8 main-section2 bg-gradient-to-r border-b-secondary">
        <h1 className="text-5xl font-bold drop-shadow-md">A propos de nous</h1>
        <p className="max-w-md mt-3 text-md">
          L&apos;agriculture{" "}
          <span className="font-semibold text-secondary drop-shadow-md">
            4.0
          </span>{" "}
          est l&apos;évolution de l&apos;agriculture de précision et désigne
          l&apos;ensemble des actions qui sont mises en œuvre dans
          l&apos;agriculture.
        </p>
      </section>
      {/*  */}
      <section className="flex items-center justify-between px-24 py-10 my-5 bg-gray-100">
        <div className="flex-col justify-center ">
          <h1 className="text-xl font-bold">
            Pourquoi nous choisir AGRI{" "}
            <span className="text-secondary">4.0</span>
          </h1>
          <p className="max-w-3xl mt-3 text-sm text-gray-700">
            A AGRI 4.0 nous nous chargeons de la recherche des solutions, le
            design et la réalisation de capteurs électroniques et développement
            des applications web et mobile permettant la gestion intelligente
            des fermes et tous les équipements qui s&apos;y réfèrent à travers
            des outils de suivi, monitoring et analyse en temps réel facilitant
            le processus de prise de décision et pouvant mener à des processus
            de gestion prédictive. Nous sommes aussi actifs dans les domaines de
            l&apos;agoralimentaire 4.0, l&apos;aquaculture 4.0, SMART cities, la
            durabilité, la CO R&D et l&apos;Accompagnement/Conseil.
          </p>
        </div>
        <div>
          <Image
            src="https://dummyimage.com/1203x703"
            alt="why us"
            className="object-cover h-[300px] rounded-xl w-96"
            width={1920}
            height={1080}
          />
        </div>
      </section>
      {/*  */}
      <section className="flex items-center justify-between px-24 py-10 my-5 bg-[#081B15] text-white">
        <div>
          <Image
            src="https://dummyimage.com/1203x703"
            alt="why us"
            className="object-cover rounded-xl w-96 h-[300px]"
            width={1920}
            height={1080}
          />
        </div>
        <div className="flex-col justify-center ">
          <h1 className="text-xl font-bold">
            Pourquoi nous choisir AGRI{" "}
            <span className="text-secondary">4.0</span>
          </h1>
          <p className="max-w-3xl mt-3 text-sm text-gray-300">
            Nous misons sur la R&D, c’est le cœur de notre quotidien. Pas pour
            se doter d’un luxe, mais parce que nous sommes totalement convaincus
            que c’est l’outil le plus garantissant de la survie d’une entreprise
            quel que soit son modèle économique ou sa taille d’une part et
            d’autre part car c’est la première étape dans la promotion de
            l’innovation au sein de toute organisation. <br />
            <br />
            La R&D établit une feuille de route et crée une vision et une
            stratégie à long terme pour une entreprise en quête de l’innovation.
            Les innovations sont la clé pour accroître l’efficience et
            l’efficacité au sein d’une organisation et dans les produits et
            services qu’elle offre et nous mettons notre savoir-faire dans ce
            volet au service de nos clients pour améliorer leur quotidien.
          </p>
        </div>
      </section>
      {/*  */}
      <section className="flex justify-between px-24 py-10 mb-5">
        {[
          [
            "",
            "culture",
            "Partage, Collaboration, Professionnalisme, Respect.",
          ],
          ["", "vision", "Servir l’agriculture."],
          [
            "",
            "values",
            "Citoyenneté, Engagemen, Ethique, Responsabilité sociétale.",
          ],
        ].map((item, index) => (
          <Card key={index} icon={item[0]} title={item[1]} desc={item[2]} />
        ))}
      </section>
      {/*  */}
      <Clients />
    </main>
  );
};

export default About;

const Card = ({ icon, title, desc }: any) => (
  <div className="flex flex-col items-center justify-center w-64 h-64 gap-6">
    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-secondary">
      {icon}
    </div>
    <h1 className="mt-5 text-2xl font-bold uppercase text-primary">{title}</h1>
    <p className="max-w-md mt-3 text-sm text-center text-gray-500">{desc}</p>
  </div>
);
