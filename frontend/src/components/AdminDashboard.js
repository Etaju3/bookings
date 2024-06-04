import React, { useState, useEffect } from 'react';
import api from '../api';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await api.get('/admin/bookings');
      setBookings(res.data);
    };
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/admin/bookings/${id}`);
    setBookings(bookings.filter((booking) => booking._id !== id));
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
              <td>{new Date(booking.date).toLocaleDateString()}</td>
              <td>{booking.time}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(booking._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;

