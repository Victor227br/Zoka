import { Link } from "react-router-dom";

const MenuItem = () => {
return(
 <Link to="/Product">
<div
  className="
    flex
    flex-col
    sm:flex-row
    bg-white
    w-full
    shadow-sm
    hover:shadow-lg
    transition-all
    duration-300
    rounded-md
    cursor-pointer
    p-4
    gap-4
    sm:items-center">

  <div
    className="
      flex
      justify-center
      flex-shrink-0">
    <img
      className="
        w-full
        max-w-[360px]
        h-54
        hover:scale-105
        duration-300
        sm:h-32
        lg:h-40
        object-cover
        rounded-md"
      src="/src/assets/picture/cappuccino.jpg"
      alt=""/>
  </div>

  <div className="flex flex-col flex-1 justify-between lg:mt-2">
    <div>
      <h2 className="text-lg sm:text-xl font-bold text-[#1D3557]">Coffee Brazilian</h2>
      <p className="text-sm text-[#5F6368] mt-2">Savor the bold aroma and smooth flavor of premium Brazilian coffee made with carefully selected beans.</p>
    </div>

    <div
      className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-end
        gap-3
        mt-2
        md:gap-6
        lg:mt-5">

      <h2 className="text-lg font-bold text-[#1D3557]">$19.00</h2>

      <button
        className="
          bg-[#0344DC]
          text-white
          h-9
          w-full
          rounded-md
          text-md
          font-semibold
          hover:bg-blue-500
          transition-all
          duration-300
          md:w-20
          md:h-8
          lg:w-22
          lg:h-7
          lg:text-sm
          ">
        Buy
      </button>
    </div>
  </div>
</div>
</Link>
  )
}

export default MenuItem