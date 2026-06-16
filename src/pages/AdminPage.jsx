
import ManageProducts from "./ManageProducts"
import HomeIcon from "../components/HomeIcon"

const AdminPage = () => {
    return(
        <section className="min-h-screen bg-slate-50">
  <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between ">
    <h2 className="text-[#0344DC] ml-8 text-2xl">Zoka</h2>
    <nav className="mr-8 flex gap-5 items-center" >
        <img  className= "h-6" src="./src/assets/icon/icon_notification.png" alt="" />
        <img  className= "h-9" src="./src/assets/icon/icon_profile.png" alt="" />
    </nav>
  </header>

  <main className="p-4">
      
    <section className="grid gap-4 mb-24  lg:ml-[17vw]">
      <ManageProducts/>

    </section>

  </main>
  

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

    lg:top-0
    lg:bottom-auto
    lg:left-0
    lg:w-[220px]
    lg:h-screen
    lg:border-r
    lg:border-t-0
  "
>
    <h2 className="hidden lg:block text-[#0344DC] text-center mt-8 text-4xl">Zoka</h2>

    <ul>
      <li>
          <HomeIcon className={"h-6 w-6 text-[#0344DC]"}></HomeIcon>
          <h3></h3>
      </li>

      <li>
        <div>
          <h3></h3>
        </div>
      </li>

      <li>
        <div>
          <img src="" alt="" />
          <h3></h3>
        </div>
      </li>

    </ul>

  </nav>

</section>
)
}

export default AdminPage