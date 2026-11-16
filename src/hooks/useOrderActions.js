import { useEffect, useState } from "react";
import { getOrders, saveOrders } from "../services/OrderService";
import { createOrder, getNextOrderStatus } from "../utils/orders";

export const useOrderActions = () => {
  const [orders, setOrders] = useState(() => getOrders());

  useEffect(() => {
    saveOrders(orders);
  }, [orders]);

  const addOrder = (cartItems, total, customer = null) => {
    const order = createOrder(cartItems, total, customer);

    setOrders((currentOrders) => [order, ...currentOrders]);
    return order;
  };

  const advanceOrderStatus = (id) => {
    setOrders((currentOrders) => currentOrders.map((order) => {
      if (order.id !== id) return order;
      const status = getNextOrderStatus(order.status);
      return status ? { ...order, status } : order;
    }));
  };

  return {
    advanceOrderStatus,
    orders,
    addOrder,
  };
};
