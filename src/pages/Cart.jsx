import {
  IoArrowBack,
  IoBagCheckOutline,
  IoCardOutline,
  IoShieldCheckmarkOutline,
  IoTicketOutline,
} from "react-icons/io5";

import cappuccinoImage from "../assets/picture/cappuccino.jpg";
import coffeePackageImage from "../assets/picture/coffee_package-carousel.png";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import { useBackNavigation } from "../hooks/useBackNavigation";

// Temporary visual data. Replace it with the cart state when its logic is ready.
const previewCartItems = [
  {
    id: "preview-cappuccino",
    image: cappuccinoImage,
    name: "Cappuccino",
    type: "Hot Drink",
    size: "180ml",
    unitPrice: "R$ 14,90",
    totalPrice: "R$ 29,80",
    quantity: 2,
  },
  {
    id: "preview-coffee-package",
    image: coffeePackageImage,
    name: "Zoka Coffee Beans",
    type: "Package",
    size: "500g",
    unitPrice: "R$ 32,90",
    totalPrice: "R$ 32,90",
    quantity: 1,
  },
];

const Cart = () => {
  const goBack = useBackNavigation();

  return (
    <main className="min-h-screen bg-[#F4F7FC] text-[#1D3557]">
      <Header />

      <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
        <button
          type="button"
          onClick={goBack}
          className="group inline-flex items-center gap-3 text-sm font-semibold text-slate-500 transition hover:text-[#0344DC]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-[#1D3557] transition group-hover:border-[#0344DC] group-hover:bg-[#E9F0FF] group-hover:text-[#0344DC]">
            <IoArrowBack />
          </span>
          Continue shopping
        </button>

        <header className="mt-8 flex flex-col justify-between gap-4 sm:mt-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0344DC]">
              Your order
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
              Shopping cart
            </h1>
            <p className="mt-3 max-w-xl leading-7 text-slate-500">
              Review your coffees and adjust the quantities before checkout.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#E9F0FF] px-4 py-2 text-sm font-bold text-[#0344DC]">
            <IoBagCheckOutline className="text-lg" />
            3 items
          </div>
        </header>

        <div className="mt-8 grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_400px] xl:gap-12">
          <section className="min-w-0" aria-labelledby="cart-items-title">
            <div className="mb-4 flex items-center justify-between px-1">
              <h2 id="cart-items-title" className="text-lg font-bold">
                Your items
              </h2>
              <span className="text-sm font-medium text-slate-400">
                2 products
              </span>
            </div>

            <div className="space-y-4">
              {previewCartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-[#EDF3FF] p-4 text-sm text-[#1D3557] sm:items-center">
              <IoShieldCheckmarkOutline className="mt-0.5 shrink-0 text-xl text-[#0344DC] sm:mt-0" />
              <p>
                Your items are reserved while you finish your order.
              </p>
            </div>
          </section>

          <aside className="min-w-0 rounded-[28px] bg-[#1D3557] p-6 text-white shadow-[0_24px_55px_rgba(29,53,87,0.18)] sm:p-8 lg:sticky lg:top-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                  Summary
                </p>
                <h2 className="mt-1 text-2xl font-bold">Order total</h2>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl text-blue-200">
                <IoCardOutline />
              </span>
            </div>

            <div className="mt-7 space-y-4 border-y border-white/10 py-6 text-sm">
              <div className="flex justify-between gap-4 text-slate-300">
                <span>Subtotal</span>
                <strong className="font-semibold text-white">R$ 62,70</strong>
              </div>
              <div className="flex justify-between gap-4 text-slate-300">
                <span>Delivery</span>
                <strong className="font-semibold text-emerald-300">Free</strong>
              </div>
              <div className="flex justify-between gap-4 text-slate-300">
                <span>Discount</span>
                <strong className="font-semibold text-white">R$ 0,00</strong>
              </div>
            </div>

            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-slate-300">Total</p>
                <p className="mt-1 text-xs text-slate-400">Taxes included</p>
              </div>
              <p className="text-3xl font-bold tracking-[-0.03em]">R$ 62,70</p>
            </div>

            <div className="mt-7">
              <label
                htmlFor="coupon"
                className="mb-2 block text-xs font-semibold text-slate-300"
              >
                Discount code
              </label>
              <div className="flex rounded-2xl bg-white/10 p-1.5 ring-1 ring-white/10 focus-within:ring-blue-300">
                <div className="flex flex-1 items-center gap-2 px-3">
                  <IoTicketOutline className="shrink-0 text-lg text-blue-200" />
                  <input
                    id="coupon"
                    type="text"
                    placeholder="Enter your code"
                    className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-slate-400"
                  />
                </div>
                <button
                  type="button"
                  className="rounded-xl bg-white px-4 text-sm font-bold text-[#1D3557] transition hover:bg-blue-50"
                >
                  Apply
                </button>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#0344DC] px-6 font-bold text-white shadow-[0_14px_30px_rgba(3,68,220,0.3)] transition hover:-translate-y-0.5 hover:bg-[#1455E7]"
            >
              Proceed to checkout
              <span aria-hidden="true">→</span>
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              Secure checkout. No payment will be processed yet.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Cart;
