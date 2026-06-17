import { useState } from "react"
import Product from "../pages/Product"

const FormProduct = () => {

    const [dataProduct, setDataProduct] = useState({
        Product: " ",
        Price:"",
        Stock: "",
        Type: "",
        Status: "",
        Description: ""
    })
    

    const array = []

    const handleSubmit = (e) =>{
        array.push(dataProduct)

        e.preventDefault();
        console.log ("Apertou!")
        console.log(array)
    }   
    
    
return(
    <section
  className="
    bg-white
    rounded-2xl
    shadow-sm
    border
    border-slate-100
    p-5
    m-4">
    
  <div className="mb-6">
    <h2 className="text-2xl font-bold text-[#1D3557]">Add Product</h2>
    <p className="text-slate-500 text-sm mt-1">Register a new product in your menu</p>

  </div>

  <form onSubmit={handleSubmit} className="flex flex-col gap-4">

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">Product Name</label>

      <input
        type="text"
        value={dataProduct.Product}
        onChange={(e) => setDataProduct({...dataProduct, Product: e.target.value})}
        // placeholder="Ex: Cappuccino"
        className="
          w-full
          p-3
          rounded-xl
          border
          border-slate-200
          outline-none
          focus:border-[#0344DC]
        "/>
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">Price</label>
      <input
        type="number"
        // value={}
        // onChange={}
        placeholder="$0.00"
        className="
          w-full
          p-3
          rounded-xl
          border
          border-slate-200
          outline-none
          focus:border-[#0344DC]
        "/>
    </div>

    <div>

      <label className="block text-sm font-medium text-slate-700 mb-2">Units in Stock</label>
      <input
        type="number"
        placeholder="0"
        className="
          w-full
          p-3
          rounded-xl
          border
          border-slate-200
          outline-none
          focus:border-[#0344DC]
        "/>
    </div>

    <div>

      <label className="block text-sm font-medium text-slate-700 mb-2">Product Type</label>
      <select
        className="
          w-full
          p-3
          rounded-xl
          border
          border-slate-200
          bg-white
          outline-none
          focus:border-[#0344DC]
        ">

        <option>Hot Drink</option>
        <option>Cold Drink</option>
        <option>Special Drink</option>
      </select>
    </div>

    <div>

      <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
      <select
        className="
          w-full
          p-3
          rounded-xl
          border
          border-slate-200
          bg-white
          outline-none
          focus:border-[#0344DC]
        ">
        <option>Active</option>
        <option>Inactive</option>
      </select>
    </div>

    <div>

      <label className="block text-sm font-medium text-slate-700 mb-2">Product Image</label>
      
      <input
        type="file"
        className=" w-full p-3 rounded-xl border border-dashed border-slate-300 text-sm"/>

    </div>

    <div>

      <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
      <textarea
        rows="4"
        placeholder="Write a short description..."
        // value={}
        // onChange={}
        className="
          w-full
          p-3
          rounded-xl
          border
          border-slate-200
          resize-none
          outline-none
          focus:border-[#0344DC]
        "/>

    </div>

    <div className="flex gap-3 mt-2">

      {/* <button
        type="button"
        className="
          flex-1
          p-3
          rounded-xl
          border
          border-slate-200
          text-slate-600
          font-medium">
        Cancel
      </button> */}

      <button
        type="submit"
        className="
          flex-1
          p-3
          rounded-xl
          bg-[#0344DC]
          text-white
          font-medium
        ">
        Save Product
      </button>
    </div>
  </form>
</section>
)
}

export default FormProduct