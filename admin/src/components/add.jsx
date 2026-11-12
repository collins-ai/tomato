import { useState } from "react"
import { assets } from "../assets/assets"

const Add = () => {
  const [image, setImage] = useState(null)
  const [file, setFile] = useState(null)
  const [product, setProduct] = useState({
    image: ``, title: ``, description: ``, category: ``, price: ``
  })

  const selectImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
    setFile(e.target.files[0])
  }

  const handleChange = (e) => {
    setProduct(previous => ({ ...previous, [e.target.name]: e.target.value }))
  }

  const uploadProduct = async (e) => {
    e.preventDefault()

    try {
      const signatureResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cloudinary/signature`)
      const { timestamp, signature } = await signatureResponse.json()

      if(!signatureResponse.ok) return alert(`failed to get signature`)

      const formData = new FormData()
      formData.append("file", file)
      formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY)
      formData.append("timestamp", timestamp)
      formData.append("signature", signature)
      formData.append("folder", "products")

      const uploadResponse = await fetch(`${import.meta.env.VITE_CLOUDINARY_URL}/image/upload`,
        { method: "POST", body: formData }
      )
      const data = await uploadResponse.json()
      console.log(data)

      if(!uploadResponse.ok) return alert(`failed to upload image`)

      product.image = {
        url: data.secure_url,
        publicId: data.public_id
      }

      const productResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(product)
      })
      const productData = await productResponse.json()
      alert(productData.message)
      console.log(productData)

      if(!productResponse.ok) return alert(productData.message)
    } catch (error) {
      console.error(`an error occured: ${error}`)
    }
  }

  return (
    <main className="px-6 basis-5/6 flex justify-center items-center sm:pe-20 sm:basis-3/4 lg:pe-40 lg:basis-4/5">
      <form noValidate onSubmit={uploadProduct} className="flex flex-col gap-3 sm:w-100 lg:w-120">
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="image" className="w-full">
            <span>Upload image</span>
            <img src={image ? image : assets.upload_area} alt="" className="w-30 h-20 mt-1 object-cover cursor-pointer" />
          </label>
          <input type="file" name="image" id="image" onChange={selectImage} className="hidden" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="title">Item name</label>
          <input type="text" name="title" id="title" onChange={handleChange} className="border border-neutral-300 outline-0 rounded-xl p-2 w-full" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="description">Item description</label>
          <textarea name="description" id="description" onChange={handleChange} rows={3} className="border border-neutral-300 outline-0 rounded-xl p-2 w-full"></textarea>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-start gap-1 w-1/2">
            <label htmlFor="category">Item category</label>
            <select name="category" id="category" onChange={handleChange} className="border border-neutral-300 outline-0 rounded-xl p-2 w-full cursor-pointer">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="flex flex-col items-start gap-1 w-1/2">
            <label htmlFor="price">Item price</label>
            <input type="number" name="price" id="price" onChange={handleChange} className="border border-neutral-300 outline-0 rounded-xl p-2 w-full" />
          </div>
        </div>
        <button type="submit" className="bg-orange-500 text-white rounded-xl py-2 cursor-pointer hover:bg-orange-600">Add</button>
      </form>
    </main>
  )
}

export default Add