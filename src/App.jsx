import About from "./components/about/About"
import Banner from "./components/banner/Banner"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Services from "./components/services/Services"
import Work from "./components/work/Work"

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default App
