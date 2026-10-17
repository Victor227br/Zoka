import MenuCategories from "../components/MenuCategories";
import Hero from "../components/Hero";
import zokaLogo from "../assets/icon/zoka-logo-white.png";
import coffeePackage from "../assets/picture/coffee_package-carousel.png";
import cappuccino from "../assets/picture/cappuccino.jpg";

const Home = () => {
  return (
    <div className="bg-[#F2F0EB]">
      <Hero />
      <section
        id="story"
        className="scroll-mt-20 overflow-hidden bg-[#071328] text-white"
      >
        <div className="px-6 py-20 lg:px-[4%] lg:py-28">
          <header className="grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pb-20">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#6E9CFF]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8EB1FF] sm:text-xs">
                  Our story · Santos, Brazil
                </p>
              </div>

              <h2 className="mt-6 max-w-4xl font-serif text-[clamp(2.8rem,7vw,6.8rem)] leading-[0.9] tracking-[-0.055em]">
                A century of coffee,
                <span className="block font-normal italic text-[#8EB1FF]">
                  still moving forward.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                Since 1912, Zoka has been part of Santos&apos; coffee culture.
                We still roast and grind in-house, giving every batch the time
                and attention it deserves.
              </p>

              <div className="mt-8 flex items-end gap-4 border-t border-white/15 pt-6">
                <strong className="font-serif text-5xl font-normal leading-none text-white sm:text-6xl">
                  1912
                </strong>
                <span className="max-w-28 pb-1 text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-white/45">
                  Our story begins in Santos
                </span>
              </div>
            </div>
          </header>

          <div className="grid gap-16 pt-16 lg:gap-24 lg:pt-24">
            <article className="grid items-center gap-9 lg:grid-cols-12 lg:gap-8">
              <figure className="relative lg:col-span-7">
                <div className="absolute -left-6 -top-9 font-serif text-[7rem] leading-none text-white/[0.035] sm:text-[10rem] lg:-left-4 lg:-top-16 lg:text-[14rem]">
                  01
                </div>

                <div className="relative aspect-[4/5] overflow-hidden bg-[#0A2A66] sm:aspect-[4/3] lg:aspect-[16/10]">
                  <img
                    src={coffeePackage}
                    alt="Zoka coffee package surrounded by roasted coffee beans"
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                <figcaption className="mt-4 flex justify-between gap-4 text-[9px] font-bold uppercase tracking-[0.16em] text-white/40">
                  <span>Roasted in-house</span>
                  <span>Santos · SP</span>
                </figcaption>
              </figure>

              <div className="lg:col-span-4 lg:col-start-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8EB1FF] sm:text-xs">
                  The craft
                </p>
                <h3 className="mt-4 font-serif text-[clamp(2.4rem,4vw,4.4rem)] leading-[0.95] tracking-[-0.045em]">
                  Roasted here.
                  <span className="block font-normal italic text-[#8EB1FF]">
                    Never rushed.
                  </span>
                </h3>
                <p className="mt-6 max-w-md text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  We follow the coffee&apos;s natural rhythm. Careful selection,
                  controlled roasting and precise grinding preserve what each
                  bean has best to offer.
                </p>
              </div>
            </article>

            <article className="grid items-center gap-9 lg:grid-cols-12 lg:gap-8">
              <figure className="relative lg:order-2 lg:col-span-7 lg:col-start-6">
                <div className="absolute -right-6 -top-9 font-serif text-[7rem] leading-none text-white/[0.035] sm:text-[10rem] lg:-right-4 lg:-top-16 lg:text-[14rem]">
                  02
                </div>

                <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[16/10]">
                  <img
                    src={cappuccino}
                    alt="Cappuccino served in a cup with heart-shaped latte art"
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071328]/35 via-transparent to-transparent" />
                </div>

                <figcaption className="mt-4 flex justify-between gap-4 text-[9px] font-bold uppercase tracking-[0.16em] text-white/40">
                  <span>From roast to cup</span>
                  <span>Everyday ritual</span>
                </figcaption>
              </figure>

              <div className="lg:order-1 lg:col-span-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8EB1FF] sm:text-xs">
                  The experience
                </p>
                <h3 className="mt-4 font-serif text-[clamp(2.4rem,4vw,4.4rem)] leading-[0.95] tracking-[-0.045em]">
                  Made for brighter
                  <span className="block font-normal italic text-[#8EB1FF]">
                    everyday moments.
                  </span>
                </h3>
                <p className="mt-6 max-w-md text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                  Coffee can be simple and still feel special. A familiar aroma,
                  a well-made cup and a pause worth remembering.
                </p>

                <a
                  href="#products"
                  className="mt-8 inline-flex border-b border-white/35 pb-2 text-sm font-bold text-white transition hover:border-[#8EB1FF] hover:text-[#8EB1FF]"
                >
                  Discover our coffees →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
          <div id="products" className="scroll-mt-24">
            <MenuCategories />
          </div>

    <footer className="bg-[#0F172A] text-white mt-20">
      <section className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#" aria-label="Back to the top" className="inline-flex">
            <img
              src={zokaLogo}
              alt="Zoka — Coffee for a brighter day"
              className="h-14 w-auto"
            />
          </a>
          <p className="text-slate-300 mt-4 leading-7">Fresh coffee, premium quality and unforgettable moments.Enjoy handcrafted drinks prepared with passion.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-5">Navigation</h3>

          <ul className="space-y-3 text-slate-300">
            <li>
              <a href="#" className="hover:text-[#0344DC] transition">Home</a>
            </li>

            <li>
              <a href="#" className="hover:text-[#0344DC] transition">Products</a>
            </li>

            <li>
              <a href="#" className="hover:text-[#0344DC] transition">About</a>
            </li>
            
            <li>
              <a href="#" className="hover:text-[#0344DC] transition">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-5">Contact</h3>

          <ul className="space-y-3 text-slate-300">
            <li>Santos - SP</li>
            <li>99999-9999</li>
            <li>contact@zoka.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-5">Opening Hours</h3>
          <ul className="space-y-3 text-slate-300">
            <li>Mon - Fri: 08:00 - 20:00</li>
            <li>Saturday: 09:00 - 22:00</li>
            <li>Sunday: 09:00 - 18:00</li>
          </ul>
        </div>
      </section>

      <div className="border-t border-slate-700">
        <section className="
        max-w-7xl
        mx-auto
        px-6 
        py-6 
        flex 
        flex-col 
        md:flex-row 
        items-center 
        justify-between 
        gap-4">
          <p className="text-slate-400 text-center md:text-left">© 2026 Zoka Coffee. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#"
              className="
              w-11 
              h-11 
              rounded-full 
              bg-slate-800 
              hover:bg-[#0344DC] 
              transition 
              flex 
              items-center 
              justify-center">
              <img className="h-6" src="./src/assets/icon/instagram.png" alt="" />
            </a>

            <a href="#"
              className="
              w-11 
              h-11 
              rounded-full 
              bg-slate-800 
              hover:bg-[#0344DC] 
              transition 
              flex items-center 
              justify-center">
                <img className="h-6" src="./src/assets/icon/linkedin.png" alt="" />
            </a>

            <a href="#"
              className="
              w-11 
              h-11 
              rounded-full 
              bg-slate-800 
              hover:bg-[#0344DC] 
              transition 
              flex 
              items-center 
              justify-center">
              <img className="h-6" src="./src/assets/icon/facebook.png" alt="" />
            </a>
          </div>
        </section>
      </div>
    </footer>
  </div>
    );
};


export default Home