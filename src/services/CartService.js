export const getCart = () => {
  const getCart = localStorage.getItem("cart");
    return JSON.parse(getCart)
}

export const saveCart = (dataCart) => {
    localStorage.setItem("cart", JSON.stringify(dataCart));
}