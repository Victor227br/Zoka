import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"

 export const useAppContext = () => {
    const context = useContext(ProductsContext)
    if(context === undefined){
        throw new Error('Nao esta no contexto')
        throw new console.error('Nao esta no contexto');
    }
    return context
}