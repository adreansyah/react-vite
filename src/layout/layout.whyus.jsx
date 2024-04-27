
import ic_complete from '../assets/icon/ic_complete.svg';
import ic_price from '../assets/icon/ic_price.svg';
import ic_24hours from '../assets/icon/ic_24hrs.svg';
import ic_professional from '../assets/icon/ic_professional.svg';

const WhyUs = () => {
    return (
        <section className="container-local section-whyus">
            <div className="section-box-whyu-content">
                <h2 className="section-whyus-title">Why Us?</h2>
                <p className="section-whyus-paragraph">Mengapa harus pilih Binar Car Rental?</p>
                <div className="section-whyus-grid">
                    <div className="section-box-whyus">
                        <span className="section-whyus-icon"><img src={ic_complete} alt="ic-balls" /></span>
                        <h3 className="section-whyus-title">Mobil Lengkap</h3>
                        <p className="section-whyus-paragraph">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                            terawat
                        </p>
                    </div>
                    <div className="section-box-whyus">
                        <span className="section-whyus-icon"><img src={ic_price} alt="ic-balls" /></span>
                        <h3 className="section-whyus-title">Mobil Lengkap</h3>
                        <p className="section-whyus-paragraph">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                            terawat
                        </p>
                    </div>
                    <div className="section-box-whyus">
                        <span className="section-whyus-icon"><img src={ic_professional} alt="ic-balls" /></span>
                        <h3 className="section-whyus-title">Mobil Lengkap</h3>
                        <p className="section-whyus-paragraph">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                            terawat
                        </p>
                    </div>
                    <div className="section-box-whyus">
                        <span className="section-whyus-icon"><img src={ic_24hours}
                            alt="ic-balls" /></span>
                        <h3 className="section-whyus-title">Mobil Lengkap</h3>
                        <p className="section-whyus-paragraph">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                            terawat
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs;