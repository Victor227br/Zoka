import { useState, useEffect, useReducer} from "react";
import { getItem, setItem } from "../services/ProductService";
import FormProduct from "../components/FormProduct";

export const useProductsActions = () => {
  const [isFormOpen, setIsFormOpen ] = useState(false)
  const [products, setProducts] = useState(getItem())
  const [editingProduct, setEditingProduct] = useState(null)

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

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

  const filteredProducts = products.filter((product) => {
    const searchFilter = search === "" ||product.name.toLowerCase().includes(search.toLowerCase());
    const categoryFilter = category === "" || category === "All" || product.type === category;
    const statusFilter = status === "" || status === "All" || product.status === status;
      return searchFilter && categoryFilter && statusFilter
  })

  const clearFilter = () => {
  setSearch("");
  setCategory("All");
  setStatus("All");
};

  const totalProducts = () => {
  return products.length;
  };

  const totalStock = products.reduce((total, product) => {
  return total + product.stock;
  }, 0);

  return {
    products,
    editingProduct,
    isFormOpen,
    search,
    category, 
    status,
    filteredProducts,
    totalStock,
    addProduct,
    removeProduct,
    totalProducts,
    editProduct,
    openForm, 
    closeForm,
    clearFilter,
    setSearch,
    setCategory,
    setStatus,
  }
}