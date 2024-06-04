import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../api';

const Login = ({ role }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(`/${role}/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      if (role === 'admin') history.push('/admin/dashboard');
      else history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;

