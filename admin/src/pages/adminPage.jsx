import { NavLink, Outlet } from "react-router"
import { assets } from "../assets/assets"

const AdminPage = () => {
  const style = `flex gap-3 items-center border border-neutral-300 border-e-0 px-4 py-2`

  return (
    <div>
      <header className="flex justify-between items-center px-4 h-[12vh] border-b border-b-neutral-300 sm:px-10 lg:px-20">
        <img src={assets.logo} alt="app logo" className="w-30" />
        <img src={assets.profile_image} alt="profile" className="w-12" />
      </header>
      <div className="flex h-[88vh]">
        <nav className="flex flex-col gap-4 pt-10 ps-4 basis-1/6 border-e border-e-neutral-300 sm:ps-10 sm:basis-1/4 lg:ps-20 lg:basis-1/5">
          <NavLink to={`/`} className={({ isActive }) => isActive ? `${style} bg-orange-500/50` : style}>
            <img src={assets.add_icon} alt="add icon" className="sm:w-6" />
            <span className="hidden sm:block">Add Item</span>
          </NavLink>
          <NavLink to={`/list`} className={({ isActive }) => isActive ? `${style} bg-orange-500/50` : style}>
            <img src={assets.list_icon} alt="list icon" className="sm:w-6" />
            <span className="hidden sm:block">List Items</span>
          </NavLink>
          <NavLink to={`/order`} className={({ isActive }) => isActive ? `${style} bg-orange-500/50` : style}>
            <img src={assets.basket_icon} alt="basket icon" className="sm:w-6" />
            <span className="hidden sm:block">Orders</span>
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminPage