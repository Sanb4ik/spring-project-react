import { useSelector, useDispatch } from 'react-redux';
import { setUser, setError, selectError } from '../store/authSlice';
import { selectUser } from '../store/authSlice';

const useAuth = () => {
  const user = useSelector(selectUser);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  const login = (userData) => {
    if (userData.password === '1234' && userData.userName === 'admin') dispatch(setUser(userData));
    else dispatch(setError());
  };

  return {
    user,
    isError,
    login,
  };
};

export default useAuth;
