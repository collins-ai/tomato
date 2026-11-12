import { Schema, model } from "mongoose"

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product"
        },
        name: String,
        price: Number,
        quantity: Number,
        image: String
      },
    ],

    totalAmount: {
      type: Number,
      required: true
    },

    paymentStatus: {
      type: String,
      enum: [ "pending", "paid", "failed", "refunded" ],
      default: "pending"
    },

    orderStatus: {
      type: String,
      enum: [ "processing", "shipped", "delivered", "cancelled" ],
      default: "processing"
    },

    stripeSessionId: {
      type: String,
      required: true
    },

    stripePaymentIntentId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default model(`Order`, orderSchema)