import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
      <div className='w-full max-w-md text-center'>
        <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
          <h1 className='text-2xl font-semibold text-gray-800 mb-4'>
            Forgot Password
          </h1>
          <p className='text-gray-600 mb-6'>
            This is a placeholder for the forgot password page.
          </p>
          <Link
            to='/login'
            className='inline-block px-6 py-2 bg-[#00BDA4] text-white rounded-lg hover:bg-[#00A693] transition-colors'
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
