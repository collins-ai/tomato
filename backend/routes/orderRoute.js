import express from "express"
import { createOrder, getOrders, updateOrder, deleteOrder } from "../controllers/orderController.js"

const productRouter = express.Router()

productRouter.route(`/`)
    .post(createOrder)
    .get(getOrders)

productRouter.route(`/:id`)
    .put(updateOrder)
    .delete(deleteOrder)

export default productRouter