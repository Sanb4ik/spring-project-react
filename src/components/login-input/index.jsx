const LoginInput = ({ type, placeholder, setValue, isError }) => {
  return (
    <input
      // id={type}
      type={type}
      placeholder={placeholder}
      className={`login-field__input ${isError ? 'error' : 'correct'}`}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default LoginInput;
