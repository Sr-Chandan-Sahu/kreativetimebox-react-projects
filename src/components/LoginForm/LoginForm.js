import React, { useState } from 'react';
import './LoginForm.css'
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    (username === 'chandan' && password === 'chandan123') ? (setLoggedIn(true)) : setError('Invalid username or password')
  };

  return (
    <div className='container'>
      {loggedIn ? (
        <div className='home-page'>Welcome, {username}!</div>
      ) : (<form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {error && alert(error)}
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
      )}
    </div>
  );
};

export default LoginForm