import { assets } from '../assets/assets'

const OrdersPage = () => {
  const mmm = [1,2,3,4,5,6,7,8,9]

  return (
    <main className="bg-white flex flex-col gap-5 px-4 py-10 min-h-[80vh] sm:px-20 sm:py-15">
      <p className="font-bold">My Orders</p>
      <div className="flex flex-col gap-4 h-[70vh] overflow-auto lg:h-[50vh]">
        {mmm.map(mm => (
          <div key={mm} className="flex flex-col gap-3 p-3 border border-neutral-300 lg:flex-row">
            <div className="flex items-center lg:w-1/2">
              <div className="w-1/4 sm:w-1/3 lg:w-1/6">
                <img src={assets.parcel_icon} alt="" className="w-2/3 object-cover sm:w-1/4 lg:w-1/2" />
              </div>
              <p className="w-2/4 leading-tight sm:w-1/3 lg:w-3/6">Lorem ipsum dolor sit amet consectetur adipisicing elit incidunt architecto.</p>
              <p className="w-1/4 text-center sm:w-1/3 sm:text-end lg:w-2/6 lg:text-center">${224}</p>
            </div>
            <div className="flex justify-between items-center lg:w-1/2">
              <p className="lg:w-1/4">Items : {6}</p>
              <p className="lg:w-2/4 font-bold">Proccessing</p>
              <p className="lg:w-1/4 px-2 py-1 bg-orange-100">Track Order</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default OrdersPage