"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const Newsletter = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    // centerPadding: "150px",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const news = [
    {
      title: "AGROIT DAYS",
      description:
        "Il a été gratifiant d'illustrer aux visiteurs l'importance cruciale du digital dans l'agriculture marocaine et mondiale à travers des démonstrations concrètes et des exemples pratiques. ",
      image: "/events/news1.jpg",
      link: "https://www.youtube.com/watch?v=rosmNmWpH1s&ab_channel=FouadMrTABIT",
    },
    {
      title: "AGRO IT DAYS!",
      description:
        "Thank you Majid Lahlou , AGROIT D. and Ministère de l'Agriculture, de la Pêche Maritime, du Développement Rural et des Eaux et Forêts for the wonderful organization.",
      image: "/events/news2.png",
      link: "https://www.linkedin.com/posts/agri-4-0_trophy-agri-40-at-the-agro-it-days-activity-7021149854588399617-k51t?utm_source=share&utm_medium=member_ios",
    },
    {
      title: "Massachusetts Institute of Technology",
      description:
        "Novel irrigation controller for small and medium farmers in Morocco",
      image: "/events/news3.jpeg",
      link: "/",
    },
    {
      title: "AGROIT DAYS",
      description:
        "It has been rewarding to illustrate to visitors the crucial importance of digital technology in Moroccan and global agriculture through concrete demonstrations and practical examples.",
      image: "/events/news4.png",
      link: "https://www.youtube.com/watch?v=n72pDuI44hs&feature=youtu.be&ab_channel=AlAoulaTV",
    },
    {
      title: "la visite de Sa Majesté le Roi Mohamed VI",
      description:
        "Très honorés de la visite de Sa Majesté le Roi Mohamed VI à notre bureau à la cité d'innovation d'Agadir.",
      image: "/events/news5.jpg",
      link: "https://www.youtube.com/watch?v=UzLAJulOkXY&ab_channel=alyaoum24",
    },
    {
      title: "Bénéfices D’iot sur L’agriculture Marocaine",
      description:
        "Un ingénieur agricole crée un dispositif pour suivre les plantes durant les différentes étapes de production.",
      image: "/events/news6.png",
      link: "https://www.youtube.com/watch?v=UzLAJulOkXY&ab_channel=alyaoum24",
    },
  ];

  return (
    <section className="relative bg-[#081B15] lg:pl-16 py-16 flex flex-col lg:flex-row lg:justify-between lg:items-center">
      <div className="absolute top-0 left-[500px] z-10 w-20 h-full bg-[#081B15] invisible lg:visible"></div>
      <div
        className="items-center justify-center max-w-md p-6"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <h1 className="mb-3 text-2xl font-semibold text-white md:text-5xl">
          Newsletter Agri4.0
        </h1>
        <p className="mb-3 text-gray-400">
          Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles
          et mises à jour sur nos produits et services.
        </p>
        <button className="px-6 py-2 font-semibold text-white transition-all duration-300 ease-in-out transform bg-transparent border-2 border-white rounded-3xl hover:bg-secondary hover:-translate-y-1 ">
          Learn more
        </button>
      </div>
      <div className="w-full gap-2 overflow-x-hidden lg:gap-4 ">
        <Slider {...settings}>
          {news.map((news, i) => (
            <NewsletterCard
              key={i}
              title={news.title}
              description={news.description}
              image={news.image}
              link={news.link}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Newsletter;

const NewsletterCard = ({ title, description, image, link }: any) => {
  return (
    <div className="flex flex-col justify-between w-full p-5 py-4 overflow-hidden bg-white shadow-lg lg:h-[500px] md:m-2 md:space-y-2 rounded-2xl">
      <Image
        src={image}
        alt=""
        className="object-cover w-full h-48 rounded-2xl"
        width={200}
        height={200}
        loader={({ src }) => src}
      />
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <span className="text-sm text-gray-400"> a very rewarding day </span>
      </div>
      <p className="leading-tight text-gray-700 ">{description}</p>
      <Link href={link} target="_blank">
        <button className="px-6 py-2 mt-3 font-semibold text-white transition duration-300 ease-in-out transform rounded-3xl bg-primary hover:bg-secondary-light hover:-translate-y-1">
          Regardez maintenant
        </button>
      </Link>
    </div>
  );
};
