import { useOrderActions } from "../hooks/useOrderActions";
import { OrdersContext } from "./ordersContext";

export const OrdersProvider = ({children}) => {
  const orderActions = useOrderActions();

  return (
    <OrdersContext.Provider value={orderActions}>
      {children}
    </OrdersContext.Provider>
  );
};
