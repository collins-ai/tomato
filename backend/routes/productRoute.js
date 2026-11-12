import express from "express"
import productSchema from "../validators/productValidator.js"
import validateInput from "../middlewares/validateInput.js"
import { uploadProduct, getProducts, deleteProduct } from "../controllers/productController.js"

const productRouter = express.Router()

productRouter.route(`/`)
    .post(validateInput(productSchema), uploadProduct)
    .get(getProducts)

productRouter.delete(`/:id`, deleteProduct)

export default productRouter