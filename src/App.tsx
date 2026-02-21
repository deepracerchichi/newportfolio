import NavBar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";
import ProductViewer from "./components/ProductViewer.tsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import Showcase from "./components/Showcase.tsx";


gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    <main>
        <NavBar />
        <Hero />
        <ProductViewer />
        <Showcase />
    </main>
  )
}

export default App