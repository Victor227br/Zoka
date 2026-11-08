import { Link } from "react-router-dom";
import Header from "../components/Header";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#F4F7FC] text-[#1D3557]">
      <Header />

      <section className="mx-auto max-w-xl px-6 py-24 text-center">
        <p className="font-bold text-blue-700">404</p>
        <h1 className="my-4 text-4xl font-bold">Page not found</h1>
        <p className="text-slate-500">
          The address may be incorrect or this page is no longer available.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-blue-700 px-6 py-3 font-bold text-white">
          Back to home
        </Link>
      </section>
    </main>
  );
}

export default NotFound
