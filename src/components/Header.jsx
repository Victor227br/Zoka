import shoppingCartIcon from "../assets/icon/icon_shoppingCart-white.png";
import profileIcon from "../assets/icon/icon_profile.png";

const Header = () => {
    return(
      <header 
      className=" 
      flex 
      items-center 
      justify-between 
      h-[9vh] 
      bg-[#0344DC]
      border-white/10">
        
        <h1 className="ml-6 text-[clamp(1.5rem,1.5vw,2.3rem)] text-white lg:ml-16">Zoka</h1>
          <div className=" flex items-center justify-around w-24 mr-8 lg:mr-16">
            <div className="relative flex items-center justify-center cursor-pointer">
              <div className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-white">
                <p className="text-xs text-[#0344DC]">2</p>
              </div>

                <img className="h-7 cursor-pointer" src={shoppingCartIcon}/>
              </div>
                <div className="cursor-pointer">
                    <img className="h-9" src={profileIcon} alt="Profile"/>
                </div>
            </div>
        </header>
)}

 export default Header