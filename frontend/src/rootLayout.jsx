import Footer from "./components/footer"
import Header from "./components/header"
import Scrolltotop from "./components/scrolltotop"
import { Outlet } from "react-router"

const RootLayout = () => {
  return (
    <>
      <Scrolltotop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout