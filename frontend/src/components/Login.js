import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      setToken(response.data.token);
      navigate('/admin');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2 style={{ padding: '20px', textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username: 
          <input type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} required 
          />
        </label>
        <label>
          Password: 
          <input type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} required 
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
