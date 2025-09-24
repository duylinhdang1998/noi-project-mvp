import { Button, Input } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', { email, password });
    }, 1000);
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className='min-h-screen bg-white flex items-center justify-center px-4 relative'>
      {/* Main Login Card */}
      <div className='w-full max-w-md'>
        {/* Logo */}
        <Link to='/' className='text-center mb-8'>
          <img
            src='/logo.jpeg'
            alt='Noi'
            className='w-full h-auto object-contain'
          />
        </Link>

        {/* Login Form */}
        <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
          <h2 className='text-2xl font-semibold text-gray-800 text-center mb-8'>
            Log in to your account
          </h2>

          <div className='space-y-6'>
            {/* Email Field */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Email
              </label>
              <Input
                type='email'
                placeholder='john.doe@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                size='large'
                className='rounded-lg'
                aria-label='Email address'
                tabIndex={0}
              />
            </div>

            {/* Password Field */}
            <div>
              <div className='flex justify-between items-center mb-2'>
                <label className='block text-sm font-medium text-gray-700'>
                  Password
                </label>
                <Link
                  to='/forgot-password'
                  className='text-sm text-[#00BDA4] hover:text-[#00A693] font-medium'
                  tabIndex={0}
                >
                  Forgot password?
                </Link>
              </div>
              <Input.Password
                placeholder='••••••••'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                size='large'
                className='rounded-lg'
                aria-label='Password'
                tabIndex={0}
              />
            </div>

            {/* Login Button */}
            <Button
              type='primary'
              size='large'
              block
              loading={isLoading}
              onClick={handleLogin}
              className='rounded-lg font-medium h-12 bg-[#00BDA4] hover:bg-[#00A693] border-[#00BDA4] hover:border-[#00A693]'
              tabIndex={0}
              aria-label='Log in to account'
            >
              Log In
            </Button>

            {/* Google Login Button */}
            <Button
              size='large'
              block
              onClick={handleGoogleLogin}
              className='rounded-lg font-medium h-12 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-800'
              icon={<span className='mr-2'>🔍</span>}
              tabIndex={0}
              aria-label='Log in with Google'
            >
              Log In with Google
            </Button>

            {/* Sign Up Link */}
            <div className='text-center pt-4'>
              <span className='text-gray-600'>Don't have an account? </span>
              <Link
                to='/signup'
                className='text-[#00BDA4] hover:text-[#00A693] font-medium'
                tabIndex={0}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
