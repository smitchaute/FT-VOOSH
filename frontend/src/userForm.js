import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./user-add.css"

const API_BASE_URL = 'http://localhost:3000/api';

function UserFormPage() {
    const navigate = useNavigate();
    const [subTotal, setSubTotal] = useState('');
    const [orderPhoneNumber, setOrderPhoneNumber] = useState('');

    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token"); // Get token from login response or local storage
            const user = JSON.parse(localStorage.getItem("user"))
            const response = await axios.post(
                `${API_BASE_URL}/add-order`,
                {
                    userId: user, // Get user ID from login response or local storage
                    subTotal,
                    phoneNumber: orderPhoneNumber,
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log(response.data.message);
        } catch (error) {
            console.error(error);
        }
        navigate("/api/get-order")
    };

    return (
        <div className='login-container'>
            <div className='login-page'>
                <h2 style={{ color: "white" }}>Add User</h2>
                <div className='user-input'>
                    <input
                        type="number"
                        className='username-field'
                        placeholder="Sub Total"
                        value={subTotal}
                        onChange={(e) => setSubTotal(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className='username-field'
                        placeholder="Phone Number"
                        value={orderPhoneNumber}
                        onChange={(e) => setOrderPhoneNumber(e.target.value)}
                        required
                    />
                </div>

                <button className='signup-btn' onClick={handleAddUser}>Add Order</button>
            </div>
        </div>

    );
}

export default UserFormPage;
