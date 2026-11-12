import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import express from "express"
import connectDB from "./config/mongoDB.js"
import handleError from "./middlewares/handleError.js"
import cloudinaryRouter from "./routes/cloudinaryRoute.js"
import productRouter from "./routes/productRoute.js"
import orderRouter from "./routes/orderRoute.js"
// import paymentRouter from "./routes/paymentRoute"
// import { webhookHandler } from "./controllers/webhookController"
import dns from "node:dns/promises"
dns.setServers(["8.8.8.8", "1.1.1.1"])

dotenv.config()
connectDB()

const app = express()
const PORT = process.env.PORT || 5000

// app.post(
//   "/api/payments/webhook",
//   express.raw({ type: "application/json" }),
//   webhookHandler
// )

app.use(cors())
app.use(express.json())

app.use(`/cloudinary`, cloudinaryRouter)
app.use(`/product`, productRouter)
app.use(`/order`, orderRouter)
// app.use("/payments", paymentRouter)


//Error handler
app.use(handleError)

mongoose.connection.once(`open`, () => {
  console.log(`application connected to mongoDB`)
  app.listen(PORT, (error) => {
    error ? console.error(error) : console.log(`Server listening on port ${PORT}`)
  })
})

// import mongoose from "mongoose"
// import cookieParser from "cookie-parser"
// import connectDB from "./config/connectDB.js"
// import corsOptions from "./config/corsOptions.js"
// import upload from "./middlewares/uploadImage.js"
// import verifyJWT from "./middlewares/verifyJWT.js"
// import handleError from "./middlewares/handleError.js"
// import uploadRouter from "./routes/uploadRoute.js"
// import productRouter from "./routes/productRoute.js"
// import subscriberRouter from "./routes/subscriberRoute.js"
// import userRouter from "./routes/userRoute.js"
// import refreshRouter from "./routes/refreshRoute.js"
// import cartRouter from "./routes/cartRoute.js"
// //import dns from "node:dns/promises"
// //dns.setServers(["8.8.8.8", "1.1.1.1"])

// connectDB()

// //Middlewares
// app.use(cors(corsOptions))
// app.use(cookieParser())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(`/images`, express.static(`./uploads`))

// // Public routes
// app.use(`/upload`, upload.single(`image`), uploadRouter)
// app.use(`/product`, productRouter)
// app.use(`/subscribe`, subscriberRouter)
// app.use(`/user`, userRouter)
// app.use(`/refresh`, refreshRouter)

// //Protected routes
// app.use(verifyJWT)
// app.use(`/cart`, cartRouter)