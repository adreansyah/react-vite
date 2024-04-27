import Banner from "../../layout/layout.banner";
import Faq from "../../layout/layout.faq";
import Services from "../../layout/layout.services";
import Testimonial from "../../layout/layout.testimonial";
import WhyUs from "../../layout/layout.whyus";

const Home = () => {
    return (
        <>
            <Services />
            <WhyUs />
            <Testimonial />
            <Banner />
            <Faq />
        </>
    );
};

export default Home;