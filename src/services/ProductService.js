import productsData from "../ProductsData.json";

export const getItem = () => {
  const getProduct = localStorage.getItem("productsData");
  const getVersion = localStorage.getItem("productsDataVersion");

  if (!getProduct) {
    localStorage.setItem("productsData", JSON.stringify(productsData));
    localStorage.setItem("productsDataVersion", "2");
    return productsData;
  } else {
    let products;
    try {
      products = JSON.parse(getProduct);
      if (!Array.isArray(products) || products.some((product) => !product || product.id == null || typeof product.name !== "string" || !Number.isFinite(Number(product.price)) || !Number.isFinite(Number(product.stock)))) return productsData;
    } catch {
      return productsData;
    }

    if (getVersion !== "2") {
      const updatedProducts = [...products];

      productsData.forEach((product) => {
        const productExists = products.find((item) => item.id === product.id);

        if (!productExists) {
          updatedProducts.push(product);
        }
      });

      localStorage.setItem("productsData", JSON.stringify(updatedProducts));
      localStorage.setItem("productsDataVersion", "2");
      return updatedProducts;
    }

    return products;
  }
};

export const setItem = (dataProducts) => {
  localStorage.setItem("productsData", JSON.stringify(dataProducts));
};
