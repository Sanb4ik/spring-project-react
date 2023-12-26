import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LoginPage from '../pages/login';
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
    path: '/login',
    element: <LoginPage />,
  },
]);
