import { useState } from 'react';
import '../login/index.css';
import SpringLogo from '../../components/spring-logo';
import LoginInput from '../../components/login-input';
import { Link, useNavigate } from 'react-router-dom';
import { createUser, selectErrorMessages, selectIsError } from '../../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const SignUp = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repeat_password, setRepeatPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [age, setAge] = useState(0);

  const isError = useSelector(selectIsError);
  const errorMessages = useSelector(selectErrorMessages);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({ username, password, repeat_password, first_name, last_name, age }));
    if (!isError) {
      navigate('/login');
    }
  };

  return (
    <div className='login-container' onSubmit={handleSubmit}>
      <form className='login-form signup'>
        <SpringLogo />
        <div className='input-container'>
          <LoginInput
            placeholder='Username'
            setValue={setUserName}
            errorText={errorMessages.username}
          />
          <LoginInput
            type='password'
            placeholder='Password'
            setValue={setPassword}
            errorText={errorMessages.password}
          />
          <LoginInput
            type='password'
            placeholder='Repeat password'
            setValue={setRepeatPassword}
            errorText={errorMessages.repeat_password}
          />
          <LoginInput
            placeholder='First Name'
            setValue={setFirstName}
            errorText={errorMessages.first_name}
          />
          <LoginInput
            placeholder='Last Name'
            setValue={setLastName}
            errorText={errorMessages.last_name}
          />
          <LoginInput
            type='number'
            placeholder='Age'
            setValue={setAge}
            errorText={errorMessages.age}
          />
        </div>
        <Link to='/login' className='login_link'>
          Already have an account? Sign In
        </Link>
        <button type='submit' className='login-btn'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
