import { Link } from "react-scroll"
import { useState } from "react"
import { assets, food_list, menu_list } from "../assets/assets"
import Card from "../components/card"

const HomePage = () => {
  const [menuId, setMenuId] = useState(null)
  const [category, setCategory] = useState(`All`)

  const selectMenu = (item) => {
    setMenuId(menuId === item._id ? null : item._id)
    setCategory(category === item.menu_name ? `All` : item.menu_name)
  }

  const filteredMenu = category === `All` ? food_list : food_list.filter(item => item.category === category)

  return (
    <main className="bg-white p-4 z-0 min-h-[80vh] sm:px-20">
      <section className="bg-[url('/header_img.png')] bg-cover bg-center h-[30vh] rounded-2xl relative lg:h-[60vh] lg:mt-5">
        <div className="bg-neutral-800/30 absolute inset-0 rounded-2xl"></div>
        <div className="absolute bottom-4 left-4 fade sm:bottom-10 sm:left-10">
          <h1 className="text-white text-2xl font-bold leading-tight mb-5 lg:text-4xl">Order your favourite <br /> food here</h1>
          <p className="hidden text-white mb-5 w-1/2 leading-tight lg:block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est inventore aut possimus quibusdam laborum et fugit tempora iure, quasi, quam dolores aliquid suscipit enim provident!</p>
          <Link to="menu" className="bg-white text-neutral-800 rounded-full px-5 py-1 cursor-pointer hover:bg-orange-600 hover:text-white">View menu</Link>
        </div>
      </section>
      <section id="menu" className="border-b border-b-neutral-300 flex flex-col gap-5 py-10">
        <h2 className="text-neutral-800 text-2xl font-bold">Explore our menu</h2>
        <p className="text-neutral-500 leading-tight sm:w-2/3 lg:w-1/2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus earum, numquam qui accusamus distinctio dolore ullam.</p>
        <div className="flex gap-5 overflow-x-auto lg:justify-between">
          {menu_list.map(item => (
            <div onClick={() => { selectMenu(item) }} key={item._id} className="flex flex-col items-center gap-1 w-20 shrink-0 cursor-pointer lg:w-25">
              <img src={item.menu_image} alt={item.menu_name} className={`${menuId === item._id && 'border-2 border-orange-600'} w-full object-cover rounded-full hover:border-2 hover:border-orange-600`} />
              <span className="text-neutral-500">{item.menu_name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="py-10">
        <h2 className="text-neutral-800 text-2xl font-bold mb-10">Top dishes near you</h2>
        <div className="flex flex-col gap-10 px-8 sm:px-0 sm:flex-row sm:flex-wrap sm:justify-center">
          {filteredMenu.map(item => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center gap-5 py-10">
        <p className="text-neutral-800 text-xl text-center font-bold lg:text-2xl">For Better Experience Download <br /> Tomato App</p>
        <div className="flex gap-2">
          <img src={assets.play_store} alt="play store" className="w-25 lg:w-30" />
          <img src={assets.app_store} alt="app store" className="w-25 lg:w-30" />
        </div>
      </section>
    </main>
  )
}

export default HomePage