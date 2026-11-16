import test from "node:test"
import assert from "node:assert/strict"
import { createOrder } from "../src/utils/orders.js"
import { getOrders, saveOrders } from "../src/services/OrderService.js"

test("new orders start as received with unique IDs and rounded totals", () => {
  const order = createOrder([], 12.345)
  assert.equal(order.status, "Received")
  assert.equal(order.total, 12.35)
  assert.ok(order.id.startsWith("ZK-"))
  assert.notEqual(order.id, createOrder([], 12.345).id)
  assert.ok(Number.isFinite(Date.parse(order.createdAt)))
})

test("order history survives editing and deleting catalog and cart items", () => {
  const products = [{id: 1, name: "Coffee", price: 10, stock: 5}]
  const cart = [{...products[0], size: "120ml", quantity: 2}]
  const customer = {name: "Victor", email: "victor@example.com"}
  const order = createOrder(cart, 20, customer)
  products[0].name = "New coffee"
  products[0].price = 20
  cart[0].name = "Changed item"
  cart[0].quantity = 9
  customer.name = "Changed customer"
  products.splice(0)
  cart.splice(0)
  assert.equal(order.items[0].name, "Coffee")
  assert.equal(order.items[0].price, 10)
  assert.equal(order.items[0].quantity, 2)
  assert.equal(order.total, 20)
  assert.equal(order.customer.name, "Victor")
})

test("order persistence restores status and item history", (context) => {
  const storage = new Map()
  const originalStorage = Object.getOwnPropertyDescriptor(globalThis, "localStorage")
  context.after(() => {
    if (originalStorage) Object.defineProperty(globalThis, "localStorage", originalStorage)
    else Reflect.deleteProperty(globalThis, "localStorage")
  })
  Object.defineProperty(globalThis, "localStorage", {configurable: true, value: {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  }})
  assert.deepEqual(getOrders(), [])
  const order = createOrder([{id: 1, name: "Coffee", type: "Coffee", image: "coffee.png", size: "120ml", price: 10, quantity: 2}], 20)
  saveOrders([{...order, status: "Preparing"}])
  assert.deepEqual(getOrders(), [{...order, status: "Preparing"}])
  storage.set("orders", "invalid json")
  assert.deepEqual(getOrders(), [])
  storage.set("orders", "{}")
  assert.deepEqual(getOrders(), [])
})
