import { useFormProduct } from "../hooks/useFormProduct"
import { ProductsContext } from "../context/productsContext"
import { useContext } from "react"
import coffeePackageImage from "../assets/picture/coffee_package.png"

const FormProduct = () => {
  const {formData, textValueButton, validForm, nameError, setFormData, handleSubmit} = useFormProduct()
  const {closeForm, editingProduct} = useContext(ProductsContext)

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

  <div className="flex items-center justify-between mb-6">
   <div>
    <h2 className="text-2xl font-bold text-[#1D3557]">{editingProduct ? "Edit Product" : "Add Product"}</h2>
    <p className="text-slate-500 text-sm mt-1">{editingProduct ? "Update your product details" : "Register a new product in your menu"}</p>
  </div>
  <button
    onClick={closeForm}
    aria-label="Close product form"
    type="button"
    className="
      w-10
      h-10
      flex
      items-center
      justify-center
      rounded-full
      text-slate-500
      text-xl
      hover:bg-slate-100
      hover:text-red-500
      transition">
    ✕
  </button>
</div>

  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <div>
      <label htmlFor="form-product-name" className="block text-sm font-medium text-slate-700 mb-2">Product Name</label>
      <input
        type="text"
        name="nameProduct"
        id="form-product-name"
        aria-invalid={!!nameError}
        aria-describedby={nameError ? "product-name-error" : undefined}
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        className="
          w-full
          p-3
          rounded-xl
          border
          border-slate-200
          outline-none
          focus:border-[#0344DC]"/>
      {nameError && (
        <p id="product-name-error" role="alert" className="mt-2 text-sm text-red-600">
          {nameError}
        </p>
      )}
    </div>

    <div>
      <label htmlFor="product-price" className="block text-sm font-medium text-slate-700 mb-2">Price (BRL):</label>
      <input
        type="number"
        id="product-price"
        min="0.01"
        step="0.01"
        max="999.99"
        value={formData.price}
        onChange={(e) => setFormData({...formData, price: e.target.value})}
        placeholder="0.00"
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
      <label htmlFor="form-product-stock" className="block text-sm font-medium text-slate-700 mb-2">Units in Stock</label>
      <input
        min="0" 
        id="form-product-stock"
        value={formData.stock}
        onChange={(e) => setFormData({...formData, stock: e.target.value})}
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
      <label htmlFor="form-product-type" className="block text-sm font-medium text-slate-700 mb-2">Product Type</label>
      <select
      id="form-product-type"
        value={formData.type}
      onChange={(e) => {
        const selectedType = e.target.value
        setFormData({
          ...formData,
          type: selectedType,
          img: selectedType === "Package" ? "" : formData.img,
        })
      }}
        className="
          w-full
          p-3
          rounded-xl
          border
          border-slate-200
          bg-white
          outline-none
          focus:border-[#0344DC]">

        <option value={"Hot Drink"}>Hot Drink</option>
        <option value={"Cold Drink"}>Cold Drink</option>
        <option value={"Special Drink"}>Special Drink</option>
        <option value={"Package"}>Package</option>
      </select>
    </div>

    <div>
      <label htmlFor="form-product-status" className="block text-sm font-medium text-slate-700 mb-2">Status</label>
      <select
        id="form-product-status"
        value={formData.status.toLowerCase()}
        onChange={(e) => setFormData({...formData, status: e.target.value})}
        className="
          w-full
          p-3
          rounded-xl
          border
          border-slate-200
          bg-white
          outline-none
          focus:border-[#0344DC]">
        <option value={"active"}>Active</option>
        <option value={"inactive"}>Inactive</option>
      </select>
    </div>

    <div>
      <p className="block text-sm font-medium text-slate-700 mb-2">Product Image</p>
      {formData.type === "Package" ? (
        <div className="flex items-center gap-4 rounded-xl border border-blue-100 bg-[#F4F7FC] p-3">
          <img
            src={coffeePackageImage}
            alt="Default Zoka coffee package"
            className="h-20 w-20 rounded-lg object-cover"
          />
          <div>
            <p className="font-semibold text-[#1D3557]">Zoka package image</p>
            <p className="mt-1 text-sm leading-5 text-slate-500">
              Package products automatically use the official coffee package image.
            </p>
          </div>
        </div>
      ) : (
        <input
          type="url"
          aria-label="Product image URL"
          placeholder="https://exemplo.com"
          value={formData.img}
          onChange={(e) => setFormData({...formData, img: e.target.value})}
          className="
            w-full
            p-3
            rounded-xl
            border
            border-slate-200
            resize-none
            outline-none
            focus:border-[#0344DC]"/>
      )}
    </div>

    <div>
      <label htmlFor="form-product-description" className="block text-sm font-medium text-slate-700 mb-2">Description</label>
      <textarea
        rows="4"
        placeholder="Write a short description..."
        id="form-product-description"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
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
      disabled={validForm || !!nameError}
        type="submit"
        className="
          flex-1
          p-3
          rounded-xl
          bg-[#0344DC]
          text-white
          font-medium
          disabled:bg-slate-400
          disabled:text-slate-200
          disabled:cursor-not-allowed
          disabled:opacity-70">
        {textValueButton}
      </button>

    </div>
    {validForm && <p className="text-sm text-slate-500">Enter a name, description, image URL for drinks, price greater than zero, and a whole stock quantity of zero or more to save.</p>}
  </form>
</section>
)
}

export default FormProduct
