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
            <h2 className="text-[#1D3557] text-[clamp(0.7rem,0.8vw,1.2rem)] font-bold">Cold Coffee</h2>
        </div>
          <div className="w-32 flex flex-row justify-center items-center h-9 bg-[#E1E9F9] gap-3 rounded-2xl">
            <img className="h-6"  src="./src/assets/icon/icon_grain-coffee-blue.png" alt="" />
            <h2 className="text-[#1D3557] text-[clamp(0.7rem,0.8vw,1.2rem)]  font-bold">Brazilian</h2>
        </div>
    </div>
        <div className="mt-4">
            <div className="w-[100%] h-[1px] bg-[#1D3557]"></div>
            <h2 className="text-[#1D3557] text-[clamp(1.2rem,1.3vw,1.8rem)] m-2 font-bold">Size</h2>
            <div className="flex flex-row justify-around mt-5 mb-5">
      <button 
        className="
        text-[#1D3557] 
        text-[clamp(0.8rem,1vw,1.3rem)]
        w-24
        h-9 
        bg-[#E1E9F9] 
        flex items-center 
        justify-center 
        rounded-2xl 
        flex-col 
        cursor-pointer 
        m-0 
        active:bg-[#0344DC] 
        active:text-white 
        transition duration-150">
          120ml
        </button>

      <button 
        className="
        text-[#1D3557] 
        text-[clamp(0.8rem,1vw,1.3rem)]
        w-24
        h-9 
        bg-[#E1E9F9] 
        flex items-center 
        justify-center 
        rounded-2xl 
        flex-col 
        cursor-pointer 
        m-0 
        active:bg-[#0344DC] 
        active:text-white 
        transition duration-150">
          180ml
        </button>

      <button 
        className="
        text-[#1D3557] 
        text-[clamp(0.8rem,1vw,1.3rem)]
        w-24
        h-9 
        bg-[#E1E9F9] 
        flex items-center 
        justify-center 
        rounded-2xl 
        flex-col 
        cursor-pointer 
        m-0 
        active:bg-[#0344DC] 
        active:text-white 
        transition duration-150">
          240ml
        </button>


        </div>    
            <div className="w-[100%] h-[1px] bg-[#1D3557]"></div>
      </div>

  <div
  className="
    fixed
    bottom-0
    left-0
    right-0
    bg-white
    border-t
    border-slate-200
    p-5
    flex
    items-center
    gap-4
    shadow-[0_-5px_20px_rgba(0,0,0,0.08)]">

    <div
      className="
      flex
      items-center
      bg-[#E1E9F9]
      rounded-2xl
      overflow-hidden">

    <button
      className="
        w-12
        h-12
        text-2xl
        font-bold
        text-[#1D3557]
        hover:bg-[#D2DDF7]
        transition">
      -
    </button>

    <span
      className="
        w-12
        text-center
        text-lg
        font-semibold
        text-[#1D3557]">
      1
    </span>

    <button
      className="
        w-12
        h-12
        text-2xl
        font-bold
        text-[#1D3557]
        hover:bg-[#D2DDF7]
        transition">
      +
    </button>
  </div>

  <div className="flex flex-1 gap-3">
    <button
      className="
        flex-1
        h-12
        rounded-xl
        border-2
        border-[#0344DC]
        text-[#0344DC]
        font-semibold
        hover:bg-[#E1E9F9]
        transition">
      Add Cart
    </button>

    <button
      className="
        flex-1
        h-12
        rounded-xl
        bg-[#0344DC]
        text-white
        font-semibold
        hover:bg-[#0236B3]
        transition">
      Buy Now
    </button>
  </div>
</div>


  </div>
</div>  

)}

export default Product;

