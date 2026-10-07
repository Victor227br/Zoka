import { useContext, useState } from "react";
import {
  IoArrowBack,
  IoBagCheckOutline,
  IoBagHandleOutline,
  IoCardOutline,
  IoShieldCheckmarkOutline,
  IoTrashOutline,
} from "react-icons/io5";

import fallbackProductImage from "../assets/picture/coffee_package.png";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";
import { useBackNavigation } from "../hooks/useBackNavigation";

const formatPrice = (price) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

const Cart = () => {
  const goBack = useBackNavigation();
  const {
    cart,
    cartQuantity,
    cartSubtotal,
    buyProduct,
    removeItemCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext);
  const {purchaseProducts} = useContext(ProductsContext);
  const [purchaseMessage, setPurchaseMessage] = useState("");
  const [purchaseError, setPurchaseError] = useState(false);

  const handleCheckout = () => {
    const purchaseCompleted = buyProduct(purchaseProducts);

    if (purchaseCompleted) {
      setPurchaseMessage("Purchase completed successfully. Your cart is now empty.");
      setPurchaseError(false);
    } else {
      setPurchaseMessage("Some product no longer has enough stock. Review your cart and try again.");
      setPurchaseError(true);
    }
  };

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
            {cartQuantity} {cartQuantity === 1 ? "item" : "items"}
          </div>
        </header>

        <div className="mt-8 grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_400px] xl:gap-12">
          <section className="min-w-0" aria-labelledby="cart-items-title">
            <div className="mb-4 flex items-center justify-between gap-4 px-1">
              <div>
                <h2 id="cart-items-title" className="text-lg font-bold">
                  Your items
                </h2>
                <span className="text-sm font-medium text-slate-400">
                  {cart.length} {cart.length === 1 ? "product" : "products"}
                </span>
              </div>

              {cart.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-red-500"
                >
                  <IoTrashOutline />
                  Clear cart
                </button>
              )}
            </div>

            {cart.length > 0 ? (
              <div className="space-y-4">
                {cart.map((item) => {
                  const quantityForProduct = cart
                    .filter((cartItem) => cartItem.id === item.id)
                    .reduce((total, cartItem) => total + cartItem.quantity, 0);

                  return (
                    <CartItem
                      key={`${item.id}-${item.size}`}
                      image={item.image || fallbackProductImage}
                      name={item.name}
                      type={item.type}
                      size={item.size}
                      unitPrice={formatPrice(item.price)}
                      totalPrice={formatPrice(item.price * item.quantity)}
                      quantity={item.quantity}
                      canIncrease={quantityForProduct < Number(item.stock)}
                      canDecrease={item.quantity > 1}
                      onIncrease={() => increaseQuantity(item.id, item.size)}
                      onDecrease={() => decreaseQuantity(item.id, item.size)}
                      onRemove={() => removeItemCart(item.id, item.size)}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex min-h-72 flex-col items-center justify-center rounded-[26px] border border-dashed border-slate-300 bg-white px-6 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E9F0FF] text-3xl text-[#0344DC]">
                  <IoBagHandleOutline />
                </span>
                <h2 className="mt-5 text-2xl font-bold">Your cart is empty</h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Choose a coffee from our catalog and it will appear here.
                </p>
              </div>
            )}

            {cart.length > 0 && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-[#EDF3FF] p-4 text-sm text-[#1D3557] sm:items-center">
                <IoShieldCheckmarkOutline className="mt-0.5 shrink-0 text-xl text-[#0344DC] sm:mt-0" />
                <p>Your items are saved in this browser until you finish your order.</p>
              </div>
            )}
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
                <strong className="font-semibold text-white">
                  {formatPrice(cartSubtotal)}
                </strong>
              </div>
              <div className="flex justify-between gap-4 text-slate-300">
                <span>Delivery</span>
                <strong className="font-semibold text-emerald-300">Free</strong>
              </div>
              <div className="flex justify-between gap-4 text-slate-300">
                <span>Discount</span>
                <strong className="font-semibold text-white">
                  {formatPrice(0)}
                </strong>
              </div>
            </div>

            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-slate-300">Total</p>
                <p className="mt-1 text-xs text-slate-400">Taxes included</p>
              </div>
              <p className="text-3xl font-bold tracking-[-0.03em]">
                {formatPrice(cartSubtotal)}
              </p>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              disabled={cart.length === 0}
              className="mt-7 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#0344DC] px-6 font-bold text-white shadow-[0_14px_30px_rgba(3,68,220,0.3)] transition hover:-translate-y-0.5 hover:bg-[#1455E7] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-slate-400 disabled:shadow-none"
            >
              Complete purchase
              <span aria-hidden="true">→</span>
            </button>

            {purchaseMessage && (
              <p className={`mt-4 text-center text-sm leading-5 ${purchaseError ? "text-red-300" : "text-emerald-300"}`}>
                {purchaseMessage}
              </p>
            )}

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              This demonstration does not process a real payment.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Cart;
