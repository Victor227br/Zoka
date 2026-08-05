import MenuItem from "./MenuItem"
import { ProductsContext } from "../context/ProductsContext"
import { useContext } from "react"

 const MenuCategories = () =>{
  const {products} = useContext(ProductsContext)
    return (
    <section className = "flex flex-col mt-16">
      <h2 className="text-3xl text-[#1D3557] font-bold m-6 ml-10 mb-3 lg:ml-[5%]">Our Products </h2>
    <div
    className="
    grid
    mt-9
    gap-8
    px-6
    lg:px-16
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    2xl:grid-cols-4">

    {products.map((product) => {
      const {id} = product;
      return(
        <MenuItem
          key={id}  
          product={product}
          >
        </MenuItem>
      )
    })
    }
    </div>
    </section>
    )
}

export default MenuCategories