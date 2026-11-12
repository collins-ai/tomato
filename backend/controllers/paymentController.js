// const Product = require("../models/Product.js");
// const stripe = require("../config/stripe.js");

// const createCheckoutSession = async (req, res) => {
//   try {
//     const { items } = req.body;

//     if (!items || items.length === 0) {
//       return res.status(400).json({
//         message: "Cart is empty",
//       });
//     }

//     const productIds = items.map(item => item.productId);

//     const products = await Product.find({
//       _id: { $in: productIds }
//     });

//     const lineItems = items.map(item => {
//       const product = products.find(
//         p => p._id.toString() === item.productId
//       );

//       if (!product) {
//         throw new Error("Product not found");
//       }

//       return {
//         price_data: {
//           currency: "ngn",

//           product_data: {
//             name: product.name,
//             images: product.image ? [product.image] : [],
//           },

//           unit_amount: Math.round(product.price * 100),
//         },

//         quantity: item.quantity,
//       };
//     });

//     const order = await Order.create({
//       user: req.user._id,

//       items: orderItems,

//       totalAmount: totalAmount,

//       paymentStatus: "pending",
//     });

//     const session = await stripe.checkout.sessions.create({
//       mode: "payment",

//       line_items: lineItems,

//       success_url:
//         `${process.env.CLIENT_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,

//       cancel_url:
//         `${process.env.CLIENT_URL}/payment/cancel`,

//       customer_email: req.user.email,

//       metadata: {
//         orderId: order._id.toString(),
//         userId: req.user._id.toString(),
//       },
//     });

//     order.stripeSessionId = session.id;
//     await order.save();

//     res.status(200).json({
//       url: session.url,
//       sessionId: session.id,
//     });

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: "Unable to create checkout session",
//     });
//   }
// };

// module.exports = {
//   createCheckoutSession,
// };