import { useSelector, useDispatch } from 'react-redux';
import { selectError, createUser } from '../store/authSlice';
import { selectUser } from '../store/authSlice';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  const login = (userData) => {
    dispatch(createUser(userData));
  };

  return {
    user,
    isError,
    login,
  };
};
