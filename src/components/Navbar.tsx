"use client";

// menu
import { sidebarMenu } from "@/utils/Constants";
//
import Image from "next/image";
import React from "react";
import NavSectionDetails from "./NavSectionDetails";
import Link from "next/link";
import Search from "./Search";
import { useNavbarContext } from "@/contexts/navbarContext";

const Navbar = () => {
  const [selectedSection, setSelectedSection] = React.useState<null | string>(
    null
  );

  const { isSelectedOpen, setIsSelectedOpen } = useNavbarContext();

  const handleChangeSection = (section: any) => {
    if (selectedSection === section) {
      setSelectedSection(null);
      setIsSelectedOpen(false);
    } else {
      setSelectedSection(section);
      setIsSelectedOpen(true);
    }
  };

  const [openSearch, setOpenSearch] = React.useState<boolean>(false);

  return (
    <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-6 py-2 bg-white border-b-2 border-gray-300 shadow-md md:px-20">
      <div className="flex items-center flex-shrink-0 mr-6 text-black">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width="45"
            height="45"
            blurDataURL={"/logo.svg"}
            className="w-20 pr-8 mr-2 border-r-2 border-gray-200"
            loader={({ src }) => src}
          />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 text-black border-2 border-white rounded hover:text-primary hover:border-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex-grow hidden w-full md:block lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {sidebarMenu?.map((item, i) => (
            <button
              key={i}
              className={`block px-4 py-2 mt-2 border-b-4  text-base font-semibold text-black transition duration-300 ease-in-out transform lg:inline-block lg:mt-0 hover:text-primary hover:bg-gray-100 ${
                selectedSection === item?.name && isSelectedOpen
                  ? "border-secondary"
                  : "border-white"
              }`}
              onClick={() => handleChangeSection(item?.name)}
            >
              {item?.name}{" "}
              {isSelectedOpen && selectedSection === item?.name ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="inline-block w-4 h-4 font-semibold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="inline-block w-4 h-4 font-semibold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center w-full mt-4 text-base lg:mt-0 lg:w-auto">
          <button className="inline-flex items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center mr-4"
            onClick={() => setOpenSearch(true)}
            // set open search to true when i click ctrl + k or cmd + k
            // onKeyDown={(e) => {
            //   if (e.key === "m" && (e.metaKey || e.ctrlKey)) {
            //     setOpenSearch(true);
            //   }
            // }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <Search open={openSearch} closeModal={() => setOpenSearch(false)} />
          <Link
            href="/contact"
            className="inline-block px-8 py-3 mt-4 text-sm leading-none text-white rounded bg-[#17352C] hover:text-primary hover:bg-white lg:mt-0
                duration-300 ease-in-out transition-all hover:border hover:border-primary hover:font-semibold
            "
          >
            Contact Us Now
          </Link>
        </div>
      </div>
      {isSelectedOpen && (
        <NavSectionDetails
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
      )}
    </nav>
  );
};

export default Navbar;
