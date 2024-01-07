import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LoginPage from '../pages/login';
import SignUp from '../pages/signup';
import ProtectedRoute from './protected';

export const router = createBrowserRouter([
  {
    path: '',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);
