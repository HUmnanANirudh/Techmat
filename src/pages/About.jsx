import CompanyInfo from "../components/About/CompanyInfo";
import Mission from "../components/About/Mission";
import Timeline from "../components/About/Timeline";
import Footer from "../components/Footer/footer";
import Head from "../components/Hero/Head";
import Info from "../components/Home/Info";
import Navbar from "../components/Navbar/Navbar";

const About = () =>{
    return(
      <div className="flex flex-col items-center">
      <div className="fixed top-0 left-0 w-screen z-50 bg-white">
        <Navbar />
      </div>
      <Head img={"https://www.dl.dropboxusercontent.com/scl/fi/hsf7nimxv8l5chd650okw/WhatsApp-Image-2025-01-31-at-18.05.42_cb091032.webp?rlkey=yn83ftmoc5pyiszvd99sm8dun&st=x6jknx15&dl=0"} text={"About Us"}/>
      <CompanyInfo/>
      <Mission/>
      <Timeline/>
      <Info/>
      <Footer/>
    </div>
    )
}
export default About;