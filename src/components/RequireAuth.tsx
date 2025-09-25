import { Navigate, useLocation } from 'react-router-dom';
import type { ReactElement } from 'react';

interface User {
  id: string;
  role: 'student' | 'organization' | 'admin';
  name: string;
  email: string;
}

const getAuthToken = (): string | null => {
  try {
    return localStorage.getItem('token');
  } catch {
    return null;
  }
};

const getUserData = (): User | null => {
  try {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  } catch {
    return null;
  }
};

interface RequireAuthProps {
  children: ReactElement;
  allowedRoles?: string[];
}

const RequireAuth = ({ children, allowedRoles }: RequireAuthProps) => {
  const location = useLocation();
  const token = getAuthToken();
  const user = getUserData();

  if (!token || !user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
