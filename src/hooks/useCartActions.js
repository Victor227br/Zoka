import { useContext, useEffect, useState } from "react";
import { getAvailableCartQuantity } from "../utils/shop";
import { ProductsContext } from "../context/productsContext";
import { getCart, saveCart } from "../services/CartService";

export const useCartActions = () => {
  const { products } = useContext(ProductsContext);
  const [cart, setCart] = useState(() => getCart());

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addItemCart = (newItem) => {
    const availableQuantity = getAvailableCartQuantity(cart, products, newItem.id);

    if (availableQuantity <= 0) {
      return false;
    }

    if (!Number.isInteger(newItem.quantity) || newItem.quantity < 1 || newItem.quantity > availableQuantity) return false;
    const quantityToAdd = newItem.quantity;
    const itemAlreadyExists = cart.find((item) => String(item.id) === String(newItem.id) && item.size === newItem.size,);

    if (itemAlreadyExists) {
      const updatedCart = cart.map((item) => {
        if (String(item.id) === String(newItem.id) && item.size === newItem.size) {
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
    const updatedCart = cart.filter((item) => String(item.id) !== String(id) || item.size !== size,);

    setCart(updatedCart);
  };

  const increaseQuantity = (id, size) => {
    const selectedItem = cart.find((item) => String(item.id) === String(id) && item.size === size,);

    if (!selectedItem) {
      return;
    }

    if (getAvailableCartQuantity(cart, products, id) < 1) {
      return;
    }

    const updatedCart = cart.map((item) => {
      if (String(item.id) === String(id) && item.size === size) {
        return {...item, quantity: item.quantity + 1};
      }

      return item;
    });

    setCart(updatedCart);
  };

  const decreaseQuantity = (id, size) => {
    const updatedCart = cart.map((item) => {
      if (String(item.id) === String(id) && item.size === size && item.quantity > 1) {
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
