import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './Signup';
import UserFormPage from './userForm';
import OrderDetailsPage from './UserOrderDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user-form" element={<UserFormPage />} />
        <Route path="/api/get-order" element={<OrderDetailsPage />} />
      </Routes>
    </Router>
  );
}


export default App;
