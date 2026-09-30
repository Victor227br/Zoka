import AdminProductItem from "./AdminProductItem"
import FormProduct from "./FormProduct"
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { useProductsFilters } from "../hooks/useProductsFilters";
import {
  IoChevronDown,
  IoClose,
  IoFunnelOutline,
  IoRefreshOutline,
  IoSearchOutline,
} from "react-icons/io5";

const ManageProducts = () => {
  const {isFormOpen ,openForm} = useContext(ProductsContext)
  
  const {  
   search,
   category, 
   status,
   categories,
   filteredProducts,
   hasActiveFilters,
   clearFilter,
   totalProducts,
   totalStock,
   totalInactiveProducts,
   setSearch,
   setCategory,
   setStatus,
  } = useProductsFilters()

  return(
      <>
  <section className="sm:flex flex-col justify-center lg:flex-row justify-between lg: m-4">
    <div>
      <h1 className="text-3xl mb-2 font-bold sm: text-center lg:text-left">Products</h1>
      <p className="text-slate-500 sm: text-xl sm: text-center lg: text-left lg: text-2xl">Manage your store's products</p>
    </div>
 
    <button
    onClick={openForm} 
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
    isFormOpen &&(
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
        <FormProduct 
        />
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
      <h3 className="text-2xl font-bold text-slate-800">{totalProducts}</h3>
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
      <h2 className="text-[#0344DC] text-[24px]">$</h2>
    </div>

    <div className="flex flex-col items-center">
      <p className="text-gray-500 text-sm">Stock</p>
      <h3 className="text-2xl font-bold text-slate-800">{totalStock}</h3>
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
      <h3 className="text-2xl font-bold text-slate-800">{categories.length}</h3>
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
      <h3 className="text-2xl font-bold text-slate-800">{totalInactiveProducts}</h3>
      <p className="text-red-500 text-sm">Inactive</p>
    </div>
  </div>
</section>

<section className="m-4 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(29,53,87,0.06)]">
  <div className="flex flex-col gap-3 border-b border-slate-100 bg-gradient-to-r from-[#F8FAFF] to-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-6">
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E9F0FF] text-xl text-[#0344DC]">
        <IoFunnelOutline />
      </span>
      <div>
        <h2 className="font-bold text-[#1D3557]">Filter products</h2>
        <p className="text-sm text-slate-500">
          Search and refine your product list
        </p>
      </div>
    </div>

    <span className="w-fit rounded-full bg-[#E9F0FF] px-3 py-1.5 text-xs font-bold text-[#0344DC]">
      {filteredProducts.length} {filteredProducts.length === 1 ? "result" : "results"}
    </span>
  </div>

  <div className="grid gap-4 p-5 lg:grid-cols-[minmax(280px,1fr)_220px_190px_auto] lg:items-end lg:p-6">
    <div>
      <label
        htmlFor="product-search"
        className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500"
      >
        Search
      </label>
      <div className="group relative">
        <IoSearchOutline className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400 transition group-focus-within:text-[#0344DC]" />
        <input
          id="product-search"
          type="text"
          role="searchbox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, type or description..."
          className="h-12 w-full rounded-xl border border-slate-200 bg-[#F8FAFD] pl-12 pr-11 text-sm text-[#1D3557] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-[#0344DC] focus:bg-white focus:ring-4 focus:ring-blue-100"
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-200 hover:text-[#1D3557]"
          >
            <IoClose />
          </button>
        )}
      </div>
    </div>

    <div>
      <label
        htmlFor="product-category"
        className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500"
      >
        Category
      </label>
      <div className="relative">
        <select
          id="product-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-[#F8FAFD] px-4 pr-10 text-sm font-medium text-[#1D3557] outline-none transition hover:border-slate-300 focus:border-[#0344DC] focus:bg-white focus:ring-4 focus:ring-blue-100"
        >
          <option value="All">All categories</option>
          {categories.map((productCategory) => (
            <option key={productCategory} value={productCategory}>
              {productCategory}
            </option>
          ))}
        </select>
        <IoChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>
    </div>

    <div>
      <label
        htmlFor="product-status"
        className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500"
      >
        Status
      </label>
      <div className="relative">
        <select
          id="product-status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-[#F8FAFD] px-4 pr-10 text-sm font-medium text-[#1D3557] outline-none transition hover:border-slate-300 focus:border-[#0344DC] focus:bg-white focus:ring-4 focus:ring-blue-100"
        >
          <option value="All">All statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <IoChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>
    </div>

    <button
      type="button"
      onClick={clearFilter}
      disabled={!hasActiveFilters}
      className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-600 transition hover:border-[#0344DC]/30 hover:bg-[#F4F7FC] hover:text-[#0344DC] disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-300 lg:min-w-36"
    >
      <IoRefreshOutline className="text-lg" />
      Clear filters
    </button>
  </div>

  {hasActiveFilters && (
    <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 bg-[#FBFCFF] px-5 py-3 text-xs lg:px-6">
      <span className="mr-1 font-semibold text-slate-400">Active filters:</span>
      {search && (
        <button
          type="button"
          onClick={() => setSearch("")}
          className="inline-flex items-center gap-1.5 rounded-full bg-[#E9F0FF] px-3 py-1.5 font-semibold text-[#0344DC] transition hover:bg-[#DCE8FF]"
        >
          “{search}” <IoClose />
        </button>
      )}
      {category !== "All" && (
        <button
          type="button"
          onClick={() => setCategory("All")}
          className="inline-flex items-center gap-1.5 rounded-full bg-[#E9F0FF] px-3 py-1.5 font-semibold text-[#0344DC] transition hover:bg-[#DCE8FF]"
        >
          {category} <IoClose />
        </button>
      )}
      {status !== "All" && (
        <button
          type="button"
          onClick={() => setStatus("All")}
          className="inline-flex items-center gap-1.5 rounded-full bg-[#E9F0FF] px-3 py-1.5 font-semibold text-[#0344DC] transition hover:bg-[#DCE8FF]"
        >
          {status} <IoClose />
        </button>
      )}
    </div>
  )}
</section>
<section>
  {
    filteredProducts.map((product) =>{
    const {id} = product;
      return(
      <AdminProductItem 
        key={id}  
        product={product}
        openForm={openForm}
        >
        </AdminProductItem> 
      )
    })
  }
  </section>
  </>
  )
}

export default ManageProducts
