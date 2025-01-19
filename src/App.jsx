import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"

//pages
import About from "./pages/About"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

const PageTransition = () => {
  const location = useLocation();
  return(
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<PageWrapper><Home/></PageWrapper>}/>
        <Route path="/about">
          <Route path="/about/Company" element={<PageWrapper><About/></PageWrapper>}/>
        </Route>
        <Route path="/service" element={<PageWrapper><Services/></PageWrapper>}/>
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
