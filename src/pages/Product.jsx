import { useContext, useEffect, useState } from "react";
import {
  IoArrowBack,
  IoBagHandleOutline,
  IoCheckmarkCircle,
  IoCubeOutline,
  IoFlashOutline,
} from "react-icons/io5";
import { useParams } from "react-router-dom";

import fallbackProductImage from "../assets/picture/coffee_package.png";
import Header from "../components/Header";
import { ProductsContext } from "../context/ProductsContext";
import { useBackNavigation } from "../hooks/useBackNavigation";

const sizes = [
  { label: "Small", value: "120ml" },
  { label: "Medium", value: "180ml" },
  { label: "Large", value: "240ml" },
];

const sizeMultiplier = {
  "120ml": 1,
  "180ml": 1.2,
  "240ml": 1.45,
};

const formatPrice = (price) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

export const Product = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const goBack = useBackNavigation();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("120ml");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#F4F7FC]">
        <Header />
        <section className="mx-auto flex min-h-[calc(100vh-9vh)] max-w-xl flex-col items-center justify-center px-6 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0344DC]">
            Zoka Coffee
          </span>
          <h1 className="mt-3 text-4xl font-bold text-[#1D3557]">
            Product not found
          </h1>
          <p className="mt-3 leading-7 text-slate-500">
            This product is no longer available or the address is incorrect.
          </p>
          <button
            type="button"
            onClick={goBack}
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#0344DC] px-6 font-semibold text-white transition hover:bg-[#0238B8]"
          >
            <IoArrowBack />
            Go back
          </button>
        </section>
      </main>
    );
  }

  const isAvailable =
    product.status?.toLowerCase() === "active" && Number(product.stock) > 0;
  const finalPrice =
    Number(product.price) * quantity * sizeMultiplier[selectedSize];

  const increaseQuantity = () => {
    setQuantity((currentQuantity) =>
      Math.min(currentQuantity + 1, Number(product.stock)),
    );
  };

  const decreaseQuantity = () => {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));
  };

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackProductImage;
  };

  return (
    <main className="min-h-screen bg-[#F4F7FC] text-[#1D3557]">
      <Header />

      <article className="min-h-[calc(100vh-9vh)] bg-white lg:grid lg:grid-cols-2">
          <section className="relative flex min-h-[440px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#E7EEFC] via-[#F4F7FD] to-white p-6 sm:min-h-[580px] sm:p-12 lg:min-h-[calc(100vh-9vh)] lg:p-16">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border-[48px] border-white/50" />
            <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full border-[54px] border-[#DCE7FA]/70" />

            <figure className="relative z-[1] aspect-square w-full max-w-[600px] overflow-hidden rounded-[30px] bg-white shadow-[0_28px_70px_rgba(29,53,87,0.16)] sm:rounded-[40px]">
              <img
                src={product.img || fallbackProductImage}
                alt={product.name}
                onError={handleImageError}
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </figure>

          </section>

          <section className="flex flex-col bg-white px-6 py-8 sm:px-12 sm:py-12 lg:min-h-[calc(100vh-9vh)] lg:px-[8%] lg:py-10 xl:px-[11%]">
            <button
              type="button"
              onClick={goBack}
              className="group mb-10 inline-flex w-fit items-center gap-3 text-sm font-semibold text-slate-500 transition hover:text-[#0344DC] lg:mb-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-[#1D3557] transition group-hover:border-[#0344DC] group-hover:bg-[#E9F0FF] group-hover:text-[#0344DC]">
                <IoArrowBack />
              </span>
              Go back
            </button>

            <div className="mx-auto flex w-full max-w-[620px] flex-1 flex-col justify-center">
              <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full bg-[#E9F0FF] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0344DC]">
                  {product.type}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-500">
                  <IoCubeOutline className="text-base text-[#0344DC]" />
                  <strong className="text-[#1D3557]">{product.stock}</strong>
                  units in stock
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#1D3557] sm:text-5xl xl:text-6xl">
                {product.name}
              </h1>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-500 sm:text-base sm:leading-8">
                {product.description}
              </p>
            </div>

            <div className="my-7 h-px bg-slate-100 sm:my-9" />

            <section aria-labelledby="size-title">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0344DC]">
                    Choose yours
                  </p>
                  <h2 id="size-title" className="mt-1 text-lg font-bold">
                    Cup size
                  </h2>
                </div>
                <span className="text-sm font-semibold text-slate-400">
                  {selectedSize}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                {sizes.map((size) => {
                  const isSelected = selectedSize === size.value;

                  return (
                    <button
                      key={size.value}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedSize(size.value)}
                      className={`rounded-2xl border px-2 py-3.5 text-left transition sm:px-4 ${
                        isSelected
                          ? "border-[#0344DC] bg-[#0344DC] text-white shadow-[0_10px_25px_rgba(3,68,220,0.22)]"
                          : "border-slate-200 bg-white text-[#1D3557] hover:border-[#0344DC]/40 hover:bg-[#F7F9FD]"
                      }`}
                    >
                      <span className="block text-xs font-bold sm:text-sm">
                        {size.label}
                      </span>
                      <span
                        className={`mt-0.5 block text-[10px] sm:text-xs ${
                          isSelected ? "text-blue-100" : "text-slate-400"
                        }`}
                      >
                        {size.value}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            <div className="mt-7 flex items-end justify-between gap-5 rounded-2xl bg-[#F7F9FD] p-4 sm:mt-8 sm:p-5">
              <div>
                <p className="text-xs font-medium text-slate-400">Total price</p>
                <p className="mt-1 text-2xl font-bold tracking-[-0.02em] text-[#1D3557] sm:text-3xl">
                  {formatPrice(finalPrice)}
                </p>
              </div>

              <div>
                <p className="mb-2 text-right text-xs font-medium text-slate-400">
                  Quantity
                </p>
                <div className="flex h-11 items-center rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-lg font-medium transition hover:bg-[#E9F0FF] disabled:cursor-not-allowed disabled:text-slate-300"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-9 text-center text-sm font-bold">{quantity}</span>
                  <button
                    type="button"
                    onClick={increaseQuantity}
                    disabled={quantity >= Number(product.stock)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-lg font-medium transition hover:bg-[#E9F0FF] disabled:cursor-not-allowed disabled:text-slate-300"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-[1.35fr_1fr]">
              <button
                type="button"
                disabled={!isAvailable}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#0344DC] px-5 font-bold text-white shadow-[0_14px_30px_rgba(3,68,220,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0238B8] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
              >
                <IoBagHandleOutline className="text-xl" />
                Add to cart
              </button>

              <button
                type="button"
                disabled={!isAvailable}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-[#0344DC] px-5 font-bold text-[#0344DC] transition hover:bg-[#E9F0FF] disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-300"
              >
                <IoFlashOutline className="text-xl" />
                Buy now
              </button>
            </div>

              <p className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-slate-400 sm:justify-start sm:text-sm">
                <IoCheckmarkCircle className="shrink-0 text-lg text-emerald-500" />
                Freshly prepared with carefully selected coffee beans.
              </p>
            </div>
          </section>
      </article>
    </main>
  );
};

export default Product;
