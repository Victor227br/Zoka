import productsData from "../ProductsData.json";

export const getItem = () => {
  const getProduct = localStorage.getItem("productsData");
  if (!getProduct) {
    localStorage.setItem("productsData", JSON.stringify(productsData));
    return productsData;
  } else {
    return JSON.parse(getProduct);
  }
};

export const setItem = (dataProducts) => {
  localStorage.setItem("productsData",JSON.stringify(dataProducts));
};

