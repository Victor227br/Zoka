import { IoAdd, IoRemove, IoTrashOutline } from "react-icons/io5";

const CartItem = ({
  image,
  name,
  type,
  size,
  unitPrice,
  totalPrice,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <article className="group min-w-0 rounded-[26px] border border-slate-100 bg-white p-4 shadow-[0_12px_35px_rgba(29,53,87,0.06)] transition hover:border-blue-100 hover:shadow-[0_18px_45px_rgba(29,53,87,0.09)] sm:p-5">
      <div className="flex min-w-0 gap-3 sm:gap-5">
        <figure className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#EEF3FC] sm:h-36 sm:w-36 sm:rounded-[22px]">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </figure>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0344DC] sm:text-xs">
                {type}
              </p>
              <h2 className="mt-1 truncate text-lg font-bold text-[#1D3557] sm:text-2xl">
                {name}
              </h2>
              <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                Size: {size}
              </p>
            </div>

            <button
              type="button"
              onClick={onRemove}
              aria-label={`Remove ${name} from cart`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
            >
              <IoTrashOutline />
            </button>
          </div>

          <div className="mt-auto flex items-end justify-between gap-3 pt-4">
            <div>
              <p className="text-[10px] font-medium text-slate-400 sm:text-xs">
                {unitPrice} each
              </p>
              <p className="mt-0.5 text-base font-bold text-[#1D3557] sm:text-xl">
                {totalPrice}
              </p>
            </div>

            <div className="flex h-10 items-center rounded-xl border border-slate-200 bg-[#F8FAFD] p-1 sm:h-11">
              <button
                type="button"
                onClick={onDecrease}
                aria-label={`Decrease ${name} quantity`}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-[#1D3557] transition hover:bg-white hover:text-[#0344DC] hover:shadow-sm sm:h-9 sm:w-9"
              >
                <IoRemove />
              </button>

              <span className="w-8 text-center text-sm font-bold text-[#1D3557] sm:w-10">
                {quantity}
              </span>

              <button
                type="button"
                onClick={onIncrease}
                aria-label={`Increase ${name} quantity`}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0344DC] text-sm text-white shadow-sm transition hover:bg-[#0238B8] sm:h-9 sm:w-9"
              >
                <IoAdd />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
