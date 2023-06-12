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
  const { isSelectedOpen, setIsSelectedOpen } = useNavbarContext();

  const [navDetails, setNavDetails] = React.useState<null | any[]>(null);

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

  const [selectedItem, setSelectedItem] = React.useState<null | any[]>(null);

  const [selectedItemName, setSelectedItemName] = React.useState<null | any>(
    null
  );

  const handleSelectedItem = (item: any) => {
    if (item === selectedItem) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  // TODO: Other navbar items details [Devices, Sectors, More ...]

  return (
    <div className="absolute left-0 w-full py-6 transition duration-300 ease-in-out transform bg-white h-[600px] px-14 z-90 top-14 ">
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col w-1/3 h-full overflow-y-scroll scrollbar-hide">
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
                <span className="text-sm font-semibold text-gray-700">
                  {item?.name}
                </span>
              </div>
              <span className="text-sm text-gray-400">{item?.description}</span>
            </div>
          ))}
        </div>
        {/* second section */}
        <div className="w-full h-full px-10 pt-4">
          <Link
            href={`/sector/1`}
            onClick={() => {
              setIsSelectedOpen(false);
            }}
          >
            <h1 className="text-xl font-bold text-gray-700 hover:underline">
              {selectedItemName}
            </h1>
          </Link>
          <p className="mb-5 text-sm leading-snug text-gray-400">
            L&apos;agriculture de précision est une approche qui permet
            d&apos;optimiser la production agricole
          </p>
          <div className="flex justify-between">
            <div className="w-full">
              <hr className="w-1/2 my-2 mb-5 border-gray-300" />
              <div className="grid items-center grid-cols-2 gap-7">
                {solutionsArr?.map((item, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col max-w-[285px] space-y-2"
                  >
                    <span className="text-sm font-semibold text-green-700 ">
                      {item?.name}
                    </span>
                    {item?.name === "Climat Monitoring" && (
                      <span className="absolute -top-1.5 right-24 px-2 text-xs font-semibold text-white bg-[#2DB273] rounded-lg">
                        NEW
                      </span>
                    )}
                    <p className="text-sm leading-snug text-gray-400">
                      {item?.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="mt-4 text-sm font-semibold uppercase">apps</h1>
              <hr className="w-1/2 my-2 mb-5 border-gray-300" />
              <div className="flex-col space-y-6">
                {[1, 2].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col max-w-[285px] space-y-2"
                  >
                    <span className="w-8 h-8 p-4 bg-blue-100 rounded-full"></span>
                    <span className="text-sm font-semibold text-gray-700">
                      Frigo.ma
                    </span>
                    <p className="text-sm leading-snug text-justify text-gray-400">
                      AGRI 4.0 propose des solutions de gestion à distance des
                      chambres froides ; des cartes électroniques gérées par des
                      applications web et mobile
                    </p>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-sm font-semibold text-secondary">
                View all solutions -&gt;{" "}
              </button>
            </div>
          </div>
        </div>
        {/* second section */}
      </div>
    </div>
  );
};

export default NavSectionDetails;
