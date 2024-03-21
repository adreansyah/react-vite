import { useEffect } from "react";
import { requestListUsers } from "../store/actions/action.example";
import Banner from "./layout.banner";
import Faq from "./layout.faq";
import Footer from "./layout.footer";
import { Header } from "./layout.header";
import Services from "./layout.services";
import Testimonial from "./layout.testimonial";
import WhyUs from "./layout.whyus";
import { useDispatch, useSelector } from 'react-redux';
import { requestedAsynchronous } from "../store/reducers/toolkit.trial";

const Layout = () => {
    const { loading } = useSelector(state => state.toolkitTrial);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(requestedAsynchronous());
    }, [dispatch]);

    if (loading === 'in_progress') return <div style={{ fontWeight: 'bold', alignItems: 'center', display: "flex", justifyContent: "center", height: '100vh', fontSize: 32 }}>TUNGGU YA LAGI DI MASAK</div>
    else if (loading === 'failed') return <div style={{ fontWeight: 'bold', alignItems: 'center', display: "flex", justifyContent: "center", height: '100vh', fontSize: 32 }}>PESANAN GAGAL BUAT</div>
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