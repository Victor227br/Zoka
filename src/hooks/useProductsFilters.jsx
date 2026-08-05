import { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const useProductsFilters = () => {
    
  const {products} = useContext(ProductsContext)

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
    
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


  return{
   search,
   category, 
   status,
   filteredProducts,
   totalStock,
   clearFilter,
   totalProducts,
   setSearch,
   setCategory,
   setStatus,
  }
}
    