import Product from "../pages/Product"
import UseProductForm from "./UseProductForm"

const FormProduct = ({addProduct}) => {
  
  const {formData, setFormData ,handleSubmit} = UseProductForm(addProduct)

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
        name="nameProduct"
        value={formData.Product}
        onChange={(e) => setFormData({...formData, Product: e.target.value})}
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
        min="0" 
        value={formData.Price}
        onChange={(e) => setFormData({...formData, Price: e.target.value})}
        placeholder="$0.00"
        className="
          w-full
          p-3
          rounded-xl
          border
          border-slate-200
          outline-none
          focus:border-[#0344DC]"/>
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">Units in Stock</label>
      <input
        min="0" 
        value={formData.Stock}
        onChange={(e) => setFormData({...formData, Stock: e.target.value})}
        type="number"
        placeholder="0"
        className="
          w-full
          p-3
          rounded-xl
          border
          border-slate-200
          outline-none
          focus:border-[#0344DC]"/>
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">Product Type</label>
      <select
      value={formData.Type}
      onChange={(e) => setFormData({...formData, Type: e.target.value})}
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

        <option value={"Hot Drink"}>Hot Drink</option>
        <option value={"Cold Drink"}>Cold Drink</option>
        <option value={"Special Drink"}>Special Drink</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
      <select
        value={formData.Status}
        onChange={(e) => setFormData({...formData, Status: e.target.value})}
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
        value={formData.Description}
        onChange={(e) => setFormData({...formData, Description: e.target.value})}
        className="
          w-full
          p-3
          rounded-xl
          border
          border-slate-200
          resize-none
          outline-none
          focus:border-[#0344DC]"/>
    </div>

    <div className="flex gap-3 mt-2">
      <button
        type="submit"
        className="
          flex-1
          p-3
          rounded-xl
          bg-[#0344DC]
          text-white
          font-medium">
        Save Product
      </button>

    </div>
  </form>
</section>
)
}

export default FormProduct