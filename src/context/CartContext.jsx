import { useCartActions } from "../hooks/useCartActions";
import { CartContext } from "./cartContext";

export const CartProvider = ({children}) => {
  const cartActions = useCartActions();

  return (
    <CartContext.Provider value={cartActions}>
      {children}
    </CartContext.Provider>
  );
};
