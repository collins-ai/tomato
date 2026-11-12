import { assets } from "../assets/assets"
import food from "../assets/food_14.png"
import CartTotal from "../components/cartTotal"

const CartPage = () => {
  const mmm = [1,2,3,4,5,6,7,8,9]

  return (
    <main className="bg-white flex flex-col gap-20 px-4 py-10 min-h-[80vh] sm:px-20 sm:py-15">
      <section>
        <p className="text-xl text-center font-bold pb-4 border-b border-b-neutral-300">Cart(18)</p>
        <div className="h-[60vh] overflow-auto sm:h-[50vh]">
          {mmm.map(mm => (
            <div key={mm} className="flex gap-3 p-3 border-b border-b-neutral-300 sm:items-center">
              <div className="w-1/4 sm:w-1/8">
                <img src={food} alt="" className="w-full object-cover sm:w-20" />
              </div>
              <div className="flex flex-col justify-between gap-2 w-3/4 sm:flex-row sm:w-7/8">
                <p className="font-semibold leading-tight sm:w-1/3">Greek salad</p>
                <div className="flex justify-between items-center sm:w-2/3">
                  <div className="flex items-center gap-5 sm:w-2/3 sm:justify-between">
                    <span>${12}</span>
                    <span>x{2}</span>
                    <span>${24}</span>
                  </div>
                  <button className="cursor-pointer sm:w-1/3">
                    <img src={assets.cross_icon} alt="cross icon" className="w-3 sm:justify-self-end" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CartTotal path={`/checkout`} />
    </main>
  )
}

export default CartPage