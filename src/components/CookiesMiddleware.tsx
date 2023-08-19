"use client";

import React, { useEffect } from "react";

const CookiesMiddleware = () => {
  const [showBanner, setShowBanner] = React.useState(true);

  useEffect(() => {
    const data = localStorage.getItem("BANNER_COOKIES");
    if (data !== null) setShowBanner(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("BANNER_COOKIES", JSON.stringify(showBanner));
  }, [showBanner]);

  return showBanner ? (
    <div className="z-[99999] p-6 rounded-3xl bottom-4 left-4 sticky text-white max-w-xl my-4 glass-bg border-2 border-primary/60 space-y-2 mx-2">
      <p className="text-lg">
        Nous utilisons les témoins de navigations pour analyser
        l&apos;utilisation de notre site web ainsi qu&apos;appuyer nos efforts
        marketing
      </p>
      <div className="flex justify-between">
        <button className="text-xs">Personnaliser votre expérience.</button>
        <div className="">
          <button
            className="mr-6 underline"
            onClick={() => setShowBanner(false)}
          >
            Refuser
          </button>
          <button
            className="relative px-4 py-2 transition-all duration-300 border-2 rounded-3xl border-secondary hover:bg-secondary"
            onClick={() => setShowBanner(false)}
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CookiesMiddleware;

const Personnaliser = () => {
  return (
    <div>
      <button>Retour</button>
      <div>
        <span>Accepter les témoins analytiques ?</span>
        <p>
          Nous utilisons Google Analytics dans le but de mieux comprendre les
          préférences et intérêts des utilisateurs de notre site Web.
        </p>
      </div>
      <div>
        <span>Accepter les témoins publicitaires ?</span>
        <p>
          Nous utilisons l’Insight Tag de LinkedIn afin de personnaliser nos
          publicités. Les données de témoins ne sont exploitées que par
          ventriloc par l’entremise de ces plateformes et ne seront jamais
          partagées à quelconque autre tierce partie.
        </p>
      </div>
      <button>Sauvegarder</button>
    </div>
  );
};
