import { useNavigate } from "react-router-dom"

const navigate = useNavigate();

const BackButton = () =>{
    <button 
    className= " flex justify-center items-center cursor-pointer p-3 bg-white rounded-full"
    onClick={() => navigate(-1)}>
        <img src="./src/assets/icon/icon_arrow-black.png" alt="" />
    </button>
}

export default BackButton