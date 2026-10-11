import { useContext } from "react";
import {
  IoBagCheckOutline,
  IoCalendarOutline,
  IoReceiptOutline,
} from "react-icons/io5";
import { OrdersContext } from "../context/ordersContext";

const formatPrice = (price) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

const formatDate = (date) =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));

const AdminOrders = () => {
  const {orders} = useContext(OrdersContext);

  return (
    <section className="p-4">
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0344DC]">
            Sales history
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#1D3557]">Orders</h1>
          <p className="mt-2 text-slate-500">
            Purchases completed in this browser.
          </p>
        </div>

        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#E9F0FF] px-4 py-2 text-sm font-bold text-[#0344DC]">
          <IoBagCheckOutline className="text-lg" />
          {orders.length} {orders.length === 1 ? "order" : "orders"}
        </span>
      </header>

      {orders.length === 0 ? (
        <div className="mt-8 flex min-h-80 flex-col items-center justify-center rounded-[28px] border border-dashed border-slate-300 bg-white px-6 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E9F0FF] text-3xl text-[#0344DC]">
            <IoReceiptOutline />
          </span>
          <h2 className="mt-5 text-2xl font-bold text-[#1D3557]">No orders yet</h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            Complete a purchase in the cart and the order will appear here automatically.
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-5">
          {orders.map((order) => {
            const totalItems = order.items.reduce(
              (total, item) => total + item.quantity,
              0,
            );

            return (
              <article
                key={order.id}
                className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(29,53,87,0.06)]"
              >
                <header className="flex flex-col gap-4 border-b border-slate-100 bg-[#F8FAFD] p-5 sm:flex-row sm:items-center sm:justify-between lg:px-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-lg font-bold text-[#1D3557]">{order.id}</h2>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                        {order.status}
                      </span>
                    </div>
                    <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                      <IoCalendarOutline />
                      {formatDate(order.createdAt)}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-sm text-slate-400">
                      {totalItems} {totalItems === 1 ? "item" : "items"}
                    </p>
                    <p className="mt-1 text-2xl font-bold text-[#1D3557]">
                      {formatPrice(order.total)}
                    </p>
                  </div>
                </header>

                <div className="divide-y divide-slate-100 px-5 lg:px-6">
                  {order.items.map((item) => (
                    <div
                      key={`${order.id}-${item.id}-${item.size}`}
                      className="flex items-center gap-4 py-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-14 w-14 shrink-0 rounded-xl bg-[#EEF3FC] object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate font-bold text-[#1D3557]">{item.name}</h3>
                        <p className="mt-1 text-sm text-slate-400">
                          {item.size} · {item.quantity} × {formatPrice(item.price)}
                        </p>
                      </div>
                      <strong className="text-sm text-[#1D3557] sm:text-base">
                        {formatPrice(item.price * item.quantity)}
                      </strong>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default AdminOrders;
