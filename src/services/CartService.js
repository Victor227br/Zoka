export const getItem = () => {
  const getCart = localStorage.getItem("cart");
    return JSON.parse(getCart)
}

export const setItem = (dataCart) => {
    localStorage.setItem("cart", JSON.stringify(dataCart))
}