import MenuCategories from "../components/MenuCategories";
import { Carousel } from "../components/carouselHome";

const Home = () => {

  let slides = [
      "/src/assets/picture/coffee_package-carousel.png",
      "/src/assets/picture/cappuccino.jpg",
      "/src/assets/picture/coffee_package-carousel.png",
      "/src/assets/picture/cappuccino.jpg",
  ]

  return (
    <>
  <section
    className="
    relative
    w-full
    min-h-screen
    bg-[url('/src/assets/picture/hero_zoka_mobile.png')]
    lg:bg-[url('/src/assets/picture/hero_zoka_desktop-img.png')]
    bg-cover
    bg-no-repeat
    bg-[50%_10%]
    lg:bg-center">

      <header 
      className=" 
      flex 
      items-center 
      justify-between 
      h-[9vh] 
      bg-black/40 
      backdrop-blur-md 
      border-b 
      border-white/10">
        
        <h1 className="ml-6 text-[clamp(1.5rem,1.5vw,2.3rem)] text-white lg:ml-16">Zoka</h1>
          <div className=" flex items-center justify-around w-24 mr-8 lg:mr-16">
            <div className="relative flex items-center justify-center cursor-pointer">
              <div className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-[#0344DC]">
                <p className="text-xs text-white">2</p>
              </div>
              
                <img className="h-7 cursor-pointer" src="./src/assets/icon/icon_shoppingCart-white.png"/>
              </div>
                <div className="cursor-pointer">
                    <img className="h-9" src="./src/assets/icon/icon_profile.png" alt="Profile"/>
                </div>
            </div>
        </header>

<div
  className="
    flex
    flex-col
    items-center
    justify-center
    w-full
    min-h-screen
    bg-gradient-to-t
    from-black/90
    via-black/20
    to-transparent
    pb-[70%]
    bg-blend-multiply
    lg:items-start
    lg:justify-center
    lg:pb-[10%]
    lg:pl-[10%]">
      
  <div
    className="
      w-[90%]
      max-w-md
      flex
      flex-col
      text-center
      items-center
      lg:max-w-none
      lg:w-[42%]
      lg:items-start
      lg:text-left">
        
  <h1 className="text-white font-light leading-none text-[clamp(3.5rem,6vw,6.5rem)]">Zoka</h1>
    <div className="mt-6 leading-[0.95]">
      <h2 className="text-white font-medium text-[clamp(2rem,3.4vw,4rem)]">Strong <span className="text-blue-500 font-medium">Coffee</span></h2>
      <h2 className="text-white lg:font-thin lg:tracking-wide lg:font-extralight text-[clamp(2rem,3.4vw,4rem)]">Clean <span className="text-blue-500 ">Experience</span></h2>
     
      <div className="flex items-center  mr-6 ml-6 text-center lg:m-0">
      <p className="text-white mt-6 lg:ml-1">Freshly roasted specialty coffee with bold flavor and unforgettable aroma.</p>
      </div>

    </div>

    <button
      className="
        mt-8
        flex
        items-center
        justify-center
        w-[60%]
        bg-[#0344DC]
        text-white
        h-8
        rounded-2xl
        shadow-lg
        shadow-[0_0_35px_rgba(3,68,220,0.45)]
        duration-300
        hover:scale-105
        hover:bg-white/30
        hover:text-white
        lg:w-[46%]
        lg:h-[4.2vh]
        lg:text-[1.2vw]
        lg:bg-white
        lg:text-[#0344DC]">
      Explore Menu 
    </button>
    
  </div>
</div>

</section>
   <div className="flex flex-col items-center justify-center mt-20 px-6">
  <p
    className="
      max-w-4xl
      text-center
      text-[#2F2F2F]
      text-sm
      leading-8
      font-normal
      md:text-md
      lg:text-md"> 
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
    ml-[6%] 
    mr-[6%] 
    mt-[4%] 
    items-center
    justify-between
    lg:flex-row
    lg:items-start">

    <div className="lg:w-[30%] mt-[20%] md:mt-[5%] lg:mt-[10%]">
      <h2 className="text-[clamp(1.5rem,2vw,2.4rem)] text-[#2F2F2F] font-semibold ">Discover our coffees.</h2>
      <p className=" text-[#2F2F2F] mt-4">discover our premium coffee collection, crafted from carefully selected beans to deliver rich aroma, exceptional flavor, and an unforgettable coffee experience.</p>
    </div>
  <div className="lg:w-[60%] m-auto mt-[10%] md:mt-[5%] lg:mt-0">
    <Carousel slides={slides}/>
  </div>
      {/* <nav className=" h-[8vh] sticky top-0 z-50 -mt-6 bg-white w-[92%] mx-auto rounded-2xl shadow-lg p-4"></nav> */}
  </section>

          <MenuCategories />


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