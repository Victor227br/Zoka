import {
  IoClose,
  IoFunnelOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { useProductsFilters } from "../hooks/useProductsFilters";
import MenuItem from "./MenuItem";

const MenuCategories = () => {
  const {
    search,
    category,
    categories,
    filteredProducts,
    hasActiveFilters,
    clearFilter,
    setSearch,
    setCategory,
  } = useProductsFilters();

  return (
    <section className="mt-16">
      <div className="w-full px-6 lg:px-[4%]">
        <div className="pb-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0344DC]">
            Zoka selection
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#1D3557] sm:text-4xl">
                Our Products
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Find your favorite coffee by name or explore our categories.
              </p>
            </div>
            <span className="text-sm font-semibold text-slate-400">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </span>
          </div>
        </div>

        <div className="sticky top-0 z-40 bg-transparent py-2 lg:static lg:z-auto lg:p-0">
          <div className="grid grid-cols-[minmax(0,1fr)_2.5rem] gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_8px_24px_rgba(29,53,87,0.08)] lg:gap-3 lg:p-3 lg:shadow-sm sm:flex sm:items-center">
            <div className="group relative col-span-2 min-w-0 sm:flex-1 lg:max-w-xl">
              <IoSearchOutline className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-slate-400 transition group-focus-within:text-[#0344DC]" />
              <input
                type="text"
                role="searchbox"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search coffees..."
                aria-label="Search products"
                className="h-10 w-full rounded-xl bg-[#F4F7FC] pl-10 pr-9 text-sm text-[#1D3557] outline-none ring-1 ring-transparent transition placeholder:text-slate-400 hover:bg-[#EEF3FA] focus:bg-white focus:ring-[#0344DC] lg:h-11"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear product search"
                  className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-200 hover:text-[#1D3557]"
                >
                  <IoClose />
                </button>
              )}
            </div>

            <div className="relative min-w-0 sm:w-48 sm:shrink-0 lg:w-56">
              <IoFunnelOutline className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-base text-[#0344DC]" />
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                aria-label="Filter products by category"
                className="h-10 w-full appearance-none rounded-xl bg-[#F4F7FC] pl-9 pr-7 text-xs font-semibold text-[#1D3557] outline-none ring-1 ring-transparent transition hover:bg-[#EEF3FA] focus:bg-white focus:ring-[#0344DC] sm:text-sm lg:h-11"
              >
                <option value="All">All categories</option>
                {categories.map((productCategory) => (
                  <option key={productCategory} value={productCategory}>
                    {productCategory}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[9px] text-slate-400">
                ▼
              </span>
            </div>

            <button
              type="button"
              onClick={clearFilter}
              disabled={!hasActiveFilters}
              aria-label="Clear product filters"
              className="flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-xl text-slate-400 transition hover:bg-[#E9F0FF] hover:text-[#0344DC] disabled:cursor-not-allowed disabled:text-slate-200 lg:h-11 lg:w-auto lg:px-4 lg:text-sm lg:font-semibold"
            >
              <IoClose className="text-lg" />
              <span className="hidden lg:inline">Clear</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <MenuItem key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full flex min-h-64 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9F0FF] text-2xl text-[#0344DC]">
                <IoSearchOutline />
              </span>
              <h3 className="mt-4 text-xl font-bold text-[#1D3557]">
                No products found
              </h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                Try another name or clear the selected category to see more coffees.
              </p>
              <button
                type="button"
                onClick={clearFilter}
                className="mt-5 rounded-xl bg-[#0344DC] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0238B8]"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;
