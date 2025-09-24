import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'antd';

const SignupPage = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<
    'student' | 'organization' | null
  >(null);

  const handleContinue = () => {
    if (selectedRole === 'student') {
      navigate('/signup/student');
    } else if (selectedRole === 'organization') {
      navigate('/signup/organization');
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
      <div className='w-full max-w-md'>
        {/* Logo */}
        <div className='text-center mb-8'>
          <div className='text-4xl font-bold text-[#00BDA4] mb-2'>✱NÓI</div>
        </div>

        {/* Main Card */}
        <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
          <h1 className='text-2xl font-semibold text-gray-800 text-center mb-8'>
            Choose Your Role
          </h1>

          {/* Role Selection */}
          <div className='grid grid-cols-2 gap-4 mb-8'>
            {/* Student Option */}
            <Button
              onClick={() => setSelectedRole('student')}
              className={`!h-auto !p-6 !border-2 !rounded-xl !text-center !transition-all ${
                selectedRole === 'student'
                  ? '!border-[#00BDA4] !bg-[#00BDA4]/5 !text-gray-800'
                  : '!border-gray-200 hover:!border-gray-300 !text-gray-800'
              }`}
              type={selectedRole === 'student' ? 'primary' : 'default'}
              ghost={selectedRole === 'student'}
            >
              <div className='flex flex-col items-center'>
                <div className='text-2xl mb-2'>🎓</div>
                <div className='font-medium'>Student</div>
              </div>
            </Button>

            {/* Organization Option */}
            <Button
              onClick={() => setSelectedRole('organization')}
              className={`!h-auto !p-6 !border-2 !rounded-xl !text-center !transition-all ${
                selectedRole === 'organization'
                  ? '!border-[#00BDA4] !bg-[#00BDA4]/5 !text-gray-800'
                  : '!border-gray-200 hover:!border-gray-300 !text-gray-800'
              }`}
              type={selectedRole === 'organization' ? 'primary' : 'default'}
              ghost={selectedRole === 'organization'}
            >
              <div className='flex flex-col items-center'>
                <div className='text-2xl mb-2'>🏢</div>
                <div className='font-medium'>Organization</div>
              </div>
            </Button>
          </div>

          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            disabled={!selectedRole}
            className={`!w-full !h-12 !rounded-xl !font-medium !transition-all ${
              selectedRole
                ? '!bg-[#00BDA4] !border-[#00BDA4] hover:!bg-[#00A693] hover:!border-[#00A693]'
                : '!bg-gray-200 !border-gray-200 !text-gray-400 !cursor-not-allowed'
            }`}
            type='primary'
            size='large'
          >
            Continue
          </Button>

          {/* Login Link */}
          <div className='text-center mt-6'>
            <span className='text-gray-600'>Already have an account? </span>
            <Link
              to='/login'
              className='text-[#00BDA4] hover:text-[#00A693] font-medium'
            >
              Log in
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className='text-center mt-8'>
          <div className='text-sm text-gray-500'>
            Made with{' '}
            <span className='inline-flex items-center'>
              <span className='text-blue-600 font-semibold'>Visily</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
