"use client";
import Clients from "@/components/Clients";
import Image from "next/image";

const About = () => {
  return (
    <main className="flex flex-col text-justify bg-gray-100 pt-14">
      <section className="relative flex flex-col justify-center w-full h-full px-8 py-10 md:px-40 md:py-20 border-b-8 main-section2 bg-gradient-to-r border-b-secondary">
        <h1 className="text-2xl mt-4 md:text-6xl font-black drop-shadow-md" data-aos="fade-left">A propos de nous</h1>
        <p className="max-w-3xl mt-3 leading-snug text-gray-300 text-sm md:text-base font-normal drop-shadow-2xl" data-aos="fade-right">
          A <span className="font-semibold text-secondary">AGRI 4.0</span> nous
          nous chargeons de la recherche des solutions, le design et la
          réalisation de capteurs électroniques et développement des
          applications web et mobile permettant la gestion intelligente des
          fermes et tous les équipements qui s&apos;y réfèrent à travers des
          outils de suivi, monitoring et analyse en temps réel facilitant le
          processus de prise de décision et pouvant mener à des processus de
          gestion prédictive. <br />
          <br />
          Nous sommes aussi actifs dans les domaines de l&apos;agoralimentaire
          4.0, l&apos;aquaculture 4.0, SMART cities, la durabilité, la CO R&D et
          l&apos;Accompagnement/Conseil.
        </p>
      </section>
      {/*  */}
      <section className="md:flex  md:items-center py-4 md:justify-between px-8 md:px-24 md:my-10 bg-[#FAFAFA] gap-x-4">
        <div className="flex-col  justify-center ">
          <h1 className="text-xl font-bold">
            Pourquoi nous choisir AGRI{" "}
            <span className="text-secondary">4.0</span>
          </h1>
          <p className="max-w-3xl mt-3 text-base font-light text-gray-700">
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
            src="/about/why.jpeg"
            alt="why us"
            className="object-cover rounded-xl w-[521px] h-[344px]"
            width={521}
            height={344}
            loader={({ src }) => src}
          />
        </div>
      </section>
      {/*  */}
      <section className="md:flex items-center justify-between py-4 px-8 md:px-24 my-10  bg-[#081B15] text-white gap-x-4">
        <div>
          <Image
            src="/about/why2.svg"
            alt="why us"
            className="object-cover rounded-xl w-[521px] h-[344px]"
            width={521}
            height={344}
            loader={({ src }) => src}
          />
        </div>
        <div className="flex-col justify-center ">
          <h1 className="text-xl font-black">
            Notre équipe AGRI {" "}
            <span className="text-secondary">4.0</span>
          </h1>
          <p className="max-w-3xl mt-3 text-base font-light text-gray-300">
          Une équipe jeune, créative, pluridisciplinaire et motivée. Nous rassemblons des compétences complémentaires, avec un point commun qui est la motivation à donner le meilleur.
          <br />
          Notre équipe est composée d'ingénieurs en électronique, informatique, agronomie, industrie, marketing et commerce. Nous disposons de nombreuses années d'expérience et aujourd'hui, on s'associe à de jeunes diplômés pour allier le savoir et l’innovation pour atteindre l'objectif ultime : Mettre la technologie au service de tous.
          </p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row md:flex-row  justify-between px-4 lg:px-24 md:py-10 mb-5">
        {[
          [
            "/about/culture.svg",
            "culture",
            "Partage, Collaboration, Professionnalisme, Respect.",
          ],
          ["/about/vision.svg", "vision", "Servir l’agriculture."],
          [
            "/about/value.svg",
            "values",
            "Citoyenneté, Engagement, Ethique, Responsabilité sociétale.",
          ],
        ].map((item, index) => (
          <Card key={index} icon={item[0]} title={item[1]} desc={item[2]} />
        ))}
      </section>
      <Clients />
    </main>
  );
};

export default About;

const Card = ({ icon, title, desc }: any) => (
  <div className="flex flex-col items-center p-16 justify-center md:w-64 md:h-64 gap-6">
    <Image
      src={icon}
      alt={title}
      className="object-cover w-24 h-24"
      width={100}
      height={100}
      loader={({ src }) => src}
    />
    <h1 className="mt-5 lg:text-3xl font-bold uppercase text-primary">{title}</h1>
    <p className="max-w-md mt-3 md:text-2xl font-normal text-center text-gray-500">{desc}</p>
  </div>
);
