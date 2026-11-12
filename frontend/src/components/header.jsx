import { useContext } from "react"
import { appContext } from "../App"
import { NavLink } from "react-router"
import { Link } from "react-scroll"
import { assets } from "../assets/assets"
import Signup from "./signup"

const Header = () => {
  const { open, setOpen } = useContext(appContext)

  const openForm = () => {
    setOpen(true)
    document.body.classList.add(`overflow-hidden`)
  }

  return (
    <header className="bg-white flex justify-between items-center p-4 sticky top-0 z-10 sm:px-20">
      <NavLink to={`/`}>
        <img src={assets.logo} alt="app logo" className="w-30" />
      </NavLink>
      <ul className="hidden sm:flex gap-5">
        <li><NavLink to={`/`} className={({ isActive }) => isActive ? "underline underline-offset-8" : "hover:text-orange-600"}>home</NavLink></li>
        <li><Link to="menu" className="cursor-pointer hover:text-orange-600">menu</Link></li>
        <li><Link to="contact" className="cursor-pointer hover:text-orange-600">contact us</Link></li>
      </ul>
      <div className="flex items-center gap-5">
        <NavLink to={`/cart`}>
          <img src={assets.basket_icon} alt="cart icon" className="w-6" />
        </NavLink>
        <button onClick={openForm} type="button" className="border border-neutral-300 rounded-full px-5 py-1 cursor-pointer hover:bg-orange-600 hover:text-white">Sign up</button>
      </div>
      {open && <Signup />}
    </header>
  )
}

export default Header