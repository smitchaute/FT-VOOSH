import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./userOrderDetails.css"

const API_BASE_URL = 'https://ft-voosh-464zlbcq6-smitchaute.vercel.app';


function OrderDetailsPage() {
    const { userId } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                let user = localStorage.getItem("user")
                console.log("user", typeof user)
                let userId = JSON.parse(user)
                const response = await fetch(`${API_BASE_URL}/get-order?userId=${userId}`);
                const data = await response.json();
                console.log("data", data.orders[0])
                setOrderDetails(data);
            } catch (error) {
                console.error('Error fetching order details:', error);
            }
        };

        fetchOrderDetails();
    }, [userId]);
    console.log("oder", orderDetails)
    if (!orderDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className='login-container'>
            <div className='order-page'>
                <h2 >Order Details</h2>
                <table >
                    <tr>
                        <th>Order ID: </th>
                        <th>Subtotal:</th>
                        <th>Phone Number:</th>
                    </tr>
                    {Array.isArray(orderDetails.orders) && orderDetails.orders.length > 0 ? (
                        orderDetails.orders.map((order, index) => (

                            <tr>
                                <td>{index + 1}</td>
                                <td>{order.subTotal}</td>
                                <td>{order.phoneNumber}</td>
                            </tr>
                        ))
                    ) : (
                        <p>No order details found.</p>
                    )}
                </table>
            </div>
        </div>
    );


}

export default OrderDetailsPage;
