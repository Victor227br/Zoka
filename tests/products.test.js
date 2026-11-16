import test from "node:test"
import assert from "node:assert/strict"
import { getPurchasedProducts } from "../src/utils/shop.js"
import { hasDuplicateName } from "../src/utils/validation.js"

const products = [
  {id: 1, name: "Caf\u00e9 especial", stock: 5, price: 10, status: "Active"},
  {id: 2, name: "Cappuccino", stock: 8, price: 15, status: "Active"},
]

const cartItem = {id: 1, name: "Caf\u00e9 especial", size: "120ml", quantity: 2, price: 10}

test("purchase reduces stock only for the purchased products", () => {
  const updatedProducts = getPurchasedProducts(products, [cartItem])
  assert.equal(updatedProducts[0].stock, 3)
  assert.equal(updatedProducts[0].status, "Active")
  assert.deepEqual(updatedProducts[1], products[1])
  assert.equal(products[0].stock, 5)
})

test("purchase sums sizes and deactivates the product when stock reaches zero", () => {
  const updatedProducts = getPurchasedProducts(products, [
    cartItem,
    {...cartItem, id: "1", size: "180ml", quantity: 3, price: 12},
  ])
  assert.equal(updatedProducts[0].stock, 0)
  assert.equal(updatedProducts[0].status, "Inactive")
})

test("purchase above stock is rejected without changing any product", () => {
  const originalProducts = structuredClone(products)
  const result = getPurchasedProducts(products, [
    cartItem,
    {...cartItem, id: 2, price: 15, quantity: 9},
  ])
  assert.equal(result, false)
  assert.deepEqual(products, originalProducts)
})

test("purchase rejects unavailable products and invalid quantities", () => {
  assert.equal(getPurchasedProducts([], [cartItem]), false)
  assert.equal(getPurchasedProducts([{...products[0], status: "Inactive"}], [cartItem]), false)
  assert.equal(getPurchasedProducts(products, []), false)
  for (const quantity of [0, -1, 1.5, "2"]) {
    assert.equal(getPurchasedProducts(products, [{...cartItem, quantity}]), false)
  }
  assert.equal(getPurchasedProducts([{...products[0], stock: "invalid"}], [cartItem]), false)
})

test("purchase rejects outdated prices", () => {
  assert.equal(getPurchasedProducts(products, [{...cartItem, price: 1}]), false)
})

test("duplicate names ignore accents, case and extra spaces", () => {
  assert.equal(hasDuplicateName(products, "  CAFE   ESPECIAL  "), true)
  assert.equal(hasDuplicateName(products, "Mocha"), false)
})

test("editing allows the current name but rejects another product name", () => {
  assert.equal(hasDuplicateName(products, "Caf\u00e9 especial", "1"), false)
  assert.equal(hasDuplicateName(products, "Cappuccino", 1), true)
})
