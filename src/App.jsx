import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"

//pages
import About from "./pages/About"
import Home from "./pages/Home"
import Service from "./pages/Service"
import Contact from "./pages/Contact"
import Infra from "./pages/Infra"
import Quality from "./pages/Quality"
import { MetalLab } from "./pages/MetalLab"

const PageTransition = () => {
  const location = useLocation();
  return(
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<PageWrapper><Home/></PageWrapper>}/>
        <Route path="/about" element={<PageWrapper><About/></PageWrapper>}/>
        <Route path="/service" element={<PageWrapper><Service/></PageWrapper>}/>
        <Route path="/quality">
        <Route path="/quality/metallurgy_lab" element={<PageWrapper><MetalLab/></PageWrapper>}/>
        <Route path="/quality/certificates" element={<PageWrapper><Quality/></PageWrapper>}/>
        <Route path="/quality/scada_&_qualitytools" element={<PageWrapper><Quality/></PageWrapper>}/>
        <Route path="/quality/quality_policy" element={<PageWrapper><Quality/></PageWrapper>}/>
        </Route>
        <Route path="/infrasturcture" element={<PageWrapper><Infra/></PageWrapper>}/>
        <Route path="/contact" element={<PageWrapper><Contact/></PageWrapper>}/>
      </Routes>
    </AnimatePresence>
  )
} 

function App() {
  return (
    <BrowserRouter>
      <PageTransition/>
    </BrowserRouter>
  )
}
const PageWrapper = ({children}) =>{
  return(
    <motion.div
    initial={{opacity:0 , y:20}}
    animate={{opacity:1,y:0}}
    exit={{opacity:0,y:-20}}
    transition={{duration:0.4,ease:"easeInOut"}}>
      {children}
    </motion.div>
  )
}


export default App
