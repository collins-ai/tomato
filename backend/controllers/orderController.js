import orders from "../models/orders.js"

const createOrder = async (req, res) => {
    const { image, title, description, category, price } = req.body

    await products.create({
        image, title, description, category, price
    })

    res.status(201).json({ message: `${title} uploaded successfully!` })
}

const getOrders = async (req, res) => {
    const allProducts = await products.find()

    res.status(200).json({ allProducts })

    // const { category, sort, limit } = req.query
    // const query = {}

    // if (category) {
    //     query.category = category
    // }

    // let productsQuery = Product.find(query)

    // if (sort === `latest`) {
    //     productsQuery = productsQuery.sort({ createdAt: -1 })
    // }

    // if (limit) {
    //     productsQuery = productsQuery.limit(Number(limit))
    // }

    // const allProducts = await productsQuery
    // res.status(200).json({ allProducts })
}

const updateOrder = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      })
    }

    // Delete Cloudinary image first
    if (product.image?.publicId) {
      await cloudinary.uploader.destroy(
        product.image.publicId
      )
    }

    // Delete MongoDB document
    await Product.findByIdAndDelete(req.params.id)

    res.status(200).json({
      message: "Product deleted successfully",
    })
  } catch (error) {
    console.error("Delete product error:", error)

    res.status(500).json({
      message: "Could not delete product",
    })
  }
}

const deleteOrder = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      })
    }

    // Delete Cloudinary image first
    if (product.image?.publicId) {
      await cloudinary.uploader.destroy(
        product.image.publicId
      )
    }

    // Delete MongoDB document
    await Product.findByIdAndDelete(req.params.id)

    res.status(200).json({
      message: "Product deleted successfully",
    })
  } catch (error) {
    console.error("Delete product error:", error)

    res.status(500).json({
      message: "Could not delete product",
    })
  }
}

export { createOrder, getOrders, updateOrder, deleteOrder }