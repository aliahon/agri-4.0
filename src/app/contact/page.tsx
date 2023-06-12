"use client";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
  { name: "Work", href: "#" },
  { name: "Services", href: "#" },
  { name: "About", href: "#" },
  { name: "Blog", href: "#" },
];

export default function Example() {
  return (
    <div className="bg-white">
      {/* <Popover as="header" className="relative z-10">
        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 p-2 transition origin-top transform lg:hidden"
          >
            <div className="overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <Image
                    height={32}
                    width={32}
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=600"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grape-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="px-5 mt-6">
                  <a
                    href="#"
                    className="block w-full px-4 py-2 font-medium text-center text-white border border-transparent rounded-md shadow bg-grape-500 hover:bg-grape-600"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover> */}

      <main>
        {/* Header */}
        {/* <div className="py-24 bg-gray-50 sm:py-32">
          <div className="max-w-md pl-4 pr-8 mx-auto sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl font-bold leading-10 tracking-tight text-center text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
              Get in touch
            </h1>
            <p className="max-w-3xl mx-auto mt-6 text-xl leading-normal text-center text-gray-500">
              Convallis feugiat et aliquet pellentesque dictum nisi, velit.
              Egestas fermentum adipiscing risus quam ac consectetur mattis
              turpis tristique.
            </p>
          </div>
        </div> */}

        {/* Contact Section */}
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              {/* <Image
                height={224}
                width={448}
                className="object-cover w-full h-56 lg:absolute lg:h-full"
                src="https://images.pexels.com/photos/3183148/pexels-photo-3183148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="contacts"
                unoptimized
              /> */}
              <div className="object-cover w-full h-56 lg:absolute lg:h-full contact"></div>
            </div>
          </div>
          <div className="relative px-4 py-16 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32 ">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Get in touch
                </h2>
                <p className="mt-2 text-base leading-snug text-gray-500 sm:mt-3">
                  Nous aimerions recevoir de vos nouvelles! Envoyez-nous un
                  message via le formulaire ci-contre, ou écrivez-nous sur
                  email.
                </p>
                <form
                  action="#"
                  method="POST"
                  className="grid grid-cols-1 mt-9 gap-y-3 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company
                      </label>
                      <span
                        id="phone-description"
                        className="text-sm text-gray-500"
                      >
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <span
                        id="phone-description"
                        className="text-sm text-gray-500"
                      >
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="how-can-we-help"
                        className="block text-sm font-medium text-gray-700"
                      >
                        How can we help you?
                      </label>
                      <span
                        id="how-can-we-help-description"
                        className="text-sm text-gray-500"
                      >
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="how-can-we-help"
                        name="how-can-we-help"
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="how-did-you-hear-about-us"
                      className="block text-sm font-medium text-gray-700"
                    >
                      How did you hear about us?
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="how-did-you-hear-about-us"
                        id="how-did-you-hear-about-us"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="text-right sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-grape-600 hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2 bg-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
