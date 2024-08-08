"use client";;
import Image from "next/image";
import Link from "next/link";
import { YoutubeLogo, LinkedinLogo } from "phosphor-react";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-[#081B15] md:py-2 lg:pl-80 ">
      <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-5">
            <div>
              <p className="font-bold text-secondary">Agri Solutions</p>

              <nav aria-label="Footer Navigation - Services" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="solutions/ap/1"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Agriculture de précision
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Aquaculture 4.0
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Agroalimentaire 4.0
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Smart cities
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Durabilité
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Co&Rd
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Conseil
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-bold text-secondary">Agri Services</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Conception d'application<br></br> web et mobile
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Suivi et conseil
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Formation
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Accompagnement
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-bold text-secondary">Agri Produits</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Capteur Sol
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Capteur Plant
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Capteur Air
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Capteur Water
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-bold text-secondary">Solutions</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      SPAW
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      AgriBot
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white text-sm font-light transition hover:opacity-50"
                    >
                      Agri STM
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="w-full mt-24 mr-10">
              <button
                type="button"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent shadow-sm rounded-3xl bg-secondary hover:bg-opacity-75 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-secondary"
              >
                <span className="text-sm font-semibold text-white">
                  Rejoignez-Nous
                </span>
              </button>
            </div>
          </div>

        </div>

        <hr className="h-px my-8 bg-[#106357] border-0 dark:bg-gray-700 w-full"></hr>

      <div className="flex justify-between">
      <div className="flex flex-wrap text-white text-xs">
          <div className="relative ml-0 pl-0 mb-12  lg:mb-0">
            <h6 className="mb-0 font-normal pr-4 dark:text-neutral-50">We Innovate For Agriculture</h6>
            <div
              className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-[#3AAA35] from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block" ></div>
          </div>
          <div className="relative mb-12  lg:mb-0">
            <h6 className="mb-0 font-normal px-4 dark:text-neutral-50">Terms and conditions</h6>
            <div
              className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-[#3AAA35] from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
          </div>
          <div className="relative mb-12  lg:mb-0">
            <h6 className="mb-0 font-normal px-4 dark:text-neutral-50">Privacy policy</h6>
            <div
              className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-[#3AAA35] from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
          </div>
          <div className="relative mb-12 pl-4 lg:mb-0">
            <h6 className="mb-0 font-normal dark:text-neutral-50">Cookies</h6>
          </div>
        </div>


          <div>
            <ul className="flex flex-wrap gap-6 m-0">
              <li>
                <Link
                  href="https://www.facebook.com/agri4.0/?locale=fr_FR"
                  target="_blank"
                  className="transition text-secondary hover:opacity-50"
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.instagram.com/agri4.0/"
                  target="_blank"
                  className="transition text-secondary hover:opacity-50"
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/agri-4-0/"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-secondary hover:opacity-50"
                >
                  <span className="sr-only">LinkedIn</span>

                  <LinkedinLogo size={24} />
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/channel/UCShCox0ZhntRYnBesAMS_UA"
                  rel="noreferrer"
                  target="_blank"
                  className="transition text-secondary hover:opacity-50"
                >
                  <span className="sr-only">Youtube</span>

                  <YoutubeLogo size={26} />
                </a>
              </li>
            </ul>
          </div>

      </div>


      </div>
    </footer>
  );
};

export default Footer;
