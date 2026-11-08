const normalizeName = (name) => {
  return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, " ")
}

export const hasDuplicateName = (products, name, id) => {
  return products.some((product) => {
    const sameName = normalizeName(product.name) === normalizeName(name)
    const sameProduct = String(product.id) === String(id)

    return sameName && !sameProduct
  })
}

export const getCheckoutErrors = (data, fulfillment) => {
  const errors = {}
  const phone = data.phone.trim()
  const phoneDigits = phone.replace(/\D/g, "")
  const nationalPhone = phoneDigits.startsWith("55") && phoneDigits.length > 11 ? phoneDigits.slice(2) : phoneDigits

  if (data.name.trim().length < 3) {
    errors.name = "Enter your name with at least 3 characters."
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Enter a valid email address."
  }

  if (!/^\+?[\d\s().-]+$/.test(phone) || !/^[1-9]{2}\d{8,9}$/.test(nationalPhone)) {
    errors.phone = "Enter a phone with area code and 10 or 11 digits. Letters are not allowed."
  }

  if (fulfillment === "delivery") {
    const address = (data.address || "").trim()

    if (address.length < 15 || !/[a-zA-Z\u00C0-\u024F]{3}/.test(address) || !/\d|s\s*\/\s*n/i.test(address)) {
      errors.address = "Enter a complete address with street, number (or s/n), neighborhood, city and postal code, with at least 15 characters."
    }
  }

  return errors
}
