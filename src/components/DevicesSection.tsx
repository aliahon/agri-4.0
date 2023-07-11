import Image from "next/image";
import React from "react";
import Slider from "react-slick";
// ====================================================================================

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

const DevicesSection = ({ devices }: any) => {
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

  return (
    <section className="flex flex-col px-24 pt-12 pb-24">
      <h1 className="text-2xl font-bold text-[#00594C] mb-8">Devices</h1>
      <div className="w-full h-full">
        <Slider {...settings}>
          {devices?.map((_: any, i: number) => (
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
  );
};

export default DevicesSection;

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
