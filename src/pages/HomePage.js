import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function HomePage() {
  return (
    <div>
      <h1>Welcome to My Web App</h1>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
}

export default HomePage;