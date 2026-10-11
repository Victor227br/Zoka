import { useContext } from "react";
import {
  IoBagCheckOutline,
  IoCafeOutline,
  IoCashOutline,
  IoReceiptOutline,
  IoTrendingUpOutline,
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
  }).format(new Date(date));

const AdminDashboard = () => {
  const {orders} = useContext(OrdersContext);

  const totalRevenue = orders.reduce((total, order) => total + order.total, 0);
  const totalItemsSold = orders.reduce(
    (total, order) =>
      total + order.items.reduce((orderTotal, item) => orderTotal + item.quantity, 0),
    0,
  );
  const averageOrder = orders.length > 0 ? totalRevenue / orders.length : 0;

  const productSales = orders.flatMap((order) => order.items).reduce((products, item) => {
      const productId = item.id.toString();
      const currentProduct = products[productId] || {
        id: productId,
        name: item.name,
        quantity: 0,
        revenue: 0,
      };

      products[productId] = {
        ...currentProduct,
        quantity: currentProduct.quantity + item.quantity,
        revenue: currentProduct.revenue + item.price * item.quantity,
      };

      return products;
    }, {});

  const topProducts = Object.values(productSales).sort((firstProduct, secondProduct) => secondProduct.quantity - firstProduct.quantity).slice(0, 5);
  const highestQuantity = topProducts[0]?.quantity || 1;

  const metrics = [
    {
      label: "Revenue",
      value: formatPrice(totalRevenue),
      detail: "Completed orders",
      icon: IoCashOutline,
    },
    {
      label: "Orders",
      value: orders.length,
      detail: "Stored locally",
      icon: IoReceiptOutline,
    },
    {
      label: "Items sold",
      value: totalItemsSold,
      detail: "All product units",
      icon: IoCafeOutline,
    },
    {
      label: "Average order",
      value: formatPrice(averageOrder),
      detail: "Revenue per order",
      icon: IoTrendingUpOutline,
    },
  ];

  return (
    <section className="p-4">
      <header>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0344DC]">
          Store performance
        </p>
        <h1 className="mt-2 text-3xl font-bold text-[#1D3557]">Dashboard</h1>
        <p className="mt-2 text-slate-500">
          Overview based on purchases saved in this browser.
        </p>
      </header>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <article
              key={metric.label}
              className="rounded-[24px] border border-slate-100 bg-white p-5 shadow-[0_10px_30px_rgba(29,53,87,0.05)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9F0FF] text-xl text-[#0344DC]">
                <Icon />
              </div>
              <p className="mt-5 text-sm font-medium text-slate-400">{metric.label}</p>
              <p className="mt-1 text-2xl font-bold text-[#1D3557]">{metric.value}</p>
              <p className="mt-2 text-xs text-slate-400">{metric.detail}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-[26px] border border-slate-100 bg-white p-5 shadow-[0_10px_30px_rgba(29,53,87,0.05)] sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0344DC]">
                Product ranking
              </p>
              <h2 className="mt-1 text-xl font-bold text-[#1D3557]">Best sellers</h2>
            </div>
            <IoBagCheckOutline className="text-2xl text-[#0344DC]" />
          </div>

          {topProducts.length === 0 ? (
            <p className="mt-10 text-center text-sm text-slate-400">
              Product performance will appear after the first order.
            </p>
          ) : (
            <div className="mt-6 space-y-5">
              {topProducts.map((product, index) => (
                <div key={product.id}>
                  <div className="flex items-end justify-between gap-4">
                    <div className="min-w-0">
                      <p className="truncate font-bold text-[#1D3557]">{index + 1}. {product.name}</p>
                      <p className="mt-1 text-xs text-slate-400">{formatPrice(product.revenue)} in revenue</p>
                    </div>
                    <strong className="text-sm text-[#0344DC]">
                      {product.quantity} sold
                    </strong>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#EEF3FC]">
                    <div
                      className="h-full rounded-full bg-[#0344DC]"
                      style={{width: `${(product.quantity / highestQuantity) * 100}%`}}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </article>

        <article className="rounded-[26px] border border-slate-100 bg-white p-5 shadow-[0_10px_30px_rgba(29,53,87,0.05)] sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0344DC]">Latest activity</p>
          <h2 className="mt-1 text-xl font-bold text-[#1D3557]">Recent orders</h2>

          {orders.length === 0 ? (
            <p className="mt-10 text-center text-sm text-slate-400">Recent orders will appear here.</p>
          ) : (
            <div className="mt-5 divide-y divide-slate-100">
              {orders.slice(0, 5).map((order) => (
                <div key={order.id} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="font-bold text-[#1D3557]">{order.id}</p>
                    <p className="mt-1 text-xs text-slate-400">{formatDate(order.createdAt)}</p>
                  </div>
                  <strong className="text-sm text-[#1D3557]">
                    {formatPrice(order.total)}
                  </strong>
                </div>
              ))}
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default AdminDashboard;
