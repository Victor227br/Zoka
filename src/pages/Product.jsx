import ProductSizeButton from "../components/ProductSizeButton";

const Product = () => {
   
return(
<div className="min-h-screen bg-[#0344DC]">
  <div className="flex justify-center items-center h-[40vh]">
    <img  src="/src/assets/picture/coffee_hero-remove_bg.png" alt=" "className="h-[300px] drop-shadow-2xl"/>
  </div>

  <div className="bg-white rounded-t-[40px] -mt-10 relative z-10 p-8 min-h-[65vh]">

    <div>
        <h1 className="text-5xl font-bold text-[#1D3557]">Coffee Brazilian</h1>
        <p className="text-gray-400 mt-3 text-lg">The traditional Brazilian Coffee</p>
    </div>
    
    <div className="mt-4 flex flex-row gap-4">
        <div className="w-32 flex flex-row justify-center items-center h-9 bg-[#E1E9F9] gap-2 rounded-2xl">
            <img  className="h-6 pb-1"  src="./src/assets/icon/icon_hot-coffee.png" alt="" />
            <h2 className="text-[#1D3557] text-[clamp(0.8rem,1vw,1.4rem)] font-bold">Cold Coffee</h2>
        </div>
          <div className="w-32 flex flex-row justify-center items-center h-9 bg-[#E1E9F9] gap-3 rounded-2xl">
            <img className="h-6"  src="./src/assets/icon/icon_grain-coffee-blue.png" alt="" />
            <h2 className="text-[#1D3557] text-[clamp(0.8rem,1vw,1.4rem)] font-bold">Brazilian</h2>
        </div>
    </div>
        <div className="mt-4">
            <div className="w-[100%] h-[1px] bg-[#1D3557]"></div>
            <h2 className="text-[#1D3557] text-[clamp(1.2rem,1.3vw,1.8rem)] m-2 font-bold">Size </h2>
            <div className="flex flex-row justify-around mt-5 mb-5">
               <ProductSizeButton size={"110ml"}/>
               <ProductSizeButton size={"225ml"}/>
               <ProductSizeButton size={"333ml"}/>
            </div>    
            <div className="w-[100%] h-[1px] bg-[#1D3557]"></div>
        </div>
        <nav>
           
        </nav>
  </div>
</div>  

)}

export default Product;

