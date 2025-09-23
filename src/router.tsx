import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './layouts/Layout';
import RequireAuth from './components/RequireAuth';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      {
        path: 'profile',
        element: (
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        ),
      },
      { path: '*', element: <Navigate to='/' replace /> },
    ],
  },
]);
