import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div id='main'>
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div  class="childDiv" id='name'>
       Full Name:
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
    
      <div class="childDiv" id="email">
        Email:
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div class="childDiv" id='password'>
        Password:
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <div>
      <button type="submit">Signup</button>
      </div>
    </form>
    </div>
  );
};

export default Signup;
