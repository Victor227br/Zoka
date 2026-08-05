import { useState, useEffect, useReducer, createContext} from "react";
import { getItem, setItem } from "../services/ProductService";
import FormProduct from "../components/FormProduct";

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

  return {
    products,
    editingProduct,
    isFormOpen,
    addProduct,
    removeProduct,
    editProduct,
    openForm, 
    closeForm,
  
  }
}