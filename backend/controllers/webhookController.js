// const stripe = require("../config/stripe.js");

// const webhookHandler = async (req, res) => {
//   const signature = req.headers["stripe-signature"];

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       req.body,
//       signature,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (error) {
//     console.error(
//       "Webhook signature verification failed:",
//       error.message
//     );

//     return res.status(400).send(
//       `Webhook Error: ${error.message}`
//     );
//   }

//   try {
//     switch (event.type) {

//       case "checkout.session.completed": {
//         const session = event.data.object;

//         console.log(
//           "Checkout completed:",
//           session.id
//         );

//         // Find your order
//         // Mark it as PAID
//         // Save Stripe session/payment information
//         // Reduce inventory
//         // Clear cart if appropriate

//         break;


//         const session = event.data.object;
//         const orderId = session.metadata.orderId;
//         const order = await Order.findById(orderId);

//         if (!order) {
//         console.error("Order not found");
//         break;
//         }

//         order.paymentStatus = "paid";
//         order.stripePaymentIntentId = session.payment_intent;
//         await order.save();
//     }

//       case "payment_intent.payment_failed": {
//         const paymentIntent = event.data.object;

//         console.log(
//           "Payment failed:",
//           paymentIntent.id
//         );

//         break;
//       }

//       default:
//         console.log(
//           `Unhandled event type: ${event.type}`
//         );
//     }

//     res.json({ received: true });

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: "Webhook processing failed",
//     });
//   }
// };

// module.exports = {
//   webhookHandler,
// };