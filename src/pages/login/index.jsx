import { useState } from 'react';
import './index.css';
import SpringLogo from '../../components/spring-logo';
import LoginInput from '../../components/login-input';
import { useAuth } from '../../hooks';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { login, isError } = useAuth();

  const navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
    if (!isError) navigate('/');
  };

  return (
    <div className='login-container' onSubmit={handleSubmit}>
      <form className='login-form'>
        <SpringLogo />
        <div className='input-container'>
          <LoginInput type='text' placeholder='Username' setValue={setUserName} isError={isError} />
          <LoginInput
            type='password'
            placeholder='Password'
            setValue={setPassword}
            isError={isError}
          />
        </div>
        <Link to='/signup' className='login_link'>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account? Sign Up
        </Link>
        <button type='submit' className='login-btn'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
