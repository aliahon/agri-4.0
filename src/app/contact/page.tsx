"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const navigation = [
  { name: "Work", href: "#" },
  { name: "Services", href: "#" },
  { name: "About", href: "#" },
  { name: "Blog", href: "#" },
];

export default function Contact() {
  const validationSchema = z.object({
    firstName: z.string().min(2, "Too Short!").max(50, "Too Long!"),
    lastName: z.string().min(2, "Too Short!").max(50, "Too Long!"),
    email: z.string().email("Invalid email"),
    company: z.string().min(2, "Too Short!").max(50, "Too Long!"),
    phone: z.string().min(2, "Too Short!").max(50, "Too Long!"),
    message: z.string().min(2, "Too Short!").max(50, "Too Long!"),

    howDidYouHearAboutUs: z.string().min(2, "Too Short!").max(50, "Too Long!"),
  });

  type Inputs = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { company, email, firstName, lastName, message, phone } = data;
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        email,
      }),
    });
    reset();
  };

  return (
    <div className="bg-white">
      <main>
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              {/* <Image
                height={224}
                width={448}
                className="object-cover w-full h-56 lg:absolute lg:h-full"
                src="https://images.pexels.com/photos/3183148/pexels-photo-3183148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="contacts"
                loader={({ src }) => src}
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
                  onSubmit={handleSubmit(onSubmit)}
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
                        {...register("firstName", { required: true })}
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                      />
                      {errors.firstName && (
                        <span className="text-xs font-semibold text-red-500">
                          {errors.firstName.message}
                        </span>
                      )}
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
                        {...register("lastName", { required: true })}
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                      />
                      {errors.lastName && (
                        <span className="text-xs font-semibold text-red-500">
                          {errors.lastName.message}
                        </span>
                      )}
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
                        {...register("email", { required: true })}
                        type="email"
                        autoComplete="email"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                      />
                      {errors.email && (
                        <span className="text-xs font-semibold text-red-500">
                          {errors.email.message}
                        </span>
                      )}
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
                        {...register("company")}
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
                        {...register("phone")}
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
                        {...register("message", { required: true })}
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        defaultValue={""}
                      />
                      {errors.message && (
                        <span className="text-xs font-semibold text-red-500">
                          {errors.message.message}
                        </span>
                      )}
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
                        {...register("howDidYouHearAboutUs")}
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
                      {isSubmitting ? (
                        <svg
                          className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                      ) : (
                        "Submit"
                      )}
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
