import { createContext } from "react";
import { useCartActions } from "../hooks/useCartActions";

export const CartContext = createContext(null);

export const CartProvider = ({children}) => {
  const cartActions = useCartActions();

  return (
    <CartContext.Provider value={cartActions}>
      {children}
    </CartContext.Provider>
  );
};
