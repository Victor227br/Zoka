export const getCart = () => {
  const savedCart = localStorage.getItem("cart");

  if (!savedCart) {
    return [];
  }

  try {
    const cart = JSON.parse(savedCart);
    return Array.isArray(cart) ? cart : [];
  } catch {
    return [];
  }
};

export const saveCart = (dataCart) => {
  localStorage.setItem("cart", JSON.stringify(dataCart));
};
