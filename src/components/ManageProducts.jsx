import { useEffect, useState } from "react"
import AdminProductItem from "./AdminProductItem"
import FormProduct from "./FormProduct"
import Product from "../pages/Product"
import { getItem, setItem } from "../services/ProductService";

const ManageProducts = () =>{

  const [products, setProducts] = useState(() => {
  return getItem()
  });

  const [formOpen, setFormOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState()

  const addProduct = (product) => {
    setProducts([...products, product])
    setFormOpen(false)
  }
  
  useEffect(() =>{
    setItem(products)
  },[products])

  const getProductEdit = (id) => {
    setFormOpen(true);
    const productEdit = products.find(product => product.id === id);
      setEditingProduct(productEdit);
}

  const editProduct = (productUpdate) => {
    const UpdateProducts = products.map((product) => {
      if(product.id === productUpdate.id){
        return productUpdate
      }
        return product
    })
    setProducts(UpdateProducts);
    setFormOpen(false);
  } 

  const deleteProduct = (id) => {
    const productDelete = products.filter(product => product.id !== id) 
      setProducts(productDelete)
  }

  return(
      <>
  <section className="sm:flex flex-col justify-center lg:flex-row justify-between lg: m-4">
    <div>
      <h1 className="text-3xl mb-2 font-bold sm: text-center lg:text-left">Products</h1>
      <p className="text-slate-500 sm: text-xl sm: text-center lg: text-left lg: text-2xl">Manage your store's products</p>
    </div>
 
    <button
    onClick={() => setFormOpen(true)} 
    className="
    bg-[#0344DC] 
    flex 
    items-center
    justify-center 
    text-[120%] 
    text-white 
    sm: w-full 
    h-[6vh] 
    rounded-xl 
    mt-5
    mb-2
    lg:w-[18%]">
    Add Product
    </button>

    {
    formOpen &&(
      <div
      className="
        fixed
        inset-0
        z-50
        bg-black/40
        flex
        justify-center
        p-4
        overflow-y-auto">

      <div
        className="
          w-full
          max-w-4xl
          my-8">
        <FormProduct editingProduct={editingProduct} editProduct={editProduct}  setFormOpen={setFormOpen} addProduct={addProduct} />
      </div>
    </div>
      )
    }
</section>

<section className="grid grid-cols-2 gap-4 m-4 lg:grid-cols-4">

  <div 
  className="
  bg-white 
  rounded-2xl 
  shadow-md 
  p-4 
  flex 
  items-center 
  gap-4 
  flex-col 
  justify-center 
  lg:flex-row 
  justify-around">

    <div 
    className="
    flex 
    items-center 
    justify-center 
    w-16 
    h-16 
    lg:w-20 
    lg:h-20 
    bg-[#E1E9F9] 
    rounded-full shrink-0">
      
      <img src="/src/assets/icon/icon_box.png" alt="" />
    </div>
    <div className="flex flex-col items-center">
      <p className="text-gray-500 text-sm">Total Products</p>
      <h3 className="text-2xl font-bold text-slate-800">21</h3>
      <p className="text-[#0344DC] text-sm">Active</p>
    </div>
  </div>

  <div 
  className="
  bg-white 
  rounded-2xl 
  shadow-md 
  p-4 
  flex 
  items-center 
  gap-4 
  flex-col 
  justify-center 
  lg:flex-row 
  justify-around">

    <div 
    className="
      flex
      items-center
      justify-center 
      w-16 
      h-16 
      lg:w-20 
      lg:h-20 
      bg-[#E1E9F9] 
      rounded-full 
      shrink-0">
      <h2 className="text-[#0344DC] text-[24px]">$</h2>
    </div>

    <div className="flex flex-col items-center">
      <p className="text-gray-500 text-sm">Total Stock</p>
      <h3 className="text-2xl font-bold text-slate-800">487</h3>
      <p className="text-[#0344DC] text-sm">Units</p>
    </div>
  </div>

  <div 
  className="
  bg-white 
  rounded-2xl 
  shadow-md 
  p-4 
  flex 
  items-center 
  gap-4 
  flex-col 
  justify-center 
  lg:flex-row 
  justify-around">

    <div
    className="
    flex 
    items-center 
    justify-center 
    w-16 
    h-16 
    lg:w-20 
    lg:h-20 
    bg-[#E1E9F9] 
    rounded-full 
    shrink-0">

      <img src="/src/assets/icon/icon_discount.png" alt="" />
    </div>

    <div className="flex flex-col items-center">
      <p className="text-gray-500 text-sm">Categories</p>
      <h3 className="text-2xl font-bold text-slate-800">6</h3>
      <p className="text-[#0344DC] text-sm">Registered</p>
    </div>
  </div>

  <div 
  className="
  bg-white 
  rounded-2xl 
  shadow-md 
  p-4 
  flex 
  items-center 
  gap-4 
  flex-col 
  justify-center 
  lg:flex-row 
  justify-around">

    <div 
    className="
    flex 
    items-center 
    justify-center 
    w-16 
    h-16 
    lg:w-20 
    lg:h-20 
    bg-[#E1E9F9] 
    rounded-full 
    shrink-0">

      <img src="/src/assets/icon/icon_block.png" alt="" />
    </div>

    <div className="flex flex-col items-center">
      <p className="text-gray-500 text-sm">Inactive Products</p>
      <h3 className="text-2xl font-bold text-slate-800">3</h3>
      <p className="text-red-500 text-sm">Inactive</p>
    </div>
  </div>
</section>

<section className="flex flex-col gap-3 p-4">
  <input
    type="text"
    placeholder="Find products..."
    className="
      w-full
      h-12
      px-4
      rounded-xl
      border
      border-slate-200
      bg-white
      outline-none
      focus:border-[#0344DC]
      focus:ring-1
      focus:ring-[#0344DC]"/>

  <div className="grid grid-cols-2 gap-3">
    <select
      className="
        h-12
        px-3
        rounded-xl
        border
        border-slate-200
        bg-white
        text-slate-700">
      <option>All Categories</option>
    </select>

    <select
      className="
        h-12
        px-3
        rounded-xl
        border
        border-slate-200
        bg-white
        text-slate-700">
      <option>Status: All</option>
    </select>
  </div>

  <button
    className="
      flex
      items-center
      justify-center
      gap-2
      h-12
      rounded-xl
      border
      border-slate-200
      bg-white
      text-slate-700
      hover:bg-slate-50
      transition">
    Clear filter
  </button>
</section>

<section>
     {
      products.map((product) =>{
       const {id, name, price, stock, type, status, description} = product;
        return(
        <AdminProductItem key={id} getProductEdit={getProductEdit} deleteProduct={deleteProduct} product={product}></AdminProductItem> 
       )
      })
     }
  </section>
  </>
  )
}

export default ManageProducts
