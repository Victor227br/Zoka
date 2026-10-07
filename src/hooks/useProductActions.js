import { useState, useEffect} from "react";
import { getItem, setItem } from "../services/ProductService";

export const useProductsActions = () => {
  const [isFormOpen, setIsFormOpen ] = useState(false)
  const [products, setProducts] = useState(getItem())
  const [editingProduct, setEditingProduct] = useState(null)

  const openForm = (id) => {
    const findProduct = products.find(product => product.id === id)
    setEditingProduct(findProduct)
    setIsFormOpen(true)    
  }
  
  const closeForm = () => {
   setIsFormOpen(false)
    setEditingProduct(null);
  }
  
  const addProduct = (product) => {
    return setProducts([...products, product])
  }

  useEffect(() => {
    setItem(products)
  },[products])

  const removeProduct = (id) => {
    const deleteProduct = products.filter(product => product.id !== id) 
    return setProducts(deleteProduct)
  }

  const editProduct = (updatedProduct) => {
    setProducts((currentProducts) =>
    currentProducts.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product))
  }

  const purchaseProducts = (cartItems) => {
    const unavailableProduct = cartItems.find((cartItem) => {
      const product = products.find(
        (item) => item.id.toString() === cartItem.id.toString(),
      )

      const requestedQuantity = cartItems
        .filter((item) => item.id.toString() === cartItem.id.toString())
        .reduce((total, item) => total + item.quantity, 0)

      return !product || requestedQuantity > Number(product.stock)
    })

    if (unavailableProduct) {
      return false
    }

    const updatedProducts = products.map((product) => {
      const purchasedQuantity = cartItems
        .filter((item) => item.id.toString() === product.id.toString())
        .reduce((total, item) => total + item.quantity, 0)

      if (purchasedQuantity === 0) {
        return product
      }

      const updatedStock = Number(product.stock) - purchasedQuantity

      return {
        ...product,
        stock: updatedStock,
        status: updatedStock === 0 ? "Inactive" : product.status,
      }
    })

    setProducts(updatedProducts)
    return true
  }
  
  return {
    products,
    editingProduct,
    isFormOpen,
    addProduct,
    removeProduct,
    editProduct,
    purchaseProducts,
    openForm, 
    closeForm,  
  }
}
