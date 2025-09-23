import { Navigate, useLocation } from 'react-router-dom';
import type { ReactElement } from 'react';

const getAuthToken = (): string | null => {
  try {
    return localStorage.getItem('token');
  } catch {
    return null;
  }
};

const RequireAuth = ({ children }: { children: ReactElement }) => {
  const location = useLocation();
  const token = getAuthToken();

  if (!token) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
