import { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import { OrdersContext } from "../context/ordersContext";
import { formatPrice } from "../utils/shop";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date))
}

const Orders = () => {
  const { orders } = useContext(OrdersContext);
  const { id } = useParams();
  const location = useLocation();
  const filteredOrders = id ? orders.filter((order) => order.id === id) : orders;
  return (
    <main className="min-h-screen bg-[#F4F7FC] text-[#1D3557]">
      <Header />
      <section className="mx-auto max-w-4xl px-5 py-10">
        <Link to={id ? "/orders" : "/"} className="font-semibold text-blue-700">← {id ? "All my orders" : "Continue shopping"}</Link>
        <h1 className="my-6 text-4xl font-bold">{id ? "Order details" : "My orders"}</h1>
        {location.state?.confirmed && filteredOrders.length > 0 && (
          <p role="status" className="mb-6 rounded-xl bg-emerald-100 p-4 text-emerald-800">
            Your demo order was placed successfully!
          </p>
        )}
        <p className="mb-6 text-slate-500">Orders saved in this browser. No real payment or delivery is processed.</p>
        {filteredOrders.length === 0 && (
          <div className="rounded-3xl bg-white p-10 text-center">
            <h2 className="text-xl font-bold">{id ? "Order not found" : "No orders yet"}</h2>
            <Link to="/#products" className="mt-5 inline-block text-blue-700 underline">
              Explore our coffees
            </Link>
          </div>
        )}
        <div className="space-y-5">
          {filteredOrders.map((order) => (
            <article key={order.id} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex flex-wrap justify-between gap-3">
                <h2 className="text-xl font-bold">{order.id}</h2>
                <strong>{formatPrice(order.total)}</strong>
              </div>
              <p className="my-3 text-sm text-slate-500">
                {formatDate(order.createdAt)} · {order.status}
              </p>

              {id ? (
                <>
                  <ul className="divide-y">
                    {order.items.map((item) => (
                      <li key={`${item.id}-${item.size}`} className="flex justify-between gap-4 py-4">
                        <span>
                          {item.quantity} × {item.name}
                          <small className="block text-slate-500">
                            {item.size} · {formatPrice(item.price)} each
                          </small>
                        </span>
                        <strong>{formatPrice(item.quantity * item.price)}</strong>
                      </li>
                    ))}
                  </ul>

                  {order.customer && (
                    <div className="mt-4 space-y-2 rounded-xl bg-slate-50 p-4">
                      <h3 className="font-bold">Order information</h3>
                      <p>{order.customer.name}</p>
                      <p>{order.customer.email} · {order.customer.phone}</p>
                      <p className="break-words">{order.customer.address}</p>
                      <p>{order.customer.payment}</p>
                    </div>
                  )}

                  <Link to="/#products" className="mt-5 inline-block font-semibold text-blue-700">
                    Continue shopping →
                  </Link>
                </>
              ) : (
                <Link to={`/orders/${order.id}`} className="inline-block font-semibold text-blue-700">
                  View details →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Orders
