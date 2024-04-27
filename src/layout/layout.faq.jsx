const Faq = () => {
    return (
        <section className="container-local section-faq">
            <div className="section-title-faq">
                <h2>Frequently Asked Question</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <ul className="section-list-faq">
                <li className="box-list-faq">
                    <span>Apa saja syarat yang dibutuhkan?</span>
                    <i className="fa fa-chevron-down"></i>
                </li>
                <li className="box-list-faq">
                    <span>Berapa hari minimal sewa mobil lepas kunci?</span>
                    <i className="fa fa-chevron-down"></i>
                </li>
                <li className="box-list-faq">
                    <span>Berapa hari sebelumnya sabaiknya booking sewa mobil?</span>
                    <i className="fa fa-chevron-down"></i>
                </li>
                <li className="box-list-faq">
                    <span>Apakah Ada biaya antar-jemput?</span>
                    <i className="fa fa-chevron-down"></i>
                </li>
                <li className="box-list-faq">
                    <span>Bagaimana jika terjadi kecelakaan</span>
                    <i className="fa fa-chevron-down"></i>
                </li>
            </ul>
        </section>
    )
}

export default Faq;