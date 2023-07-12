import Link from "next/link";

export default function Custom404() {
  return (
    <main className="grid min-h-full px-6 py-32 bg-white sm:py-48 place-items-center lg:px-8">
      <div className="text-center">
        <p className="font-semibold text-md text-secondary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page non trouvée
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Désolé, nous n&apos;avons pas trouvé la page que vous recherchez.
        </p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-gray-900">
            Contactez le support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
