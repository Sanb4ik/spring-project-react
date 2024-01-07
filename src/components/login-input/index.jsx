const LoginInput = ({ type = 'text', placeholder, setValue, errorText, isError }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`login-field__input ${errorText || isError ? 'error' : 'correct'}`}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className='input-span'>{errorText}</span>
    </div>
  );
};

export default LoginInput;
