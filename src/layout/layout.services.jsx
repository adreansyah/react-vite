import ic_checklist from '../assets/icon/ic_checklist.svg';
import userService from '../assets/images/binar.user.service.png';
const listItem = [{
    icon: ic_checklist,
    text: 'Sewa Mobil Dengan Supir di Bali 12 Jam'
}, {
    icon: ic_checklist,
    text: 'Sewa Mobil Lepas Kunci di Bali 24 Jam'
}, {
    icon: ic_checklist,
    text: 'Sewa Mobil Jangka Panjang Bulanan'
}, {
    icon: ic_checklist,
    text: 'Gratis Antar - Jemput Mobil di Bandara'
}, {
    icon: ic_checklist,
    text: 'Layanan Airport Transfer / Drop In Out'
}];

const Services = () => {

    window.addEventListener('click', (event) => {
        console.log(event);
    });

    return (
        <section className="container">
            <div className="section-services">
                <div className="section-service-image">
                    <img className="section-service-banner" src={userService}
                        alt="introduction-pict" />
                </div>
                <div className="section-information-list">
                    <h2 className="section-service-title">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                    <p className="section-service-paragraph">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                        lebih murah dibandingkan yang lain,
                        kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                        meeting, dll.</p>
                    <ul className="section-service-list">
                        {
                            listItem?.map((item, index) => (
                                <li key={index} className="section-list-style">
                                    <i><img src={item?.icon} /></i>
                                    <span className="section-list-title">{item?.text}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default Services