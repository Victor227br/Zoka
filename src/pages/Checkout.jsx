import { useContext, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Header from "../components/Header";
import { CartContext } from "../context/cartContext";
import { ProductsContext } from "../context/productsContext";
import { OrdersContext } from "../context/ordersContext";
import { formatPrice, getCartIssues } from "../utils/shop";
import { getCheckoutErrors } from "../utils/validation";

const fieldClass = "mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 focus:outline-blue-600";

const Checkout = () => {
  const { cart, cartSubtotal, clearCart } = useContext(CartContext);
  const { products, purchaseProducts } = useContext(ProductsContext);
  const { addOrder } = useContext(OrdersContext);
  const [fulfillment, setFulfillment] = useState("pickup");
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [completedOrderId, setCompletedOrderId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const submitted = useRef(false);
  const issues = [...new Set(getCartIssues(cart, products))];

  if (completedOrderId) {
    return <Navigate to={`/orders/${completedOrderId}`} replace state={{confirmed: true}} />;
  }

  if (cart.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (submitted.current) {
      return;
    }
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const validationErrors = getCheckoutErrors(data, fulfillment);
    setFormErrors(validationErrors);
    setError("");

    if (Object.keys(validationErrors).length > 0) {
      event.currentTarget.elements.namedItem(Object.keys(validationErrors)[0])?.focus();
      return;
    }
    if (issues.length || !purchaseProducts(cart)) {
      setError("Review the unavailable items in your cart before continuing.");
      return;
    }
    submitted.current = true;
    setSubmitting(true);
    const customer = {
      name: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      fulfillment,
      address: fulfillment === "delivery" ? data.address.trim() : "Pickup at Zoka — Santos, SP",
      payment: data.payment,
    };

    const order = addOrder(cart, cartSubtotal, customer);
    setCompletedOrderId(order.id);
    clearCart();
  };

  return (
    <main className="min-h-screen bg-[#F4F7FC] text-[#1D3557]">
      <Header />
      <div className="mx-auto max-w-5xl px-5 py-10">
        <Link to="/cart" className="font-semibold text-blue-700">← Back to cart</Link>
        <h1 className="my-6 text-4xl font-bold">Checkout</h1>
        <p className="mb-6 text-slate-500">Demo purchase. No real payment is processed. Details are saved only in this browser.</p>
        <form noValidate onSubmit={handleSubmit} className="grid items-start gap-6 md:grid-cols-[1fr_320px]">
          <section className="space-y-5 rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Your details</h2>
            <label className="block">
              Full name
              <input
                className={fieldClass}
                name="name"
                aria-invalid={!!formErrors.name}
                aria-describedby={formErrors.name ? "name-error" : undefined}
                autoComplete="name"
                required maxLength={100}
              />
              {formErrors.name && <span id="name-error" role="alert" className="mt-2 block text-sm text-red-600">{formErrors.name}</span>}
            </label>
            <label className="block">
              Email
              <input
                className={fieldClass}
                name="email"
                aria-invalid={!!formErrors.email}
                aria-describedby={formErrors.email ? "email-error" : undefined}
                type="email"
                autoComplete="email"
                required maxLength={150}
              />
              {formErrors.email && <span id="email-error" role="alert" className="mt-2 block text-sm text-red-600">{formErrors.email}</span>}
            </label>
            <label className="block">
              Phone
              <input
                className={fieldClass}
                name="phone"
                aria-invalid={!!formErrors.phone}
                aria-describedby={formErrors.phone ? "phone-error" : undefined}
                type="tel"
                autoComplete="tel"
                required minLength={8}
                maxLength={25}
              />
              {formErrors.phone && <span id="phone-error" role="alert" className="mt-2 block text-sm text-red-600">{formErrors.phone}</span>}
            </label>
            <fieldset>
              <legend className="font-bold">
                How would you like to receive your order?
              </legend>
              <div className="mt-3 flex flex-wrap gap-5">
                {["pickup", "delivery"].map((value) => (
                  <label key={value} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="fulfillment"
                      value={value}
                      checked={fulfillment === value}
                      onChange={() => setFulfillment(value)}/>
                    {value === "pickup" ? "Store pickup" : "Delivery (free demo)"}
                  </label>
                ))}
              </div>
            </fieldset>
            {fulfillment === "delivery" ? (
              <label className="block">
                Full address, number, neighborhood, city and postal code
                <textarea
                  className={fieldClass}
                  name="address"
                  aria-invalid={!!formErrors.address}
                  aria-describedby={formErrors.address ? "address-error" : undefined}
                  autoComplete="street-address"
                  required
                  maxLength={400}/>
                {formErrors.address && <span id="address-error" role="alert" className="mt-2 block text-sm text-red-600">{formErrors.address}</span>}
              </label>
            ) : (
              <p className="rounded-xl bg-blue-50 p-4">Pickup at Zoka — Santos, SP</p>
            )}
            <label className="block">
              Simulated payment
              <select className={fieldClass} name="payment">
                <option>Pix (demo)</option>
                <option>Card (demo)</option>
                <option>Pay on receipt (demo)</option>
              </select>
            </label>
            <p className="text-sm text-slate-500">Use fictional details to explore the demonstration.</p>
          </section>
          <aside className="rounded-3xl bg-[#1D3557] p-6 text-white">
            <h2 className="text-xl font-bold">Review your order</h2>
            <ul className="my-5 space-y-3">
              {cart.map((item) => (
                <li key={`${item.id}-${item.size}`} className="text-sm">
                  {item.quantity} × {item.name} ({item.size})
                  <strong className="block">
                    {formatPrice(item.price * item.quantity)}
                  </strong>
                </li>
              ))}
            </ul>
            <p className="border-t border-white/20 pt-4 text-2xl font-bold">Total {formatPrice(cartSubtotal)}</p>
            {issues.length > 0 && (
              <div role="alert" className="mt-4 space-y-2 text-sm text-red-200">
                {issues.map((issue) => (
                  <p key={issue}>{issue}</p>
                ))}
                <Link className="underline" to="/cart">Review cart</Link>
              </div>
            )}
            {error && (
              <p role="alert" className="mt-4 text-red-200">{error}</p>
            )}
            <button
              disabled={submitting || issues.length > 0}
              className="mt-6 w-full rounded-xl bg-blue-600 p-4 font-bold disabled:opacity-50">
              {submitting ? "Completing…" : "Confirm demo order"}
            </button>
          </aside>
        </form>
      </div>
    </main>
  );
}

export default Checkout
