import Banner from '../../assets/images/binar.login.page.png';
import { Input } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    });
    const handleChange = (event) => {
        const { value, name } = event.target;
        setState((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const fetchApi = (body) => {
        axios.post('https://api-car-rental.binaracademy.org/customer/auth/register', { ...body }).then(() => {
            toast('Akun Berhasil Terbuat, silahkan login', { position: 'top-right', type: 'success' });
        }).catch(error => {
            toast(error?.response?.data?.message, { position: 'top-right', type: 'error', theme: 'colored' });
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchApi(state);

    }
    return <div className="d-flex justify-content-between align-items-center" style={{ height: '100vh' }}>
        <div className='d-flex container gap-3 flex-column justify-content-center' style={{ flex: '1', paddingLeft: '12rem', paddingRight: '12rem' }}>
            <div style={{ width: 100, height: 34, background: '#CFD4ED' }} />
            <h2 style={{ fontWeight: '700', fontSize: 24 }}>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column gap-3'>
                    <div>
                        <label style={{ fontSize: 12 }}>Name*</label>
                        <Input onChange={handleChange} name='name' placeholder='Nama Lengkap' />
                    </div>
                    <div>
                        <label style={{ fontSize: 12 }}>Email*</label>
                        <Input onChange={handleChange} name='email' placeholder='Email' />
                    </div>
                    <div>
                        <label style={{ fontSize: 12 }}>Create Password*</label>
                        <Input onChange={handleChange} type='password' name='password' placeholder='password' />
                    </div>
                    <div>
                        <button type='submit' style={{ width: '100%', background: '#0D28A6' }} className='btn btn-sm btn-primary'>Sign In</button>
                    </div>
                </div>
            </form>
            <div className='py-2' style={{ fontSize: 14, fontWeight: 500 }}>Already have an account? <Link to='/login'>Sign In Here</Link></div>
        </div>
        <div style={{ height: '100vh' }}>
            <img src={Banner} />
        </div>
    </div >
}

export default Register;