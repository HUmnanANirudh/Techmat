import CompanyInfo from "../components/About/CompanyInfo";
import Mission from "../components/About/Mission";
import Timeline from "../components/About/Timeline";
import Footer from "../components/Footer/footer";
import Head from "../components/Hero/Head";
import Navbar from "../components/Navbar/Navbar";

const About = () =>{
    return(
        <div className="flex flex-col items-center gap-2">
      <div className="fixed top-0 left-0 w-screen z-50 bg-white">
        <Navbar />
      </div>
      <Head img={"https://www.unithermfurnaces.com/frontend/assets/images/aboutusBanner.webp"} text={"About Us"}/>
      <CompanyInfo/>
      <Timeline/>
      <Mission/>
      <Footer/>
    </div>
    )
}
export default About;