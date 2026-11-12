import Add from "./components/add"
import List from "./components/list"
import Order from "./components/order"
import AdminPage from "./pages/adminPage"
import NotfoundPage from "./pages/notFoundPage"
import { createBrowserRouter, RouterProvider } from "react-router"

function App() {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <AdminPage />,
      children: [
        { index: true, element: <Add /> },
        { path: `/list`, element: <List /> },
        { path: `/order`, element: <Order /> }
      ]
    },
    {
      path: `*`,
      element: <NotfoundPage />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App