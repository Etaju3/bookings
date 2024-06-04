import React from 'react';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Service Booking App</h1>
      <BookingForm />
      <div className="mt-3">
        <Link to="/client/login">Client Login</Link> | <Link to="/admin/login">Admin Login</Link>
      </div>
    </div>
  );
};

export default Home;

