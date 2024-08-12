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

  // ? This is the nav context
  const { isNavBarOpen, setIsNavBarOpen, setIsSubNavOpen } = useNavbarContext();

  return (
    <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full mx-auto max-w-[2000px] px-6 py-2 bg-white border-b-2 border-gray-300 shadow-md md:px-20">
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

      <div className="block lg:flex-grow lg:hidden">
        <button
          className="flex items-center px-3 py-2 text-black border-2 border-white rounded hover:text-secondary hover:border-secondary"
          onClick={() => {
            // @ts-ignore
            setIsNavBarOpen(!isNavBarOpen);
            // @ts-ignore
            setIsSubNavOpen(false);
          }}
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      {/*  */}
      <div
        // TODO: update this
        className={`lg:flex-grow w-full flex lg:flex-row flex-col justify-between lg:items-center lg:w-auto ${
          isNavBarOpen ? "block" : "hidden"
        }`}
        // ${
        //   isNavBarOpen ? "block" : "hidden"
        // }
      >
        <div className="text-sm">
          {sidebarMenu?.map((item, i) => (
            <button
              key={i}
              className={` px-4 py-2 mt-2 border-b-4  text-base font-semibold text-black transition duration-300 ease-in-out transform lg:inline-block lg:mt-0 hover:text-primary hover:bg-gray-100 ${
                selectedSection === item?.name && isSelectedOpen
                  ? "border-secondary"
                  : "border-white"
              }`}
              onClick={() => {
                handleChangeSection(item?.name);
                // @ts-ignore
                setIsSubNavOpen(true);
              }}
            >
              {item?.name}{" "}
              {isSelectedOpen && selectedSection === item?.name ?
            (
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
               
            ): (
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
                
              ) }
            </button>
          ))}
        </div>

        <div className="flex w-full mt-4 text-base lg:mt-0 lg:w-auto">
         
        
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
