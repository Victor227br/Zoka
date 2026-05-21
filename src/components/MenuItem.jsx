import { Link } from "react-router-dom"

const MenuItem = () => {
    
    return(
        <Link to="/Product">
        <div className = "flex bg-white w-[100%] h-32 rounded-md cursor-pointer justify-between">
            <div className=" w-[47vw] m-3 ml-4 flex flex-col justify-between " > 
                <h2>Coffee Brazilian</h2>
                <p className="text-[12px] text-[#5F6368]">The traditional Brazilian Coffee </p>
                <h2 className="">$19.00</h2>
            </div>

            <div className=" flex justify-center items-center">
                <img className="h-24 mr-5" src="/src/assets/picture/coffee_hero-remove_bg.png" alt="" />
            </div>
        </div>
    </Link>

    )
}

export default MenuItem