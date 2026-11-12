import CartTotal from "../components/cartTotal"

const CheckoutPage = () => {
  const handlePayment = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/payments/create-checkout-session`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          items: cartItems.map(item => ({
            productId: item.product._id,
            quantity: item.quantity,
          })),
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    window.location.href = data.url;

  } catch (error) {
    console.error(error);
  }
};

  return (
    <main className="bg-white flex flex-col gap-20 px-4 py-15 min-h-[80vh] sm:px-20 sm:py-20 lg:flex-row lg:justify-between">
      <section className="flex flex-col gap-10 lg:w-2/5">
        <p className="text-xl font-bold">Delivery Information</p>
        <form className="flex flex-col gap-5">
          <div className="flex gap-5">
            <input type="text" name="" id="" placeholder="First name" className="border border-neutral-300 outline-0 rounded-xl p-2 w-1/2" />
            <input type="text" name="" id="" placeholder="Last name" className="border border-neutral-300 outline-0 rounded-xl p-2 w-1/2" />
          </div>
          <input type="email" name="" id="" placeholder="Email address" className="border border-neutral-300 outline-0 rounded-xl p-2 w-full" />
          <input type="text" name="" id="" placeholder="Street" className="border border-neutral-300 outline-0 rounded-xl p-2 w-full" />
          <div className="flex gap-5">
            <input type="text" name="" id="" placeholder="City" className="border border-neutral-300 outline-0 rounded-xl p-2 w-1/2" />
            <input type="text" name="" id="" placeholder="State" className="border border-neutral-300 outline-0 rounded-xl p-2 w-1/2" />
          </div>
          <div className="flex gap-5">
            <input type="text" name="" id="" placeholder="Zip code" className="border border-neutral-300 outline-0 rounded-xl p-2 w-1/2" />
            <input type="text" name="" id="" placeholder="Country" className="border border-neutral-300 outline-0 rounded-xl p-2 w-1/2" />
          </div>
          <input type="tel" name="" id="" placeholder="Phone number" className="border border-neutral-300 outline-0 rounded-xl p-2 w-full" />
        </form>
      </section>
      <CartTotal payment={handlePayment} />
    </main>
  )
}

export default CheckoutPage