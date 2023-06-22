import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./loginStyle.css"
import google from "./google.png"

const API_BASE_URL = 'https://ft-voosh-xl9m.vercel.app';

function LoginPage() {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URL}/login-user`, {
                phoneNumber,
                password,
                loginBy: 'normal',
            });
            console.log("re", response.data);
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("user", JSON.stringify(response.data.data._id))
            navigate("/user-form")
        } catch (error) {
            console.error(error);
            alert("user not found")
        }
    };

    const handleSignup = () => {
        // 👇️ navigate to /
        navigate('signup');
    };
    const handleGoogle = () => {
        // 👇️ navigate to /
        window.open("https://ft-voosh-xl9m.vercel.app/api/auth/google", "_self");
        navigate("/")
    };
    return (
        <div className='login-container'>
            <div className='login-page'>
                <h2>Login</h2>
                <div className='user-input'>
                    <input
                        className='username-field'
                        type="text"
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
                    /></div>
                <div className='button-group'><button className='login-btn' onClick={handleLogin}>Login</button>
                    <button className='signup-btn' onClick={handleSignup}>Signup</button>
                </div>
                <button className="google-btn" onClick={handleGoogle}><img src={google}></img></button>
            </div>
        </div>
    );
}

export default LoginPage;
