import Navbar from "../components/Navbar/Navbar"
import Head from "../components/Hero/Head";
import Footer from "../components/Footer/footer";
import Table from "../components/Infra/Table";
import Info from "../components/Home/Info";
import Contact from "../components/cards/Contact";

const data = [
  { type: "Sealed Quench Furnace", capacity: "1000kg", units: 3 },
  { type: "Sealed Quench Furnace", capacity: "1200kg", units: 2 },
  { type: "Gas Nitriding Furnace", capacity: "600kg", units: 2 },
  { type: "Gas Carburizing Furnace", capacity: "600kg", units: 3 },
  { type: "Shot Blasting - Tumblast", capacity: "N/A", units: 1 },
  { type: "Shot Blasting - Table Type", capacity: "N/A", units: 1 },
  { type: "Fully Equipped Metallurgy Lab", capacity: "N/A", units: 3 }
];

const Infra = () =>{
    return(
    <div className="flex flex-col items-center gap-2">
      <div className="fixed top-0 left-0 w-screen z-50 bg-white">
        <Navbar />
      </div>
      <Head img={"https://accuratebearing.in/wp-content/uploads/2023/01/heattreatment.jpg"} text={"Our Infrastructure"}/>
     <Table data={data}/>
     
     <Contact/>
     <Info/>
      <Footer/>
      </div>
    )
}
export default Infra;