import React, { useState } from 'react';
import api from '../api.js';

const Login = ({ onLogin   }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { username, password });
      const { token } = response.data;
      onLogin (token);
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
