import { useEffect, useState } from "react";
import { getOrders, saveOrders } from "../services/OrderService";

export const useOrderActions = () => {
  const [orders, setOrders] = useState(() => getOrders());

  useEffect(() => {
    saveOrders(orders);
  }, [orders]);

  const addOrder = (cartItems, total, customer = null) => {
    const order = {
      id: `ZK-${crypto.randomUUID()}`,
      customer,
      createdAt: new Date().toISOString(),
      status: "Completed",
      total: Number(total.toFixed(2)),
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        type: item.type,
        image: item.image,
        size: item.size,
        price: item.price,
        quantity: item.quantity,
      })),
    };

    setOrders((currentOrders) => [order, ...currentOrders]);
    return order;
  };

  return {
    orders,
    addOrder,
  };
};
