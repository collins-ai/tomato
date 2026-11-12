import { createContext, useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./rootLayout"
import HomePage from "./pages/homePage"
import CartPage from "./pages/cartPage"
import CheckoutPage from "./pages/checkoutPage"
import OrdersPage from "./pages/ordersPage"
import NotfoundPage from "./pages/notfoundPage"

export const appContext = createContext()

function App() {
  const [open, setOpen] = useState(false)
  const [signup, setSignup] = useState(true)

  const router = createBrowserRouter([
    {
      path: `/`,
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: `/cart`, element: <CartPage /> },
        { path: `/checkout`, element: <CheckoutPage /> },
        { path: `/orders`, element: <OrdersPage /> }
      ]
    },
    {
      path: `*`,
      element: <NotfoundPage />
    }
  ])

  return (
    <appContext.Provider value={{ open, setOpen, signup, setSignup }} className="Provider">
      <RouterProvider router={router} />
    </appContext.Provider>
  )
}

export default App