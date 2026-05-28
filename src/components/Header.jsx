
const Header = () => {
    return (
    <header className ="m-0 bg-black/40 backdrop-blur-md border-b border-white/10 h-[9vh] flex items-center flex-wrap justify-between" >
        <h1 className = "text-white sm: ml-6 lg:ml-16 text-2xl">Zoka</h1>

     <div className="header__actions" className = "flex items-center justify-around w-24 mr-8 lg:mr-16">
      <div className="relative flex justify-center items-center cursor-pointer">
        <div className="absolute -top-2 -right-2 bg-[#0344DC] rounded-full h-5 w-5 flex justify-center items-center cursor-pointer">
            <p className="text-xs text-white">2</p>
        </div>
        <img className=" cursor-pointer h-7" src="./src/assets/icon/icon_shoppingCart-white.png"/>
    </div>
        <div className='cursor-pointer'>
        <img  className= "h-9" src="./src/assets/icon/icon_profile.png" alt="" />
        </div>
     </div>
    </header>
)
}


export default Header
