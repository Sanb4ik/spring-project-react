import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

const ProtectedRoute = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken');
  const { isError } = useAuth();

  if (accessToken && !isError) return children;
  else return <Navigate to='/login' replace={true} />;
};

export default ProtectedRoute;
