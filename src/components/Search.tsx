"use client";

import { Fragment, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { FaceFrownIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

const items = [
  {
    id: 1,
    name: "Vision et traitement d’image",
    category: "Solutions",
    url: "/solutions/1",
  },
  {
    id: 2,
    name: "About",
    category: "About Us",
    url: "/about",
  },
  {
    id: 3,
    name: "Contact",
    category: "Contact Us",
    url: "/contact",
  },
  {
    id: 4,
    name: "Agriculture de Précision",
    category: "Sectors",
    url: "/sector/1",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Search({ open, closeModal }: any) {
  const [query, setQuery] = useState("");

  const filteredItems =
    query === ""
      ? []
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  const groups = filteredItems.reduce((groups, item) => {
    return {
      ...groups,
      // @ts-ignore
      [item.category]: [...(groups[item.category] || []), item],
    };
  }, {});

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 p-4 overflow-y-auto sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="max-w-xl mx-auto overflow-hidden transition-all transform bg-white shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
              <Combobox onChange={(item: any) => (window.location = item.url)}>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="w-full h-12 pr-4 text-gray-800 placeholder-gray-400 bg-transparent border-0 pl-11 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {query === "" && (
                  <div className="px-6 text-sm text-center border-t border-gray-100 py-14 sm:px-14">
                    <GlobeAmericasIcon
                      className="w-6 h-6 mx-auto text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 font-semibold text-gray-900">
                      Cherchez tout ce que vous voulez trouver
                    </p>
                    <p className="mt-2 text-gray-500 leading-snug">
                      Accédez rapidement aux informations dont vous avez besoin
                      pour rester sur la bonne voie et concentrez-vous sur ce
                      qui compte.
                    </p>
                  </div>
                )}

                {filteredItems.length > 0 && (
                  <Combobox.Options
                    static
                    className="pb-2 space-y-2 overflow-y-auto max-h-80 scroll-pt-11 scroll-pb-2"
                  >
                    {Object.entries(groups).map(([category, items]: any) => (
                      <li key={category}>
                        <h2 className="bg-gray-100 py-2.5 px-4 text-xs font-semibold text-gray-900">
                          {category}
                        </h2>
                        <ul className="mt-2 text-sm text-gray-800">
                          {items?.map((item: any) => (
                            <Combobox.Option
                              key={item.id}
                              value={item}
                              className={({ active }) =>
                                classNames(
                                  "cursor-default select-none px-4 py-2",
                                  active && "bg-primary text-white"
                                )
                              }
                              onChange={() => {
                                setQuery("");
                                closeModal();
                              }}
                              // on press enter key
                              onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                  setQuery("");
                                  closeModal();
                                }
                              }}
                            >
                              <Link href={item.url}>{item.name}</Link>
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </Combobox.Options>
                )}

                {query !== "" && filteredItems.length === 0 && (
                  <div className="px-6 text-sm text-center border-t border-gray-100 py-14 sm:px-14">
                    <FaceFrownIcon
                      className="w-6 h-6 mx-auto text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 font-semibold text-gray-900">
                      Aucun résultat trouvé
                    </p>
                    <p className="mt-2 text-gray-500 leading-tight">
                      Nous n&apos;avons rien trouvé avec ce terme. S&apos;il
                      vous plaît essayez encore.
                    </p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
