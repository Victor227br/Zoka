import { useState, useEffect} from "react";
import { getItem, setItem } from "../services/ProductService";
import { hasDuplicateName } from "../utils/validation";

export const useProductsActions = () => {
  const [isFormOpen, setIsFormOpen ] = useState(false)
  const [products, setProducts] = useState(getItem())
  const [editingProduct, setEditingProduct] = useState(null)
  const [productMessage, setProductMessage] = useState("")

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
    if (hasDuplicateName(products, product.name)) {
      return false
    }
    setProducts((currentProducts) => [...currentProducts, product])
    setProductMessage(`${product.name} was added successfully.`)
  }

  useEffect(() => {
    setItem(products)
  },[products])

  const removeProduct = (id) => {
    if (!window.confirm("Delete this product? Existing orders will be preserved.")) return;
    const deleteProduct = products.filter(product => product.id !== id)
    setProducts(deleteProduct)
    setProductMessage("Product deleted successfully.")
  }

  const editProduct = (updatedProduct) => {
    if (hasDuplicateName(products, updatedProduct.name, updatedProduct.id)) {
      return false
    }
    setProductMessage(`${updatedProduct.name} was updated successfully.`)
    setProducts((currentProducts) =>
    currentProducts.map((product) => product.id === updatedProduct.id ? updatedProduct : product))
  }

  const purchaseProducts = (cartItems) => {
    const unavailableProduct = cartItems.find((cartItem) => {
      const product = products.find((item) => item.id.toString() === cartItem.id.toString())
      const requestedQuantity = cartItems.filter((item) => item.id.toString() === cartItem.id.toString()).reduce((total, item) => total + item.quantity, 0)
      return !product || product.status?.toLowerCase() !== "active" || requestedQuantity > Number(product.stock)
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
      return {...product,stock: updatedStock,status: updatedStock === 0 ? "Inactive" : product.status,}
    })

    setProducts(updatedProducts)
    return true
  }

  return {
    products,
    productMessage,
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
