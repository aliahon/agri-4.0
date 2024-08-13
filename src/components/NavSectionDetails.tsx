
"use client";

import React, { useEffect } from "react";
import { solutions, solutionsArr } from "@/utils/Constants";
import Link from "next/link";
import { useNavbarContext } from "@/contexts/navbarContext";

type NavSectionDetailsProps = {
  selectedSection: string | null;
  setSelectedSection?: React.Dispatch<React.SetStateAction<string | null>>;
};

const NavSectionDetails = ({ selectedSection }: NavSectionDetailsProps) => {
  // TODO: Other navbar items details [Devices, Sectors, More ...]

  const { setIsSelectedOpen, isSubNavOpen, setIsSubNavOpen } =
    useNavbarContext();

  const [navDetails, setNavDetails] = React.useState<null | any[]>(null);

  const [selectedItem, setSelectedItem] = React.useState<null | any[]>(null);

  const [arrSolutions, setArrSolutions] = React.useState<any[]>(
    solutionsArr.slice(0, 6)
  );

  const [selectedItemName, setSelectedItemName] = React.useState<string>(
    "Agriculture de précision"
  );

  const [selectedtemSubName, setSelectedItemSubName] =
    React.useState<string>("");

  useEffect(() => {
    if (selectedSection === "Solutions") {
      setNavDetails(solutions);
    } else if (selectedSection === "Devices") {
      setNavDetails([]);
    } else if (selectedSection === "Sectors") {
      setNavDetails([]);
    } else if (selectedSection === "More") {
      setNavDetails([]);
    } else {
      setNavDetails([]);
    }
  }, [selectedSection]);

  useEffect(() => {
    // TODO: Change the solutions array based on the selected item
    if (selectedItemName === "Agriculture de précision") {
      setArrSolutions(solutionsArr.slice(0, 6));
      setSelectedItemSubName("ap");
    } else if (selectedItemName === "Aquaculture 4.0") {
      setArrSolutions(solutionsArr.slice(20, 21));
      setSelectedItemSubName("aqua");
    } else if (selectedItemName === "Agroalimentaire 4.0") {
      setArrSolutions(solutionsArr.slice(13, 17));
      setSelectedItemSubName("agro");
    } else if (selectedItemName === "Smart cities") {
      setArrSolutions(solutionsArr.slice(6, 13));
      setSelectedItemSubName("sc");
    } else if (selectedItemName === "Durabilite") {
      setArrSolutions(solutionsArr.slice(20, 21));
      setSelectedItemSubName("dura");
    } else if (selectedItemName === "CO-R&D") {
      setArrSolutions(solutionsArr.slice(20, 21));
      setSelectedItemSubName("co");
    } else if (selectedItemName === "Conseil") {
      setArrSolutions(solutionsArr.slice(17,19 ));
      setSelectedItemSubName("cons");
    }
  }, [selectedItemName]);

  const handleSelectedItem = (item: any) => {
    if (item === selectedItem) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };
  useEffect(() => {
    // setSelectedOpen false when click outside the navbar
    const handleClickOutside = (e: any) => {
      if (e.target.id === "navbar") {
        setIsSelectedOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setIsSelectedOpen]);

  

  return (
    <div
      className={`absolute left-0 w-full py-16 px-20 transition duration-300 ease-in-out transform bg-white h-[600px] md:px-14 z-90 top-14
      ${isSubNavOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex flex-col items-center justify-center w-full h-full overflow-y-scroll scrollbar-hide md:flex-row md:justify-between md:items-start md:space-x-4 ">
        {/* Sidebar */}
        <div className="flex flex-col w-1/3 h-full overflow-y-scroll scrollbar-hide px-8">
          {navDetails?.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col p-4 cursor-pointer
                transition duration-500 ease-in-out border-l-4
              ${
                selectedItem === item?.name
                  ? "bg-gray-200/20  border-l-secondary"
                  : "border-l-white"
              }`}
              onClick={() => {
                handleSelectedItem(item?.name);
                setSelectedItemName(item?.name);
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="items-center justify-center text-center align-middle">
                  {item?.icon}
                </span>
                <span className="text-base font-medium text-gray-700 flex justify-between">
                  {item?.name}
                  <svg className="text-gray-900 w-4 h-4 text-center align-middle mt-1 ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
              <span className="font-normal text-xs text-gray-400">{item?.description}</span>
            </div>
          ))}
        </div>
        {/* End Sidebar */}

        {/* Content */}
        <div className="w-full h-full px-10 pt-4">
          <button
            className="absolute top-0 px-1 py-1 text-sm font-semibold text-gray-700 transition duration-500 ease-in-out transform bg-white border border-gray-300 rounded-md left-15 hover:bg-gray-100 hover:scale-105 hover:shadow-xl md:hidden "
            onClick={() => {
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
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          <Link className="text-2xl font-medium"
            href={`/sector/${
              selectedItemName === "Agriculture de précision"
                ? "1"
                : selectedItemName === "Aquaculture 4.0"
                ? "2"
                : selectedItemName === "Agroalimentaire 4.0"
                ? "3"
                : selectedItemName === "Smart cities"
                ? "4"
                : selectedItemName === "Durabilite"
                ? "5"
                : selectedItemName === "CO-R&D"
                ? "6"
                : selectedItemName === "Conseil"
                ? "7"
                : "1"
            }`}
            onClick={() => {
              setIsSelectedOpen(false);
            }}
          >
            <h1 className="text-xl font-bold text-gray-700 hover:underline">
              {selectedSection === "Solutions" && selectedItemName}
            </h1>
          </Link>
          {selectedSection === "Solutions" &&(
          <p className="mt-2 text-2xs font-normal leading-snug text-gray-400 md-3 md:mb-2">
            {selectedItemName === "Agriculture de précision" &&
              "L'agriculture de précision est une approche qui permet d'optimiser la production agricole"}
          </p>)}
          {selectedSection === "Solutions" &&(
          <p className="mt-2  text-2xs font-normal  leading-snug text-gray-400 md-3 md:mb-2">
            {selectedItemName ===  "Agroalimentaire 4.0" &&
              "Nous offrons des solutions avancées pour optimiser les chambres froides, les machines agroalimentaires..."}
          </p>)}

          {selectedSection === "Solutions" &&(
          <p className="mt-2 text-2xs  font-normal leading-snug text-gray-400 md-3 md:mb-2">
            {selectedItemName ===  "Conseil" &&
              "Chez Agri 4.0, nous allons bien au-delà de la simple vente de produits et services."}
          </p>)}
      
          <div className="flex flex-wrap justify-between gap-4 md:flex-nowrap z ">
            <div className="w-full mt-2 md:mt-10 pr-20 ">
              <hr className="my-2 mb-5 border-gray-300 md:w-full" />
              <div className="grid items-center grid-cols-2 gap-7">
                {selectedSection === "Solutions" ? (
                  arrSolutions?.map((item, i) => (
                    <div
                      key={i}
                      className="relative flex flex-col max-w-[285px] space-y-2"
                    >
                      <span className="text-xs  font-semibold text-tertiary cursor-pointer hover:underline">
                        <Link
                          href={`/solutions/${selectedtemSubName}/${item?.id}`}
                          onClick={() => setIsSelectedOpen(false)}
                        >
                          {item?.name}
                        </Link>
                      </span>
                      {item?.name === "Climat Monitoring" && (
                        <span className="absolute -top-1.5 right-24 px-2 text-xs font-semibold text-white bg-[#2DB273] rounded-lg">
                          NEW
                        </span>
                      )}
                      <p className="text-2xs font-normal leading-snug text-gray-400 line-clamp-4">
                        {item?.desc}
                      </p>
                    </div>
                  ))
                ) : (
                  <h1 className="text-sm font-semibold text-gray-700">
                  Under construction
                  </h1>
                )}
              </div>
            </div>
            {selectedSection === "Solutions" && (
              <div className="w-full md:w-1/2">
                <h1 className="mb-6 text-base font-semibold">Apps</h1>
                <hr className="w-full my-2 mb-1 border-gray-300 md:mb-5" />
                <div className="flex-col space-y-6">
                  {/* @ts-ignore */}
                  {solutions[selectedItem]?.map((item: any, i: number) => (
                    <div
                      key={i}
                      className="flex flex-col max-w-[285px] space-y-2"
                    >
                      <span className="w-8 h-8 p-4 bg-blue-100 rounded-full"></span>
                      <span className="text-sm font-semibold text-gray-700">
                        {item?.name}
                      </span>
                      <p className="text-sm leading-snug text-justify text-gray-400">
                        {JSON.stringify(item)}
                      </p>
                    </div>
                  ))}
                </div>
                <button className="text-sm font-semibold md:mt-6 text-secondary">
                  
                  <Link href="#secAc">View all solutions -&gt;{" "}</Link>
                </button>
              </div>
            )}
          </div>
        </div>
        {/* End Content */}
      </div>
    </div>
  );
};

export default NavSectionDetails;
