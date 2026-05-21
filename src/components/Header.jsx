
const Header = () => {
    return (
    <header className ="m-0 h-16 flex items-center flex-wrap justify-between" >
        <h1 className = "text-[#0344DC]  sm: ml-6 text-2xl">Zoka</h1>

     <div className="header__actions" className = "flex items-center justify-around w-24 sm: mr-6">
      <div className="relative flex justify-center items-center cursor-pointer">
        <div className="absolute -top-2 -right-2 bg-[#0344DC] rounded-full h-5 w-5 flex justify-center items-center cursor-pointer">
            <p className="text-xs text-white">2</p>
        </div>
        <img className="h-7" src="./src/assets/icon/icon_shopping-cart.png"/>
    </div>
        <div className='cursor-pointer'>
        <img  className= "h-9" src="./src/assets/icon/icon_profile.png" alt="" />
        </div>
     </div>
    </header>
)

}


export default Header
