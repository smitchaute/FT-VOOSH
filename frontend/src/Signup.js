import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css'

const API_BASE_URL = 'https://ft-voosh.vercel.app/api';

function SignupPage() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URL}/add-user`, {
                name,
                phoneNumber,
                password,
            });
            console.log(response.data.message);
            alert(response.data.message)
            navigate("/")
        } catch (error) {
            console.error(error);
        }
    };
    const handleLogin = () => {
        // 👇️ navigate to /
        navigate("/");
    };

    return (
        <div className='login-container'>
            <div className='login-page'>
                <h2>Create User</h2>
                <div className='user-input'>
                    <input
                        className='username-field'
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className='username-field'
                        type="number"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <input
                        className='password-field'
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='button-group'>
                    <button className='signup-btn' onClick={handleSignup}>Submit</button>
                    <button className='login-btn' onClick={handleLogin}>Go To Login</button>
                </div>


            </div >
        </div >
    );
}

export default SignupPage;
