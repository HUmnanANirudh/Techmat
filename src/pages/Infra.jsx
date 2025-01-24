import Navbar from "../components/Navbar/Navbar"
import Head from "../components/Hero/Head";
import Footer from "../components/Footer/footer";
import Table from "../components/Infra/Table";
import Info from "../components/Home/Info";
import Contact from "../components/cards/Contact";
const Infra = () =>{
    return(
    <div className="flex flex-col items-center gap-2">
      <div className="fixed top-0 left-0 w-screen z-50 bg-white">
        <Navbar />
      </div>
      <Head img={"https://accuratebearing.in/wp-content/uploads/2023/01/heattreatment.jpg"} text={"Our Infrastructure"}/>
     <Table/>
     <Contact/>
     <Info/>
      <Footer/>
      </div>
    )
}
export default Infra;