import { ProductsContext } from "../context/ProductsContext";
import { useProductsFilters } from "../hooks/useProductsFilters";
import { useContext } from "react";

const AdminProductItem = ({product, openForm}) => {
  const {id, img, name, price, stock, type, status, description} = product;
  const {removeProduct} = useContext(ProductsContext)

return (
 <div className="bg-white rounded-xl shadow-sm p-3 lg:p-4 border border-slate-100">
  <div className="relative flex items-center gap-2 lg:gap-0 lg:mr-7 lg:ml-5">
    <div className="flex items-center gap-3 flex-1 min-w-0">
      <img
        className="h-14 w-14 rounded-xl object-cover shrink-0"
        src={img}
        alt=""/>

      <div className="flex flex-col justify-center gap-1 min-w-0">
        <h3 className="font-bold text-[#1D3557] text-xs truncate">{name}</h3>
        <p className="text-[#0344DC] text-xs font-medium truncate">{type}</p>
        <p className="text-xs text-slate-500">${price}</p>
      </div>
    </div>

    <div
      className="
        flex flex-col items-center shrink-0
        w-[58px]
        lg:absolute
        lg:left-1/2
        lg:-translate-x-1/2
        lg:w-auto">
      <p className="text-[11px] lg:text-[12px] text-slate-500">Stock</p>
      <h3 className="font-bold text-slate-800 text-sm">{stock}</h3>

      <div className="bg-[#E6FCE7] px-2 rounded-full flex items-center justify-center gap-1">
        <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
        <span className="text-[10px] font-medium text-[#22C55E]">{status}</span>
      </div>
    </div>

    <div className="flex items-center gap-2 shrink-0">
      <button
        onClick={() => openForm(id)}
        className="
          w-9 h-9
          rounded-lg
          bg-[#EEF4FF]
          flex items-center justify-center
          lg:w-10 lg:h-10">

        <img
          className="h-7"
          src="/src/assets/icon/icon_edit.png"
          alt=""/>
      </button>

      <button
        onClick={() => removeProduct(id)}
        className="
          w-9 h-9
          rounded-lg
          bg-[#FEEAEA]
          flex items-center justify-center
          lg:w-10 lg:h-10">
        <img
          className="h-6"
          src="/src/assets/icon/icon_trash.png"
          alt=""/>
      </button>
    </div>
  </div>
</div>
  );
};

export default AdminProductItem;