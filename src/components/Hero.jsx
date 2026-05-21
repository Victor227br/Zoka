import NavBar from "./NavBar"

const Hero = () =>{
    return(
        <section className='relative bg-[url(/src/assets/picture/image-hero.jpg)] bg-cover bg-right-center w-screen h-[48vh] object-cover object-center'>
            <div className='flex justify-center bg-gradient-to-t from-black/90 via-black/20 to-transparent bg-blend-multiply  w-screen h-[48vh]'>

            <div className = "flex flex-col items-center justify-around w-[80%] h-[42vh] m-6 ">
                <h1 className="text-white text-[clamp(2.7rem,4.5vw,15.6rem)]  mt-3">Zoka</h1>

                <h2 className="text-white text-center mt-3 text-[clamp(1.5rem,3.2vw,12.6rem)]">Strong Coffee. Clean Experience.</h2>
                <div className = "flex flex-row ml-1 mt-2 gap-x-4 ">
                    <img className="h-[20px]" src="./src/assets/icon/icon_whatsapp.png" alt="" />
                    <img className="h-[20px]" src="./src/assets/icon/icon_instagram.png" alt="" />
                </div>

                <div className ="mt-5 flex pb-9">
                    <img className="h-[22px]" src="./src/assets/icon/icon_local.png" alt="" />
                    <p className="text-white sm:text-[14px]">333 N Michigan Ave Ste 300,Chicago</p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Hero