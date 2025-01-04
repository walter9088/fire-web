import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // 这里可以添加登录逻辑，例如调用API进行验证
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      history.push('/dashboard'); // 登录成功后重定向到仪表盘页面
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;