import { Input } from "reactstrap";

const PilihMobil = () => {
    return (
        <div className="box-card-selected">
            <div className="card-selected shadow d-flex align-items-center">
                <div style={{ flex: 1 }}>
                    <form>
                        <div className="d-flex px-5 gap-3 align-items-center">
                            <Input style={{ height: '36px' }} />
                            <Input style={{ height: '36px' }} />
                            <Input style={{ height: '36px' }} />
                            <Input style={{ height: '36px' }} />
                            <button className="hero-btn-banner" style={{ width: '25rem' }}>Cari Mobil</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PilihMobil;