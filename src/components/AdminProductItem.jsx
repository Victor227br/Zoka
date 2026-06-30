
const AdminProductItem = ({product}) => {

  const {Product, Price, Stock, Type, Status, Description} = product;

  return (
<div className=" bg-white rounded-xl shadow-sm p-4 border border-slate-100">
  <div className="flex items-center justify-between lg:mr-7 lg:ml-5">

    <div className="flex items-center gap-3">
      <img className="h-14 w-14 rounded-xl object-cover" src="/src/assets/picture/cappuccino.jpg" alt=""/>
      <div className="flex flex-col justify-center gap-1">
        <h3 className="font-bold text-[#1D3557] text-xs ">{Product}</h3>
        <p className="text-[#0344DC] text-xs font-medium">{Type}</p>
        <p className="text-xs text-slate-500">{Price}</p>
      </div>
    </div>

  <div className="flex flex-col ">
  <div className="flex flex-col items-center">
    <p className="text-[12px] text-slate-500"></p>
    <h3 className="font-bold text-slate-800">{Stock}</h3>
  </div>

  <div className="bg-[#E6FCE7] px-2 rounded-full flex items-center justify-center gap-1 ">
    <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
    <span className="text-[10px] font-medium text-[#22C55E]">{Status}</span>
  </div>
</div>

    <div className="flex items-center gap-2 lg:gap-4">
     <button className="w-9 h-9 rounded-lg bg-[#EEF4FF] flex items-center justify-center lg:w-10 lg:h-10">
        <img className="h-7" src="/src/assets/icon/icon_edit.png"alt=""/>
      </button>

      <button className="w-9 h-9 rounded-lg bg-[#FEEAEA] flex items-center justify-center lg:w-10 lg:h-10">
        <img className="h-6" src="/src/assets/icon/icon_trash.png" alt=""/>
      </button>
    </div>
  </div>
</div>

  );
};

export default AdminProductItem;