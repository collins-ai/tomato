import { Schema, model } from "mongoose"

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    image: {
      url: {
        type: String,
        required: true
      },

      publicId: {
        type: String,
        required: true
      }
    }
  },
  {
    timestamps: true
  }
)

export default model(`Product`, productSchema)