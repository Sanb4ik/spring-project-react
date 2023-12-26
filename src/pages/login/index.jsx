import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import SpringLogo from '../../components/spring-logo';
import LoginInput from '../../components/login-input';
import useAuth from '../../hooks/useAuth';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { login, isError } = useAuth();

  const navigate = useNavigate();

  function handleClick() {
    login({ userName, password });
    navigate('/');
  }

  return (
    <div className='login-container'>
      <div className='login-form'>
        <SpringLogo />
        <LoginInput type='text' placeholder='Username' setValue={setUserName} isError={isError} />
        <LoginInput
          type='password'
          placeholder='Password'
          setValue={setPassword}
          isError={isError}
        />
        <button className='login-btn' onClick={handleClick}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
