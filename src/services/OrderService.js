export const getOrders = () => {
  const savedOrders = localStorage.getItem("orders");

  if (!savedOrders) {
    return [];
  }

  try {
    const orders = JSON.parse(savedOrders);
    return Array.isArray(orders) ? orders : [];
  } catch {
    return [];
  }
};

export const saveOrders = (orders) => {
  localStorage.setItem("orders", JSON.stringify(orders));
};
