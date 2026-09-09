import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import   Header   from "../components/Header";
import { ProductsContext } from "../context/ProductsContext";

export const Product = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("120ml");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [id]);

  const product = products.find(
    (product) => product.id.toString() === id
  );

  const sizes = ["120ml", "180ml", "240ml"];

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-[#1D3557]">
            Product not found
          </h1>

          <p className="mt-2 text-[#5F6368]">
            The product you are looking for does not exist.
          </p>
        </section>
      </main>
    );
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  let finalPrice = product.price * quantity;

  if (selectedSize === "180ml") {
    finalPrice *= 1.2;
  }

  if (selectedSize === "240ml") {
    finalPrice *= 1.45;
  }

  return (
  <main className="min-h-screen bg-white">
          <Header/>
  <div
  className="
    flex
    min-h-screen
    w-full
    flex-col
    justify-start
    px-0
    py-8
    sm:py-10
    lg:mx-auto
    lg:max-w-7xl
    lg:flex-row
    lg:items-center
    lg:justify-center
    lg:gap-20
    lg:px-8
    lg:py-16
    xl:max-w-[1500px]
    xl:gap-28
    xl:px-12">
        
      <figure
        className="
          flex
          shrink-0
          justify-center
          h-full
          lg:w-[52%]
          lg:max-w-[700px]">
        <img
          src={product.img}
          alt={product.name}
          className="
            h-auto
            w-full
            object-cover
            lg:max-h-[620px]
            lg:object-contain"/>
      </figure>

      <section
        className="
          w-full
          px-5
          pt-8
          sm:px-10
          sm:pt-10
          lg:w-[48%]
          lg:max-w-[620px]
          lg:px-0
          lg:pt-0">

        <header>
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#0344DC]
              sm:text-sm">
            {product.type}
          </p>

          <h1
            className="
              mt-2
              text-3xl
              font-bold
              leading-tight
              text-[#1D3557]
              sm:text-5xl
              lg:text-6xl
              lg:leading-[1.05]">
            {product.name}
          </h1>

          <p
            className="
              mt-4
              max-w-[580px]
              text-[15px]
              leading-6
              text-[#5F6368]
              sm:text-lg
              sm:leading-relaxed">
            {product.description}
          </p>
        </header>

        <div className="mt-6 flex flex-wrap gap-2">
          <span
            className="
              rounded-full
              bg-[#E1E9F9]
              px-4
              py-2
              text-xs
              font-semibold
              text-[#1D3557]
              sm:text-sm">
            Cold Coffee
          </span>

          <span
            className="
              rounded-full
              bg-[#E1E9F9]
              px-4
              py-2
              text-xs
              font-semibold
              text-[#1D3557]
              sm:text-sm">
            Brazilian
          </span>
        </div>

        <div className="my-7 h-px w-full bg-slate-200 sm:my-8" />

        <section aria-labelledby="size-title">
          <div className="flex items-center justify-between">
            <h2
              id="size-title"
              className="text-lg font-bold text-[#1D3557]">
              Size
            </h2>

            <span className="text-sm font-medium text-[#5F6368]">
              {selectedSize}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 sm:max-w-[430px] sm:gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`
                  h-12
                  rounded-xl
                  text-sm
                  font-semibold
                  transition

                  ${
                    selectedSize === size
                      ? "bg-[#0344DC] text-white"
                      : "bg-[#E1E9F9] text-[#1D3557] hover:opacity-80"
                  }`}>
                {size}
              </button>
            ))}
          </div>
        </section>

        <div className="mt-7 sm:mt-8">
          <p className="text-sm text-[#5F6368]">Price</p>

          <p className="mt-1 text-3xl font-bold text-[#1D3557] sm:text-4xl">
            R$ {finalPrice.toFixed(2)}
          </p>
        </div>

        <div className="mt-6 sm:mt-8">
          <p className="mb-2 text-sm text-[#5F6368]">Quantity</p>

          <div
            className="
              flex
              h-12
              w-36
              items-center
              justify-between
              rounded-xl
              bg-[#E1E9F9]
              px-4
              font-semibold
              text-[#1D3557]">

            <button
              type="button"
              onClick={decreaseQuantity}
              className="px-2 text-lg"
              aria-label="Decrease quantity">
              −
            </button>

            <span>{quantity}</span>

            <button
              type="button"
              onClick={increaseQuantity}
              className="px-2 text-lg"
              aria-label="Increase quantity">
              +
            </button>
          </div>
        </div>

        <div
          className="
            mt-7
            flex
            w-full
            flex-col
            gap-2
            sm:mt-8
            sm:flex-row
            sm:gap-3">

          <button
            type="button"
            className="
              h-12
              w-full
              rounded-xl
              border-2
              border-[#0344DC]
              font-semibold
              text-[#0344DC]
              transition
              hover:bg-[#0344DC]
              hover:text-white">
            Add to Cart
          </button>

          <button
            type="button"
            className="
              h-12
              w-full
              rounded-xl
              bg-[#0344DC]
              font-semibold
              text-white
              transition
              hover:bg-[#0235ad]">
            Buy Now
          </button>
        </div>
      </section>
    </div>
  </main>
);

};

export default Product;