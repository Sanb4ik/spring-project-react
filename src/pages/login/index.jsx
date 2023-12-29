import { useEffect, useState } from 'react';
import './index.css';
import SpringLogo from '../../components/spring-logo';
import LoginInput from '../../components/login-input';
import { useAuth } from '../../hooks';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { login, isError, user } = useAuth();

  const navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    login({ userName, password });
  };

  useEffect(() => {
    if (user) navigate('/');
  }, [user]);

  return (
    <div className='login-container' onSubmit={handleSubmit}>
      <form className='login-form'>
        <SpringLogo />
        <LoginInput type='text' placeholder='Username' setValue={setUserName} isError={isError} />
        <LoginInput
          type='password'
          placeholder='Password'
          setValue={setPassword}
          isError={isError}
        />
        <button type='submit' className='login-btn'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
