import ActivitySectors from "@/components/ActivitySectors";
import Clients from "@/components/Clients";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col text-justify pt-14">
      <section className="flex flex-col justify-center w-full h-full px-8 py-20 border-b-8 md:px-20 main-section bg-gradient-to-r border-b-secondary">
        <h1
          className="text-3xl font-bold md:text-7xl drop-shadow-md"
          // aos
          data-aos="fade-right"
        >
          We Innovate for{" "}
          <span className="block text-secondary drop-shadow-md">
            Agriculture
          </span>
        </h1>
        <p
          className="max-w-md mt-3 leading-snug text-gray-300 text-md test-txt"
          data-aos="fade-right"
        >
          L&apos;agriculture{" "}
          <span className="font-semibold text-secondary drop-shadow-md">
            4.0
          </span>{" "}
          est l&apos;évolution de l&apos;agriculture de précision et désigne
          l&apos;ensemble des actions qui sont mises en œuvre dans
          l&apos;agriculture.
        </p>
        <div className="flex items-center max-w-sm gap-5">
          <button className="px-6 py-2 mt-6 font-semibold text-white transition duration-300 ease-in-out transform rounded-3xl bg-secondary hover:bg-secondary-light hover:-translate-y-1">
            <Link href="/about">About Us</Link>
          </button>
          <button className="py-2 mt-6 font-semibold transition duration-300 ease-in-out transform border-b-4 text-secondary border-b-secondary hover:-translate-y-1">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </section>
      {/* Second Section */}

      <ActivitySectors />
      {/* Third Section */}
      <div className="py-6" />
      <FeaturedSolutions />
      {/*  */}
      <Clients />
      {/*  */}
      <Newsletter />
    </main>
  );
}

// ===============================================
// TODO: Routing for all titles
// TODO: Add responsive layouts

// * Date: 16-06-2021
// ===============================================
