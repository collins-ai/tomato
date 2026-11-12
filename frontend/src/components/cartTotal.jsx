import { Link } from "react-router"

const CartTotal = ({ path, payment}) => {
  const cartTotal = [
    { id: 1, title: `Sub total`, price: 40 },
    { id: 2, title: `Sheeping fee`, price: 5 },
    { id: 3, title: `Total`, price: 45 }
  ]

  return (
    <section className="flex flex-col gap-5 sm:w-3/5 lg:w-2/5">
      <p className="text-xl font-bold">Cart Total</p>
      <div>
        {cartTotal.map(item => (
          <div key={item.id} className="flex justify-between py-2 border-b border-b-neutral-300">
            <span>{item.title}</span>
            <span>${item.price}</span>
          </div>
        ))}
      </div>
      {path && <Link to={path} className="bg-orange-500 text-white rounded-xl px-5 py-1.5 self-start cursor-pointer hover:bg-orange-600">Proceed to checkout</Link>}
      {payment && <button onClick={payment} className="bg-orange-500 text-white rounded-xl px-5 py-1.5 self-start cursor-pointer hover:bg-orange-600">Proceed to payment</button>}
    </section>
  )
}

export default CartTotal