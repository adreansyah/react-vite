import ic_star from '../assets/images/binar.star.png';
import male from '../assets/images/binar.user.testi.male.png';
import female from '../assets/images/binar.user.testi.male.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';

const testimoni = [{
    img: male,
    description: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
    dolor
    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod”`,
    nama: 'John Dee'
}, {
    img: female,
    description: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
    dolor
    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod”`,
    nama: 'John Dee'
}, {
    img: female,
    description: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
    dolor
    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod”`,
    nama: 'John Dee'
}, {
    img: male,
    description: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
    dolor
    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod”`,
    nama: 'John Dee'
}, {
    img: male,
    description: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
    dolor
    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod”`,
    nama: 'John Dee'
}, {
    img: male,
    description: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
    dolor
    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod”`,
    nama: 'John Dee'
}, {
    img: male,
    description: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
    dolor
    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod”`,
    nama: 'John Dee'
}, {
    img: male,
    description: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
    dolor
    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod”`,
    nama: 'John Dee'
}, {
    img: male,
    description: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
    dolor
    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod”`,
    nama: 'John Dee'
}, {
    img: male,
    description: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
    dolor
    sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod”`,
    nama: 'John Dee'
}];

const Testimonial = () => {
    const [data, setdata] = useState(null);
    useEffect(() => {
        setdata(testimoni)
    }, [data]);
    return (
        <section className="carousel">
            <div className="section-carousel-title">
                <h2>Testimonial</h2>
                <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
            <Swiper
                slidesPerView={2}
                slidesPerGroup={2}
                spaceBetween={30}
                centeredSlides={true}
                className='section-box'
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    data?.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="section-carousel" style={{ width: 'auto' }}>
                                    <div className="section-carousel-box">
                                        <div className="section-carousel-component">
                                            <img src={item.img} alt="human-pic" />
                                            <div className="section-content-text">
                                                <div>
                                                    <img src={ic_star} />
                                                    <img src={ic_star} />
                                                    <img src={ic_star} />
                                                    <img src={ic_star} />
                                                    <img src={ic_star} />
                                                </div>
                                                <p>{item?.description}</p>
                                                <p className="text-carousel">{item?.nama}32, Bromo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className="carousel-nav">
                <span className="icon-left"><i className="fa fa-chevron-left"></i></span>
                <span className="icon-right"><i className="fa fa-chevron-right"></i></span>
            </div>
        </section>
    )
}

export default Testimonial;