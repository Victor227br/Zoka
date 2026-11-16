export const orderStatuses = ["Received", "Preparing", "Ready", "Delivered"];
export const getOrderStatus = (status) => status === "Completed" ? "Delivered" : status;

export const getNextOrderStatus = (status) => {
  const index = orderStatuses.indexOf(getOrderStatus(status));
  return index >= 0 ? orderStatuses[index + 1] ?? null : null;
};

export const createOrder = (cartItems, total, customer = null) => {
  return {
    id: `ZK-${crypto.randomUUID()}`,
    customer: customer ? {...customer} : null,
    createdAt: new Date().toISOString(),
    status: "Received",
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
};
