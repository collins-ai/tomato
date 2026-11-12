import { useEffect, useState } from "react"
import { assets } from "../assets/assets"

const Order = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrders()
  }, [])

  const getOrders = async () => {
    const ordersResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/order`)
    const ordersData = await ordersResponse.json()
    console.log(ordersData.allProducts)
    setOrders(ordersData.allProducts)
  }

  return (
    <main className="px-4 pt-10 basis-5/6 sm:ps-10 sm:pe-20 sm:basis-3/4 lg:ps-20 lg:pe-40 lg:basis-4/5">
      <p className="font-bold pb-4 border-b border-b-neutral-300">Manage orders</p>
      <div className="flex flex-col gap-4 h-[70vh] overflow-auto">
        {orders.length === 0 && <p className="font-bold h-full flex justify-center items-center">No order found!</p>}
        {orders.map(order => (
          <div key={order._id} className="flex flex-col gap-5 p-2 border border-neutral-300 sm:p-4 lg:flex-row">
            <div className="flex gap-3 items-start lg:basis-1/2">
              <img src={assets.parcel_icon} alt="" className="w-1/5 object-cover sm:w-1/8" />
              <div className="flex flex-col gap-5 w-4/5 leading-tight sm:w-7/8">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto, natus consequatur et nostrum consectetur atque autem aliquid saepe itaque.</p>
                <div className="flex flex-col gap-1">
                  <p>{`first name`} {`last name`}</p>
                  <p>{`street`}</p>
                  <p>{`city`} {`state`} {`country`} {`zip code`}</p>
                  <p>{`phone number`}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center lg:basis-1/2 lg:items-start">
              <p>Items : {6}</p>
              <p>${224}</p>
              <select name="status" id="status" className="border border-neutral-300 outline-0 rounded-lg p-1 w-1/2" >
                <option value="Processing">Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Order