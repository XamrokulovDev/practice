// import userContext 
import { userContext } from "../src/Context"

// import swiper 
import { SwiperProduct, SwiperPopulars, Categorys } from "../data"

// import SwiperPage 
import SwiperProducts from "./components/SwiperProducts"
import SwiperPopular from "./components/SwiperPopular"
import Navbar from "./components/Navbar"
import Category from "./components/Category"
import Footer from "./components/Footer"

const App = () => {
  return (
    <userContext.Provider value={{SwiperProduct,SwiperPopulars,Categorys}}>
      <Navbar />
      <SwiperProducts />
      <SwiperPopular />
      <Category />
      <Footer />
    </userContext.Provider>
  )
}

export default App
