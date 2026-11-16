export const formatPrice = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

export const sizeMultiplier = {
  "120ml": 1,
  "180ml": 1.2,
  "240ml": 1.45,
  "250g": 1,
  "500g": 1.8,
  "1kg": 3.2,
}

export const getUnitPrice = (price, size) => {
  const priceInCents = Math.round(Number(price) * 100)
  const finalPriceInCents = Math.round(priceInCents * sizeMultiplier[size] + 0.00000001)

  return finalPriceInCents / 100
}

export const getCartIssues = (cart, products) => {
  const issues = []

  cart.forEach((item) => {
    const product = products.find((product) => String(product.id) === String(item.id))
    const quantityInCart = cart
      .filter((cartItem) => String(cartItem.id) === String(item.id))
      .reduce((total, cartItem) => total + cartItem.quantity, 0)

    if (!product || product.status?.toLowerCase() !== "active") {
      issues.push(`${item.name} is no longer available. Remove it from your cart.`)
      return
    }

    if (!Number.isInteger(item.quantity) || item.quantity < 1 || !Number.isFinite(Number(product.stock)) || quantityInCart > Number(product.stock)) {
      issues.push(`Review the quantity of ${item.name}; available stock: ${product.stock}.`)
      return
    }

    const currentPrice = getUnitPrice(product.price, item.size)

    if (currentPrice !== item.price) {
      issues.push(`The price of ${item.name} changed. Remove it and add it again to review the new price.`)
    }
  })

  return issues
}

// Stock is shared by all sizes of the same product.
export const getAvailableCartQuantity = (cart, products, id) => {
  const product = products.find((item) => String(item.id) === String(id));
  if (!product || product.status?.toLowerCase() !== "active") return 0;
  const stock = Number(product.stock);
  if (!Number.isFinite(stock) || stock <= 0) return 0;
  const quantity = cart.filter((item) => String(item.id) === String(id))
    .reduce((total, item) => total + item.quantity, 0);
  return Math.max(0, Math.floor(stock) - quantity);
};

export const getPurchasedProducts = (products, cartItems) => {
  if (cartItems.length === 0 || getCartIssues(cartItems, products).length > 0) {
    return false
  }

  const updatedProducts = products.map((product) => {
    const purchasedQuantity = cartItems
      .filter((item) => String(item.id) === String(product.id))
      .reduce((total, item) => total + item.quantity, 0)

    if (purchasedQuantity === 0) {
      return product
    }

    const updatedStock = Number(product.stock) - purchasedQuantity
    return {...product, stock: updatedStock, status: updatedStock === 0 ? "Inactive" : product.status}
  })

  return updatedProducts
}
