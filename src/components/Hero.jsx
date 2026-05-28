import Header from "./Header"

const Hero = () =>{
    return(
        // <section className='relative bg-[url(/src/assets/picture/image-hero.jpg)] sm:bg-cover bg-center w-screen h-[720px] object-cover object-left lg:bg-cover bg-left bg-no-repeat w-full h-screen'>
        <section className=" relative w-full min-h-screen bg-[url(/src/assets/picture/image-hero.jpg)] bg-cover bg-no-repeat bg-[center_top] lg:bg-center">
        <Header/>
    
            <div className='sm:flex justify-center bg-gradient-to-t from-black/90 via-black/20 to-transparent bg-blend-multiply w-screen min-h-screen lg:h-[92%]'>
            <div className = "flex flex-col items-center justify-around w-[80%] h-[42vh] m-6 lg:items-center">
                <h1 className="text-white text-[clamp(4rem,4.5vw,14.6rem)] font-bold-400 mt-16">Zoka</h1>
            <div className="mt-4 text-center">
                <h2 className="text-white text-[clamp(2rem,3.2vw,12.6rem)]">Strong <span className="text-blue-300" >Coffee</span></h2>
                <h2 className="text-white text-[clamp(2rem,3.2vw,12.6rem)]">Clean <span className="text-blue-300">Experience.</span></h2>
            </div>

                <button className="hover:bg-white/30 duration-300 backdrop-blur-lg border border-white/20 hover:text-white hover:scale-105 rounded-2xl shadow-lg w-[54%] flex justify-center items-center bg-white border-0 mt-8 text-blue-700 text-[16px] p-1 rounded-2xl lg:w-[16vw]"> Explore Menu</button>

                <div className = "flex flex-row ml-1 mt-7 gap-x-4 ">
                    <div className=" w-12 h-12 cursor-pointer rounded-full border border-blue-600 flex items-center justify-center hover:bg-blue-600/20 transition-all duration-300 hover:scale-105">
                        <img className="h-[20px]" src="./src/assets/icon/icon_whatsapp.png" alt="" />
                    </div>

                    <div className="w-12 h-12 rounded-full cursor-pointer border border-blue-600 flex items-center justify-center hover:bg-blue-600/20 transition-all duration-300 hover:scale-105">
                        <img className="h-[20px]" src="./src/assets/icon/icon_instagram.png" alt="" />
                    </div>
                </div>

                <div className ="flex p-2 mt-8 bg-blue-600/20 rounded-2xl border border-blue-600">
                    <img className="h-[22px]" src="./src/assets/icon/icon_local.png" alt="" />
                    <p className="text-white sm:text-[14px]">333 N Michigan Ave Ste 333</p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Hero