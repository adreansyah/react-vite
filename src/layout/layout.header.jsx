import { useState } from 'react';
import CarBanner from '../assets/images/binar.car.banner.png';
import Button from '../components/Button';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../helper/generics';
// import axios from 'axios';

const urlLink = [{
    link: "#",
    navName: 'Our Services'
}, {
    link: "#",
    navName: 'Why Us'
}, {
    link: "#",
    navName: 'Testimonials'
}, {
    link: "#",
    navName: 'FAQ'
}];

export const Header = () => {
    const [open, setopen] = useState(false); //tutup
    const navigate = useNavigate()
    const { pathname } = useLocation();
    const { state: id } = useLocation();
    const [istoggle, settoggle] = useState(false);
    // const [data, setdata] = useState(null);
    const toggle = () => {
        setopen(!open);
    }
    // const fetchApi = () => {
    //     axios.get(`https://api-car-rental.binaracademy.org/customer/car/${id}`).then(result => {
    //         console.log(result);
    //     })
    // }
    // useEffect(() => {
    //     fetchApi();
    // }, []);
    const isLogout = () => {
        localStorage.removeItem('TOKEN');
        navigate('/');
        settoggle(false);
    }
    if (pathname === '/register') return <></>
    if (pathname === '/login') return <></>
    return (
        <header className="container-local header-banner">
            <div className="header-nav">
                <div className="header-logo">
                </div>
                <ul className="header-navlink">
                    {urlLink?.map((item, index) => (
                        <li key={index}>{item?.navName}</li>
                    ))}
                    {!isLoggedIn() && <li className='d-flex gap-2'>
                        <NavLink to='/register'>
                            <button type='button' className='hero-btn-banner btn-sm'>Register</button>
                        </NavLink>
                        <NavLink to='/login'>
                            <button type='button' className='hero-btn-banner btn-sm'>Login</button>
                        </NavLink>
                    </li>}
                    {isLoggedIn() && <li className='d-flex align-items-center gap-2 position-relative' style={{ cursor: 'pointer' }}>
                        <div style={{ padding: 3 }} className='rounded-circle border px-2'><i className='fa fa-user' /></div>
                        <span style={{ fontSize: 12 }}>jhon Doe</span>
                        <span onClick={() => settoggle(!istoggle)}><i className='fa fa-chevron-down' style={{ fontSize: 12 }} /></span>
                        {istoggle && <div className='position-absolute' style={{ background: 'white', zIndex: 10, width: '12rem', top: '2rem', left: '-2rem' }}>
                            <div onClick={isLogout} className='d-flex p-2 gap-4' style={{ alignItems: 'center' }}>
                                <i className='fa fa-sign-out' style={{ fontSize: 14 }} />
                                <span style={{ fontSize: 14 }}>Logout</span>
                            </div>
                        </div>}
                    </li>}
                </ul>
                <div className='btn-responsive'>
                    <button onClick={toggle} type='button' className="btn-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    {open && <div id="toggle" className="responsive-nav">
                        <ul className="navbar">
                            <li>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span> BCR</span>
                                    <button onClick={toggle} style={{ border: 0, background: 'white', fontSize: 24 }}><i className='fa fa-times'></i></button>
                                </div>
                            </li>
                            {urlLink?.map((item, index) => (
                                <li key={index}>{item?.navName}</li>
                            ))}
                        </ul>
                    </div>}
                </div>
            </div>

            <div className="hero-banner">
                {!id && <div>
                    <h1 className="hero-title">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p className="hero-paragraph">Selamat datang di Binar Car Rental. Kami menyediakan mobil
                        kualitas terbaik
                        dengan harga terjangkau.
                        Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <div className="btn-mulai-sewa">
                        <NavLink style={{ textDecoration: 'none' }} to={`/pilih-mobil`}>
                            <Button type="button" id="change-color" className="hero-btn-banner">Mulai Sewa Mobil</Button>
                        </NavLink>
                    </div>
                </div>}
                {!id && <div className="hero-banner-car-grid">
                    <div className="hero-banner-car">
                        <img className="car-banner" src={CarBanner} alt="hero-banner-pic" />
                    </div>
                </div>}
            </div>
        </header>
    )
}