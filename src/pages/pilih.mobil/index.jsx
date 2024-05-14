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
                // onHover();
            } else {
                onLeave();
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [onHover, onLeave, ref]);
    const onClickOver = () => {
        onHover();
    }
    return { refs: ref, onClickOver };
};

const options = [
    { value: 'small', label: '2 - 4 Orang' },
    { value: 'medium', label: '4 - 6 Orang' },
    { value: 'large', label: '6 - 8 Orang' }
];

const priceOptions = [
    { value: 'small', label: '< Rp 400.000' },
    { value: 'medium', label: 'Rp 400.000 > Rp 600.000' },
    { value: 'high', label: '> Rp 400.000' }
];
100000
const statusOptions = [
    { value: true, label: 'Tersedia' },
    { value: false, label: 'Tidak Tersedia' },
];

const isObject = (type) => {
    console.log(type);
    switch (type) {
        case 'small':
            return {
                minPrice: 400000,
                maxPrice: null
            }
        case 'medium':
            return {
                minPrice: 400000,
                maxPrice: 600000
            }
        case 'high':
            return {
                minPrice: 400000,
                maxPrice: 100000000
            }
        default:
            return null
    }
}

const PilihMobil = () => {
    const [openBackdrop, setopenbackdrop] = useState(false);
    const [parameter, setparameter] = useState({
        name: "",
        category: "",
        isRented: null,
        minPrice: null,
        maxPrice: null,
        page: 1,
        pageSize: 12
    })

    const { refs, onClickOver } = useOutsideOver({
        onHover: () => {
            setopenbackdrop(true)
        },
        onLeave: () => {
            setopenbackdrop(false)
        }
    });
    const [data, setdata] = useState(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchApi = (params) => {
        axios.get('https://api-car-rental.binaracademy.org/customer/v2/car', {
            params: {
                ...parameter,
                ...params
            }
        }).then(result => {
            setdata(result?.data?.cars);
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        fetchApi(null);
    }, []);

    const onHandleChange = (_) => {
        const { name, value } = _.target;
        setparameter(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchApi(parameter);
    }
    return (
        <div className="box-card-selected">
            {
                openBackdrop && <div style={{ zIndex: 1, background: '#49494982', left: 0, width: '100%', height: '100%', top: 0, position: 'fixed' }} />
            }
            <div ref={refs} className="card-selected shadow d-flex align-items-center" style={{ zIndex: 10, position: 'relative' }}>
                <div style={{ flex: 1 }}>
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex px-5 gap-3 align-items-center">
                            <div style={{ flex: 1 }}>
                                <label style={{ fontSize: 12 }}>Nama Mobil</label>
                                <div>
                                    <Input
                                        name="name"
                                        onChange={onHandleChange}
                                        onClick={onClickOver}
                                        placeholder="Ketik Nama Mobil"
                                        style={{ height: '36px' }}
                                    />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ fontSize: 12 }}>Kategori</label>
                                <Select onChange={(result) => {
                                    setparameter(prev => ({
                                        ...prev,
                                        category: result?.value
                                    }));
                                }} name="category" options={options} placeholder="Pilih Kategori" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ fontSize: 12 }}>Harga</label>
                                <Select onChange={(result) => {
                                    const params = isObject(result.value);
                                    setparameter(prev => ({
                                        ...prev,
                                        ...params
                                    }));
                                }} name="price" options={priceOptions} placeholder="Pilih Batas Harga" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ fontSize: 12 }}>Status</label>
                                <Select onChange={(result) => {
                                    setparameter(prev => ({
                                        ...prev,
                                        isRented: result?.value
                                    }));
                                }} name="rented" options={statusOptions} placeholder="Pilih Status Sewa" />
                            </div>
                            <button className="hero-btn-banner" style={{ width: '10rem', marginTop: 22 }}>Cari Mobil</button>
                            <button onClick={() => window.location.reload()} type="button" className="hero-btn-banner" style={{ width: '10rem', marginTop: 22 }}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
            {data?.length > 0 && <Row className="pt-4 g-3">
                {
                    data?.map((item, index) => {
                        return <CarList data={item} key={index} />
                    })
                }
                {/* <CarList /> */}
            </Row>}
            {
                data?.length === 0 && <Row className="pt-4 g-3"><div className="text-center">Data Notfound</div></Row>
            }
        </div>
    )
};

const CarList = ({ data }) => {
    console.log(data);
    const navigate = useNavigate();
    return <Col sm={3}>
        <div className="border rounded-md p-4">
            <div className="d-flex gap-2 flex-column justify-content-center">
                <img src={data?.image ?? defaultImage} alt="pict-car" />
                <span style={{ fontSize: 14 }}>{data?.name ?? '-'}</span>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{data?.price ?? '-'} / hari</span>
                <p style={{ fontSize: 14, fontWeight: 600 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <button type="button" onClick={() => {
                const TOKEN = localStorage?.getItem('TOKEN');
                if (TOKEN) {
                    navigate(`/detail/${data?.id}`, { state: data?.id });
                }
                else {
                    navigate('/login');
                }
            }} className="hero-btn-banner w-100">Pilih Mobil</button>
        </div>
    </Col>
}

export default PilihMobil;