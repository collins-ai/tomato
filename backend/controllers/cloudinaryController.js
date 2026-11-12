import cloudinary from "../config/cloudinary.js"

const generateSignature = (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000)

  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder: "products" },
    process.env.CLOUDINARY_API_SECRET
  )

  res.status(200).json({ timestamp, signature })
}

export default generateSignature