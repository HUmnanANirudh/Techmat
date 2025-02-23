import CompanyInfo from "../components/About/CompanyInfo";
import Mission from "../components/About/Mission";
import Timeline from "../components/About/Timeline";
import Footer from "../components/Footer/footer";
import Head from "../components/Hero/Head";
import Info from "../components/Home/Info";
import Navbar from "../components/Navbar/Navbar";
import Img11 from "../assets/11.webp";
import TeamSection from "../components/About/TeamSection";

const About = () =>{
    return(
      <div className="flex flex-col items-center">
      <div className="fixed top-0 left-0 w-screen z-50 bg-white">
        <Navbar />
      </div>
      <Head img={Img11} text={"About Us"}/>
      <CompanyInfo/>
      <Mission/>
      <TeamSection/>
      <Timeline/>
      <Info/>
      <Footer/>
    </div>
    )
}
export default About;