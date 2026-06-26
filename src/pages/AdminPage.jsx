
import ManageProducts from "../components/ManageProducts"

const AdminPage = () => {
    return(
  <section className="min-h-screen bg-slate-50">

      <header
        className="
          fixed
          top-0
          left-0
          right-0
          h-16
          bg-white
          border-b
          border-slate-200
          flex
          items-center
          justify-between
          px-8
          z-50
        ">

        <h2 className="text-[#0344DC] ml-2 text-2xl">Zoka</h2>

        <nav className="flex items-center gap-5">
          <img className="h-6" src="./src/assets/icon/icon_notification.png" alt="" />
          <img className="h-9" src="./src/assets/icon/icon_profile.png" alt="" />
        </nav>
      </header>

      <div className="pt-20 pb-24 p-4 lg:ml-[220px]">
        <ManageProducts />
      </div>

      <nav
        className="
          fixed
          bottom-0
          left-0
          right-0
          h-16
          bg-white
          border-t
          border-slate-200
          lg:top-16
          lg:bottom-0
          lg:left-0
          lg:w-[220px]
          lg:h-[calc(100vh-4rem)]
          lg:border-r
          lg:border-t-0
        ">

        <ul className="
            flex
            justify-around
            items-center
            h-full

            lg:flex-col
            lg:justify-start
            lg:items-start
            lg:gap-3
            lg:px-4
            lg:py-6
          ">

          <li className="w-full">
            <button 
            className="
                flex
                items-center
                gap-3
                w-full
                px-4
                py-3
                rounded-xl
                hover:bg-[#EEF4FF]
                hover:text-[#0344DC]
                transition
              ">

              <h3>Products</h3>
            </button>
          </li>

          <li className="w-full">
            <button
              className="
                flex
                items-center
                gap-3
                w-full
                px-4
                py-3
                rounded-xl
                hover:bg-[#EEF4FF]
                hover:text-[#0344DC]
                transition
              ">
              <h3>Orders</h3>
            </button>
          </li>

          <li className="w-full">
            <button
              className="
                flex
                items-center
                gap-3
                w-full
                px-4
                py-3
                rounded-xl
                hover:bg-[#EEF4FF]
                hover:text-[#0344DC]
                transition
              ">
              <h3>Dashboard</h3>
            </button>
          </li>
        </ul>
      </nav>

    </section>
)
}

export default AdminPage