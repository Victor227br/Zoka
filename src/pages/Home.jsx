import MenuCategories from "../components/MenuCategories";


const Home = () => {
    return (
    <>
    <section className="
            relative
            w-full
            min-h-screen
            bg-[url(/src/assets/picture/image-hero.jpg)]
            bg-cover
            bg-no-repeat
            bg-[center_top]
            lg:bg-center">

        <header className=" flex items-center justify-between h-[9vh] bg-black/40 backdrop-blur-md border-b border-white/10">    
            <h1 className="ml-6 text-2xl text-white lg:ml-16 ">Zoka</h1>
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

            <div className="
                sm:flex
                justify-center
                w-screen
                min-h-screen
                bg-gradient-to-t
                from-black/90
                via-black/20
                to-transparent
                bg-blend-multiply
                lg:h-[92%]">

                <div className=" flex flex-col items-center justify-around w-[80%] h-[42vh] m-6">
                 <h1 className="text-white text-[clamp(4rem,4.5vw,14.6rem)] font-bold-400 mt-16">Zoka</h1>

                        <div className="mt-4 text-center">
                            <h2 className="text-white text-center text-[clamp(2rem,3.2vw,12.6rem)]">
                                Strong <span className="text-blue-300">Coffee</span>
                            </h2>

                            <h2 className="text-white text-center text-[clamp(2rem,3.2vw,12.6rem)]">
                                Clean <span className="text-blue-300">Experience</span>
                            </h2>
                        </div>

                        <button className="
                                flex
                                items-center
                                justify-center
                                w-[54%]
                                p-1
                                mt-8
                                text-[16px]
                                text-blue-700
                                bg-white
                                border
                                border-white/20
                                rounded-2xl
                                shadow-lg
                                backdrop-blur-lg
                                duration-300
                                hover:bg-white/30
                                hover:text-white
                                hover:scale-105
                                lg:w-[16vw]"> Explore Menu </button>

                        <div className="flex mt-7 gap-x-4">
                            <div className="
                                flex
                                items-center
                                justify-center
                                w-12
                                h-12
                                border
                                border-blue-600
                                rounded-full
                                cursor-pointer
                                transition-all
                                duration-300
                                hover:bg-blue-600/20
                                hover:scale-105">
                                <img className="h-[20px]" src="./src/assets/icon/icon_whatsapp.png" />
                            </div>

                            <div className="
                                flex
                                items-center
                                justify-center
                                w-12
                                h-12
                                border
                                border-blue-600
                                rounded-full
                                cursor-pointer
                                transition-all
                                duration-300
                                hover:bg-blue-600/20
                                hover:scale-105">

                                <img className="h-[20px]" src="./src/assets/icon/icon_instagram.png"/>
                            </div>
                        </div>

                        <div className="
                            flex
                            items-center
                            gap-2
                            p-2
                            mt-8
                            border
                            border-blue-600
                            rounded-2xl
                            bg-blue-600/20">

                            <img className="h-[22px]" src="./src/assets/icon/icon_local.png"/>
                            <p className="text-white sm:text-[14px]"> 333 N Michigan Ave Ste 333</p>

                        </div>
                    </div>
                </div>
            </section>
        <nav className=" h-[8vh] sticky top-0 z-50 -mt-6 bg-white w-[92%] mx-auto rounded-2xl shadow-lg p-4">
            
        </nav>

            <MenuCategories />
        </>
    );
};


export default Home