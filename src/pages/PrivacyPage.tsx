import { Link } from 'react-router-dom';

const PrivacyPage = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
      <div className='w-full max-w-2xl'>
        <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
          <h1 className='text-3xl font-semibold text-gray-800 mb-6 text-center'>
            Privacy Policy
          </h1>
          <p className='text-gray-600 mb-6 text-center'>
            This is a placeholder for the privacy policy page.
          </p>
          <div className='text-center'>
            <Link
              to='/login'
              className='inline-block px-6 py-2 bg-[#00BDA4] text-white rounded-lg hover:bg-[#00A693] transition-colors'
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
