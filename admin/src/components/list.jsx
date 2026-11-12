import { assets } from "../assets/assets"
import food from "../../../frontend/src/assets/food_14.png"
import { useEffect, useState } from "react"

const List = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const productsResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/product`)
      const productsData = await productsResponse.json()
      console.log(productsData)

      if (!productsResponse.ok) return alert(productsData.message)
      setProducts(productsData.Products)
    } catch (error) {
      console.error(`an error occured: ${error}`)
    }
  }

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/product/${productId}`, {
        method: "DELETE",
        // headers: {
        //   Authorization: `Bearer ${token}`
        // }
      })
      const data = await response.json()
      alert(data.message)
      console.log(data)

      if (!response.ok) return alert(data.message)
      setProducts(previous => previous.filter((product) => product._id !== productId))
    } catch (error) {
      console.error(`an error occured: ${error}`)
    }
  }

  return (
    <main className="px-4 pt-10 basis-5/6 sm:ps-10 sm:pe-20 sm:basis-3/4 lg:ps-20 lg:pe-40 lg:basis-4/5">
      <p className="font-bold pb-4 border-b border-b-neutral-300">Manage items</p>
      <div className="h-[70vh] overflow-auto">
        {products.length === 0 && <p className="font-bold h-full flex justify-center items-center">No item found!</p>}
        {products.map(product => (
          <div key={product._id} className="flex gap-3 p-3 border-b border-b-neutral-300 sm:items-center">
            <div className="w-1/4 sm:w-1/6">
              <img src={product.image.url} alt="" className="w-full h-15 object-cover sm:w-20" />
            </div>
            <div className="flex flex-col justify-between gap-2 w-3/4 sm:flex-row sm:w-5/6">
              <p className="font-semibold leading-tight sm:w-1/3">{product.title}</p>
              <div className="flex justify-between items-center sm:w-2/3">
                <div className="flex items-center gap-5 sm:w-2/3 sm:justify-between">
                  <span>{product.category}</span>
                  <span>${product.price}</span>
                </div>
                <button onClick={() => deleteProduct(product._id)} className="cursor-pointer sm:w-1/3">
                  <img src={assets.cross_icon} alt="cross icon" className="w-3 sm:justify-self-end" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default List