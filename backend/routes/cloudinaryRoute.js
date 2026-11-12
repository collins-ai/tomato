import express from "express"
import generateSignature from "../controllers/cloudinaryController.js"

const cloudinaryRouter = express.Router()

cloudinaryRouter.get(`/signature`, generateSignature)

export default cloudinaryRouter