import MenuCategories from "../components/MenuCategories";
import { Carousel } from "../components/carouselHome";
import Hero from "../components/Hero";

const Home = () => {
  let slides = [
      "/src/assets/picture/coffee_package-carousel.png",
      "/src/assets/picture/cappuccino.jpg",
      "/src/assets/picture/coffee_package-carousel.png",
      "/src/assets/picture/cappuccino.jpg",
    ]
    
  return (
    <>
      <Hero />
   <div id="story" className="flex flex-col items-center justify-center mt-20 px-6 scroll-mt-24">
  <p
    className="
      max-w-4xl
      text-center
      text-[#2F2F2F]
      text-sm
      leading-8
      font-normal
      md:text-md
      lg:text-lg"> 
      Since <span className="font-semibold">1912</span>, Zoka in Santos has been
    part of Brazil's <span className="font-semibold">coffee history and culture</span>.
    We are an in-house roasting and grinding company where
    <span className="font-semibold"> tradition and quality</span> go hand in hand,
    and <span className="font-semibold">every bean is treated with care</span>,
    respecting the coffee's natural timing and processing.
  </p>
  <div className="w-[100%] mt-4 h-px bg-gray-900 lg:w-[54%] lg:mt-6"></div>
</div>
  
  <section 
    className="
    flex 
    flex-col 
    ml-[4%] 
    mr-[1%] 
    mt-[4%] 
    items-center
    justify-between
    lg:flex-row
    lg:items-starts
    lg: w-full">
    <div className="lg:w-[30%] mt-[20%] md:mt-[5%] lg:mb-[5%]">
      <h2 className="text-[clamp(1.5rem,2vw,2.4rem)] text-[#2F2F2F] font-semibold ">Discover our coffees.</h2>
      <p className=" text-[#2F2F2F] mt-4">discover our premium coffee collection, crafted from carefully selected beans to deliver rich aroma, exceptional flavor, and an unforgettable coffee experience.</p>
    </div>
  <div className="lg:w-[55%] m-auto mt-[10%] md:mt-[5%] lg:mt-0">
    <Carousel slides={slides}/>
</div>
      {/* <nav className=" h-[8vh] sticky top-0 z-50 -mt-6 bg-white w-[92%] mx-auto rounded-2xl shadow-lg p-4"></nav> */}
  </section>
          <div id="products" className="scroll-mt-24">
            <MenuCategories />
          </div>

    <footer className="bg-[#0F172A] text-white mt-20">
      <section className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-[#0344DC]">Zoka</h2>
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
  </>
    );
};


export default Home