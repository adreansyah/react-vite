import Banner from '../../assets/images/binar.login.page.png';
import { Input } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [state, setState] = useState({
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
        axios.post('https://api-car-rental.binaracademy.org/customer/auth/login', { ...body }).then(result => {
            console.log(result?.data?.access_token);
            localStorage.setItem("TOKEN", result?.data?.access_token)
        }).catch(error => {
            console.log(error);
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchApi(state);

    }
    return <div className="d-flex justify-content-between align-items-center ">
        <div className='d-flex container gap-3 flex-column justify-content-center' style={{ flex: '1', paddingLeft: '12rem', paddingRight: '12rem' }}>
            <div style={{ width: 100, height: 34, background: '#CFD4ED' }} />
            <h2 style={{ fontWeight: '700', fontSize: 24 }}>Welcome Back !</h2>
            <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column gap-3'>
                    <div>
                        <label>Email</label>
                        <Input onChange={handleChange} name='email' />
                    </div>
                    <div>
                        <label>Password</label>
                        <Input onChange={handleChange} name='password' />
                    </div>
                    <div>
                        <button type='submit' style={{ width: '100%', background: '#0D28A6' }} className='btn btn-sm btn-primary'>Sign In</button>
                    </div>
                </div>
            </form>
        </div>
        <div style={{ objectFit: 'cover' }}>
            <img src={Banner} />
        </div>
    </div >
}

export default Login;