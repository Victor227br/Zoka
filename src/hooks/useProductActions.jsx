import { useState, useEffect} from "react";
import { getItem, setItem } from "../services/ProductService";

export const useProductsActions = () => {
  const [isFormOpen, setIsFormOpen ] = useState(false)
  const [products, setProducts] = useState(getItem())
  const [editingProduct, setEditingProduct] = useState(null)

  const openForm = () => {
    setIsFormOpen(true)
  }

  const closeForm = () => {
   setIsFormOpen(false)
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

  const openEditForm = (id) => {
    const findProduct = products.find(product => product.id === id)
    setEditingProduct(findProduct)
    openForm()
  }

  const replaceProduct = (newProduct) => {
    const updateProducts = products.map(product => {
      if(product.id === newProduct.id){
        return newProduct
      } else {
        return product
      }
    })
  setProducts(updateProducts)
  closeForm()
};
  
  return {
    products,
    editingProduct,
    isFormOpen,
    addProduct,
    removeProduct,
    replaceProduct,
    openEditForm,
    openForm, 
    closeForm
  }
}