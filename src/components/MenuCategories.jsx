
import MenuItem from "./MenuItem"

 const MenuCategories = () =>{
    return (

    <section className = "flex flex-col mt-16 mb-16" >
        <h2 className="text-2xl sm: m-9 lg:ml-16 mb-3 ">Specials Coffees</h2>
        <div className="grid mt-9 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center lg:mx-16">
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
         <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
         <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        </div>
    </section>
    )
}

export default MenuCategories