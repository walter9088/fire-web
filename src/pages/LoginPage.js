import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import styles from './LoginPage.module.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 这里可以添加登录逻辑，例如调用API进行验证
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      // 可以重定向到其他页面
      // window.location.href = '/dashboard';
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form>
        <div className={styles.formGroup}>
          <Input
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button onClick={handleLogin}>Login</Button>
      </form>
    </div>
  );
}

export default LoginPage;