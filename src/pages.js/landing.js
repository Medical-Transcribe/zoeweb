import Ad from "../components/ad";
import Banner from "../components/banner";
import Choose from "../components/choose";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Offer from "../components/offer";
import Pricing from "../components/pricing";

const Landing = () => {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Offer/>
        <Choose/>
        <Ad/>
        <Pricing/>
        <Banner/>
        <Faq/>
        <Footer/>
        </>
     );
}
 
export default Landing;