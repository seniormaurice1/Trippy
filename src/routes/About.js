import Hero from "../components/Hero";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Aboutus from "../components/Aboutus";

function About(){
    return(
        <>
        <Navbar />        
        <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
        />
        <Aboutus />
        <Footer />
        </>
    )
}

export default About;