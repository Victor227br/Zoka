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
  
  const totalStock = () => {
  let total = 0;
  products.forEach(product => {
    total += Number(product.stock);
  });
    return total;
}

  const totalProductsInative = () => { 
    let total = 0;
    products.forEach(product => {
      if(product.status === "inactive"){
        total++;
      }
    })
    return total
  }
  
  return{
   search,
   category, 
   status,
   filteredProducts,
   clearFilter,
   totalProducts,
   totalStock,
   totalProductsInative,
   setSearch,
   setCategory,
   setStatus,
  }
}
    