import { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const normalizeText = (text) => {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
};

export const useProductsFilters = () => {
  const { products } = useContext(ProductsContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const normalizedSearch = normalizeText(search);

  const filteredProducts = products.filter((product) => {

    const productText = `${product.name} ${product.type} ${product.description}`;
    const searchFilter = normalizedSearch === "" || normalizeText(productText).includes(normalizedSearch);
    const categoryFilter = category === "All" || product.type === category;
    const statusFilter = status === "All" || normalizeText(product.status) === normalizeText(status);
    return searchFilter && categoryFilter && statusFilter;
  });

  const clearFilter = () => {
    setSearch("");
    setCategory("All");
    setStatus("All");
  };

  const categories = [...new Set(products.map((product) => product.type).filter(Boolean)),].sort();

  const totalProducts = products.length;
  let totalStock = 0;
  let totalInactiveProducts = 0;

  products.forEach((product) => {
    totalStock += Number(product.stock) || 0;

    if (normalizeText(product.status) === "inactive") {
      totalInactiveProducts++;
    }
  });

  const hasActiveFilters = search.trim() !== "" || category !== "All" || status !== "All";

  return {
    search,
    category,
    status,
    categories,
    filteredProducts,
    hasActiveFilters,
    totalProducts,
    totalStock,
    totalInactiveProducts,
    clearFilter,
    setSearch,
    setCategory,
    setStatus,
  };
};
