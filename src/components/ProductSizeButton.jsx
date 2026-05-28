

const ProductSizeButton = ({size}) => {
    return (
        <button 
        className="text-[#1D3557] 
        text-[clamp(0.8rem,1vw,1.3rem)]
        w-24 h-9 bg-[#E1E9F9] 
        flex items-center 
        justify-center 
        rounded-2xl 
        flex-col 
        cursor-pointer 
        m-0 
        active:bg-[#0344DC] 
        active:text-white 
        transition duration-150">{size}</button>
    )
}


export default ProductSizeButton