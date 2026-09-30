import { IoArrowForward, IoLeafOutline } from "react-icons/io5";
import heroDesktop from "../assets/picture/hero_zoka_desktop-img.png";
import heroMobile from "../assets/picture/hero_zoka_mobile.png";
import Header from "./Header";

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020817]">
      <Header />

      <div className="relative min-h-[calc(100svh-9vh)]">
        <picture className="absolute inset-0 -z-30">
          <source media="(min-width: 1024px)" srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt="Coffee beans from Zoka"
            className="h-full w-full object-cover object-center"
          />
        </picture>

        <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#020817] via-[#020817]/70 to-[#020817]/10 lg:bg-gradient-to-r lg:from-[#020817] lg:via-[#020817]/80 lg:to-transparent" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_45%,rgba(3,68,220,0.28),transparent_36%)]" />

        <div className="mx-auto flex min-h-[calc(100svh-9vh)] w-full max-w-[1440px] items-end px-6 pb-12 pt-24 sm:px-10 sm:pb-16 lg:items-center lg:px-16 lg:py-20 xl:px-24">
          <div className="w-full max-w-[680px] text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-md sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3977ff] shadow-[0_0_12px_#3977ff]" />
              Santos, Brazil · Since 1912
            </div>

            <h1 className="mt-7 max-w-3xl text-[clamp(3.1rem,8vw,6.6rem)] font-black leading-[0.88] tracking-[-0.065em]">
              Coffee with
              <span className="block text-[#4b7fff]">history.</span>
              <span className="block">Flavor with presence.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Specialty beans, roasted in-house and prepared to turn every cup
              into a memorable experience.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#products"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#0344DC] px-7 text-sm font-bold text-white shadow-[0_18px_45px_rgba(3,68,220,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1959ee]"
              >
                Explore our coffees
                <IoArrowForward className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#story"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-7 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/40 hover:bg-white/[0.12]"
              >
                <IoLeafOutline className="text-lg text-[#6f98ff]" />
                Discover our story
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/15 pt-6 text-left">
              <div>
                <strong className="block text-lg font-bold sm:text-xl">100+</strong>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-xs">
                  Years of history
                </span>
              </div>
              <div className="border-x border-white/15 px-4 sm:px-6">
                <strong className="block text-lg font-bold sm:text-xl">Fresh</strong>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-xs">
                  Roasted in-house
                </span>
              </div>
              <div className="pl-4 sm:pl-6">
                <strong className="block text-lg font-bold sm:text-xl">Brazil</strong>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-xs">
                  In every origin
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>
    </section>
  );
}

export default Hero;
