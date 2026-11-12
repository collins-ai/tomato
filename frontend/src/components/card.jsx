import { useState } from "react"
import { assets } from "../assets/assets"

const Card = ({ item }) => {
  const [cart, setCart] = useState(0)

  return (
    <div className="shadow-lg shadow-neutral-300 rounded-t-2xl hover:scale-102 sm:basis-[40%] lg:basis-[20%]">
      <div className="relative rounded-t-2xl">
        <img src={item.image} alt={item.name} className="w-full object-cover rounded-t-2xl" />
        <div className="absolute bottom-4 right-4">
          {cart === 0 && (
            <button onClick={() => { setCart(pre => pre + 1) }} className="cursor-pointer">
              <img src={assets.add_icon_white} alt="white add icon" />
            </button>
          )}
          {cart !== 0 && (
            <div className="bg-white flex items-center gap-2 p-2 rounded-full">
              <button onClick={() => { setCart(pre => pre - 1) }} className="cursor-pointer">
                <img src={assets.remove_icon_red} alt="red remove icon"  />
              </button>
              <span>{cart}</span>
              <button onClick={() => { setCart(pre => pre + 1) }} className="cursor-pointer">
                <img src={assets.add_icon_green} alt="green add icon" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3 p-3">
        <p className="text-neutral-800 text-xl font-bold">{item.name}</p>
        <p className="text-neutral-500 leading-tight">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-orange-600 font-bold">${item.price}</span>
          <img src={assets.rating_starts} alt="star rating" className="w-20 h-4" />
        </div>
      </div>
    </div>
  )
}

export default Card