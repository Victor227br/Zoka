import instagramIcon from "../assets/icon/instagram.png";
import linkedinIcon from "../assets/icon/linkedin.png";
import facebookIcon from "../assets/icon/facebook.png";
import MenuCategories from "../components/MenuCategories";
import Hero from "../components/Hero";
import zokaLogo from "../assets/icon/zoka-logo-primary.png";
import cappuccino from "../assets/picture/cappuccino.jpg";

const Home = () => {
  return (
    <div className="bg-[#F2F0EB]">
      <Hero />
      <section
        id="story"
        className="scroll-mt-20 bg-[#071328] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 md:grid-cols-2 md:gap-12 lg:py-16">
          <img
            src={cappuccino}
            alt="Cappuccino served with heart-shaped latte art"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover"/>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8EB1FF]">
              Our story
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Good coffee, made with care.
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-slate-300">
              Part of Santos&apos; coffee culture since 1912, we roast and grind
              in-house to bring fresh flavor to your everyday moments.
            </p>
            <a
              href="#products"
              className="mt-6 inline-flex rounded-xl bg-[#0344DC] px-6 py-3 font-semibold transition hover:bg-blue-600">
              Discover our coffees
            </a>
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
              className="h-14 w-auto brightness-0 invert"
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
              <a href="#products" className="hover:text-[#0344DC] transition">Products</a>
            </li>

            <li>
              <a href="#story" className="hover:text-[#0344DC] transition">About</a>
            </li>
            
            <li>
              <a href="#contact" className="hover:text-[#0344DC] transition">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 id="contact" className="text-lg font-semibold mb-5">Contact</h3>

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
            <span
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
              <img className="h-6" src={instagramIcon} alt="Social network" />
            </span>

            <span
              className="
              w-11 
              h-11 
              rounded-full 
              bg-slate-800 
              hover:bg-[#0344DC] 
              transition 
              flex items-center 
              justify-center">
                <img className="h-6" src={linkedinIcon} alt="Social network" />
            </span>

            <span
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
              <img className="h-6" src={facebookIcon} alt="Social network" />
            </span>
          </div>
        </section>
      </div>
    </footer>
  </div>
    );
};


export default Home
