import { Col, Input, Row } from "reactstrap";
import Select from 'react-select'
import { useEffect, useRef, useState } from "react";
import defaultImage from '../../assets/images/binar.default.car.png';
import axios from "axios";
import { useNavigate } from "react-router";

const useOutsideOver = ({
    onHover,
    onLeave
}) => {
    const ref = useRef();
    useEffect(() => {
        const handleClick = (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                onHover();
            } else {
                onLeave();
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [onHover, onLeave, ref]);
    return ref;
};

const options = [
    { value: 'small', label: '2 - 4 Orang' },
    { value: 'medium', label: '4 - 6 Orang' },
    { value: 'large', label: '6 - 8 Orang' }
];

const priceOptions = [
    { value: 400000, label: '< Rp 400.000' },
    { value: 600000, label: 'Rp 400.000 > Rp 600.000' },
    { value: 400000, label: '> Rp 400.000' }
];

const statusOptions = [
    { value: true, label: 'Tersedia' },
    { value: false, label: 'Tidak Tersedia' },
];


const PilihMobil = (props) => {
    console.log(props);
    const [openBackdrop, setopenbackdrop] = useState(false);
    const refs = useOutsideOver({
        onHover: () => {
            setopenbackdrop(true)
        },
        onLeave: () => {
            setopenbackdrop(false)
        }
    });
    const [data, setdata] = useState(null);
    const fetchApi = () => {
        axios.get('https://api-car-rental.binaracademy.org/customer/v2/car').then(result => {
            setdata(result?.data?.cars);
        }).catch(error => {
            console.log(error);
        })
    }
    useEffect(() => {
        fetchApi();
    }, []);
    return (
        <div className="box-card-selected">
            {
                openBackdrop && <div style={{ zIndex: 1, background: '#49494982', left: 0, width: '100%', height: '100%', top: 0, position: 'fixed' }} />
            }            <div className="card-selected shadow d-flex align-items-center" style={{ zIndex: 10, position: 'relative' }}>
                <div style={{ flex: 1 }}>
                    <form>
                        <div className="d-flex px-5 gap-3 align-items-center">
                            <div style={{ flex: 1 }}>
                                <label style={{ fontSize: 12 }}>Nama Mobil</label>
                                <div ref={refs}>
                                    <Input
                                        placeholder="Ketik Nama Mobil"
                                        style={{ height: '36px' }}
                                    />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ fontSize: 12 }}>Kategori</label>
                                <Select options={options} placeholder="Pilih Kategori" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ fontSize: 12 }}>Harga</label>
                                <Select options={priceOptions} placeholder="Pilih Batas Harga" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ fontSize: 12 }}>Status</label>
                                <Select options={statusOptions} placeholder="Pilih Status Sewa" />
                            </div>
                            <button className="hero-btn-banner" style={{ width: '10rem', marginTop: 22 }}>Cari Mobil</button>
                        </div>
                    </form>
                </div>
            </div>
            <Row className="pt-4 g-3">
                {
                    data?.map((item, index) => {
                        return <CarList data={item} key={index} />
                    })
                }
                <CarList />
            </Row>
        </div>
    )
};

const CarList = ({ data }) => {
    const navigate = useNavigate();
    return <Col sm={3}>
        <div className="border rounded-md p-4">
            <div className="d-flex gap-2 flex-column justify-content-center">
                <img src={data?.image ?? defaultImage} alt="pict-car" />
                <span style={{ fontSize: 14 }}>Innova</span>
                <span style={{ fontSize: 16, fontWeight: 600 }}>Rp 500.000 / hari</span>
                <p style={{ fontSize: 14, fontWeight: 600 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <button type="button" onClick={() => {
                const TOKEN = localStorage?.getItem('TOKEN');
                if (TOKEN) {
                    console.log(TOKEN);
                    navigate('/payment');
                }
                else {
                    navigate('/login');
                }
            }} className="hero-btn-banner w-100">Pilih Mobil</button>
        </div>
    </Col>
}

export default PilihMobil;