import test from "node:test";
import assert from "node:assert/strict";
import { getAvailableCartQuantity, getCartIssues } from "../src/utils/shop.js";
import { getOrderStatus, getNextOrderStatus } from "../src/utils/orders.js";

const cart = [
  { id: 1, name: "Coffee", size: "120ml", quantity: 2, price: 10, stock: 3 },
  { id: "1", name: "Coffee", size: "180ml", quantity: 1, price: 12, stock: 3 },
];
const product = { id: 1, status: "Active", stock: 5, price: 10 };

test("quantity controls follow current stock across sizes and mixed ID types", () => {
  assert.equal(getAvailableCartQuantity(cart, [product], "1"), 2);
  assert.equal(getAvailableCartQuantity(cart, [{ ...product, stock: 2 }], 1), 0);
  assert.equal(getAvailableCartQuantity(cart, [{ ...product, stock: 8 }], 1), 5);
});

test("inactive, deleted and invalid-stock products cannot be increased", () => {
  for (const products of [[], [{ ...product, status: "Inactive" }], [{ ...product, stock: "invalid" }], [{ ...product, stock: 0 }]]) {
    assert.equal(getAvailableCartQuantity(cart, products, 1), 0);
  }
});

test("checkout still reports excess stock and changed prices", () => {
  assert.equal(getCartIssues(cart, [product]).length, 0);
  assert.ok(getCartIssues(cart, [{ ...product, stock: 2 }]).every((issue) => issue.includes("quantity")));
  assert.ok(getCartIssues(cart, [{ ...product, price: 20 }]).every((issue) => issue.includes("price")));
});

test("orders advance through preparation and stop after delivery", () => {
  assert.equal(getNextOrderStatus("Received"), "Preparing");
  assert.equal(getNextOrderStatus("Preparing"), "Ready");
  assert.equal(getNextOrderStatus("Ready"), "Delivered");
  assert.equal(getNextOrderStatus("Delivered"), null);
  assert.equal(getNextOrderStatus("invalid"), null);
});

test("legacy completed orders remain finished", () => {
  assert.equal(getOrderStatus("Completed"), "Delivered");
  assert.equal(getNextOrderStatus("Completed"), null);
});
