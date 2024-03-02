import CarBanner from '../assets/images/binar.car.banner.png';
import Button from '../components/Button';
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
    return (
        <header className="container header-banner">
            <div className="header-nav">
                <div className="header-logo">
                </div>
                <ul className="header-navlink">
                    {urlLink?.map((item, index) => (
                        <li key={index}>{item?.navName}</li>
                    ))}
                </ul>
                <div className='btn-responsive'>
                    <button id="btn-open" className="btn-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div id="toggle" className="responsive-nav">
                        <ul className="navbar">
                            {urlLink?.map((item, index) => (
                                <li key={index}>{item?.navName}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="hero-banner">
                <div>
                    <h1 className="hero-title">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p className="hero-paragraph">Selamat datang di Binar Car Rental. Kami menyediakan mobil
                        kualitas terbaik
                        dengan harga terjangkau.
                        Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <div className="btn-mulai-sewa">
                        <Button type="button" id="change-color" className="hero-btn-banner">Mulai Sewa Mobil</Button>
                    </div>
                </div>
                <div className="hero-banner-car-grid">
                    <div className="hero-banner-car">
                        <img className="car-banner" src={CarBanner} alt="hero-banner-pic" />
                    </div>
                </div>
            </div>
        </header>
    )
}