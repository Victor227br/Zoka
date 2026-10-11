import { useContext } from "react"
import { ProductsContext } from "../context/productsContext"

export const useAppContext = () => {
  const context = useContext(ProductsContext)

  if(context === null){
    throw new Error("ProductsProvider is missing")
  }

  return context
}
