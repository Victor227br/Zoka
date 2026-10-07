import { useEffect, useState } from "react";
import { getCart, saveCart } from "../services/CartService";

export const useCartActions = () => {
  const [cart, setCart] = useState(() => getCart());

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addItemCart = (newItem) => {
    const quantityInCart = cart
      .filter((item) => item.id === newItem.id)
      .reduce((total, item) => total + item.quantity, 0);

    const availableQuantity = Number(newItem.stock) - quantityInCart;

    if (availableQuantity <= 0) {
      return false;
    }

    const quantityToAdd = Math.min(newItem.quantity, availableQuantity);
    const itemAlreadyExists = cart.find(
      (item) => item.id === newItem.id && item.size === newItem.size,
    );

    if (itemAlreadyExists) {
      const updatedCart = cart.map((item) => {
        if (item.id === newItem.id && item.size === newItem.size) {
          return {...item, quantity: item.quantity + quantityToAdd};
        }

        return item;
      });

      setCart(updatedCart);
    } else {
      setCart([...cart, {...newItem, quantity: quantityToAdd}]);
    }

    return true;
  };

  const removeItemCart = (id, size) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id || item.size !== size,
    );

    setCart(updatedCart);
  };

  const increaseQuantity = (id, size) => {
    const selectedItem = cart.find(
      (item) => item.id === id && item.size === size,
    );

    if (!selectedItem) {
      return;
    }

    const quantityInCart = cart
      .filter((item) => item.id === id)
      .reduce((total, item) => total + item.quantity, 0);

    if (quantityInCart >= Number(selectedItem.stock)) {
      return;
    }

    const updatedCart = cart.map((item) => {
      if (item.id === id && item.size === size) {
        return {...item, quantity: item.quantity + 1};
      }

      return item;
    });

    setCart(updatedCart);
  };

  const decreaseQuantity = (id, size) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.size === size && item.quantity > 1) {
        return {...item, quantity: item.quantity - 1};
      }

      return item;
    });

    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const buyProduct = (completePurchase) => {
    if (cart.length === 0) {
      return false;
    }

    const purchaseCompleted = completePurchase(cart);

    if (purchaseCompleted) {
      clearCart();
    }

    return purchaseCompleted;
  };

  const cartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const cartSubtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return {
    cart,
    cartQuantity,
    cartSubtotal,
    addItemCart,
    buyProduct,
    removeItemCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  };
};
