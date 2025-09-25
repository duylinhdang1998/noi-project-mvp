import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import StudentLayout from './layouts/StudentLayout';
import RequireAuth from './components/RequireAuth';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import StudentSignupPage from './pages/StudentSignupPage';
import OrganizationSignupPage from './pages/OrganizationSignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

// Student Pages
import StudentDashboardPage from './pages/StudentDashboardPage';
import StudentMatchingPage from './pages/StudentMatchingPage';
import StudentProjectDetailPage from './pages/StudentProjectDetailPage';
import StudentMyApplicationsPage from './pages/StudentMyApplicationsPage';
import StudentProfilePage from './pages/StudentProfilePage';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/signup/student',
    element: <StudentSignupPage />,
  },
  {
    path: '/signup/organization',
    element: <OrganizationSignupPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/privacy',
    element: <PrivacyPage />,
  },
  {
    path: '/terms',
    element: <TermsPage />,
  },
  {
    path: '/student',
    element: (
      <RequireAuth allowedRoles={['student']}>
        <StudentLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: 'dashboard',
        element: <StudentDashboardPage />,
      },
      {
        path: 'matching',
        element: <StudentMatchingPage />,
      },
      {
        path: 'project/:projectId',
        element: <StudentProjectDetailPage />,
      },
      {
        path: 'my-applications',
        element: <StudentMyApplicationsPage />,
      },
      {
        path: 'profile',
        element: <StudentProfilePage />,
      },
      {
        index: true,
        element: <Navigate to='dashboard' replace />,
      },
    ],
  },
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
