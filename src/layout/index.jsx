import Banner from "./layout.banner";
import Faq from "./layout.faq";
import Footer from "./layout.footer";
import { Header } from "./layout.header";
import Services from "./layout.services";
import Testimonial from "./layout.testimonial";
import WhyUs from "./layout.whyus";


const Layout = () => {
    return <>
        <Header />
        <Services />
        <WhyUs />
        <Testimonial />
        <Banner />
        <Faq />
        <Footer />
    </>
}

export default Layout;