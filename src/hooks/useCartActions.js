import { useState, useEffect } from "react"
import { getCart } from "../services/CartService"
import { saveCart } from "../services/CartService"

export const useCartActions = () => {

 const [cart, setCart] = useState(getCart())

 const addItemCart = (product) => {
    return setCart([...cart, product])
 }

 useEffect(() => {
    saveCart(cart)
   },[cart])
 
 const buyProduct = (product) => {
    console.log("Compra realizada com sucesso!", product)
} 

 const removeItemCart = (id, size) =>  {
    const removeProduct = cart.filter(product => product.id !== id && product.size !== size)
    setCart(removeProduct)
}

 const increaseQuantity = (id, size) => {
  const updatedCart = cart.map(product => {
     if(product.id === id && product.size === size) {
        return {...product, quantity: product.quantity + 1}
        }
     else {
        return product
    }
})
    setCart(updatedCart)
 }

 const decreaseQuantity = (id, size) => {
    const updatedCart = cart.map(product => {
        if(product.id === id && product.size === size) {
            return {...product, quantity: product.quantity - 1}
        }
        else {
            return product
        }
    })
    setCart(updatedCart)
 }
 
return{
    addItemCart,
    buyProduct,
    removeItemCart,
    increaseQuantity,
    decreaseQuantity,
    cart,
}
}