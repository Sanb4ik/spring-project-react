import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, selectIsError } from '../store/userSlice';
import { getAccessToken } from '../utils';

export const useAuth = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);

  const login = async (userData) => {
    dispatch(loginUser(userData));
  };

  const getUsername = () => {
    const accessToken = getAccessToken();
    const decodedToken = jwtDecode(accessToken);
    return decodedToken.username;
  };

  return {
    isError,
    login,
    getUsername,
  };
};
