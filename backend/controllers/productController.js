import products from "../models/products.js"
import cloudinary from "../config/cloudinary.js"

const uploadProduct = async (req, res) => {
  const { image, title, description, category, price } = req.body

  await products.create({
    image, title, description, category, price
  })

  res.status(201).json({ message: `${title} uploaded successfully!` })
}

const getProducts = async (req, res) => {
  const Products = await products.find()
  res.status(200).json({ Products })
}

const deleteProduct = async (req, res) => {
  const product = await products.findById(req.params.id)

  if (!product) {
    return res.status(404).json({ message: `Product not found` })
  }

  if (product.image?.publicId) {
    await cloudinary.uploader.destroy(product.image.publicId)
  }

  await products.findByIdAndDelete(req.params.id)
  res.status(200).json({ message: `${product.title} deleted successfully` })
}

export { uploadProduct, getProducts, deleteProduct }