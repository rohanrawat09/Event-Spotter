import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div id='main'>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className='childDiv'>
       Email:
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div className='childDiv'>
        Password:
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <div className='childDiv'>
      <button type="submit">Login</button>
      </div>
      
    </form>
    </div>
  );
};

export default Login;
