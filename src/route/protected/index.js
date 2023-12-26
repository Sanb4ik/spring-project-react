import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (user) return children;
  else return <Navigate to='/login' replace={true} />;
};

export default ProtectedRoute;
