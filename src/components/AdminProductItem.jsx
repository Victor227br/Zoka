
const AdminProductItem = () => {
  return (
    <div className="
        bg-white
        rounded-1xl
        shadow-sm
        p-4
        border
        border-slate-100">
        
    <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-3">
        <img className="h-10 rounded-xl" src="/src/assets/picture/cappuccino.jpg" alt=""/>
            <div>
                <h3 className="font-bold text-[#1D3557] text-[70%]">Cappucino</h3>
                <p className="text-[65%] text-slate-500">Price: $9.33</p>
            </div>
        </div>

        <div className="bg-[#E6FCE7] flex flex-row items-center justify-center gap-1 rounded-2xl w-[18%] h-5 ml-5 mr-4">
            <div className="bg-[#22C55E] w-2 h-2 rounded-full"></div>
            <h2 className="text-[#22C55E] text-[70%]">Ativo</h2>
        </div>

        <div className="flex items-center gap-2 ">
            <button className="bg-[#EEF4FF] rounded-lg w-8 h-8 flex items-center justify-center" >
                <img className="h-6" src="/src/assets/icon/icon_edit.png" alt=""/>
            </button>

            <button className="bg-[#FEEAEA] flex items-center justify-center w-8 h-8 rounded-lg">
                <img className="h-5" src="/src/assets/icon/icon_trash.png" alt=""/>
            </button>
        </div>
            
    </div>
</div>
  );
};


export default AdminProductItem;