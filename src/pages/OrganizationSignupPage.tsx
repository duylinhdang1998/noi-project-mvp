import { useState } from 'react';
import { Button, Input, Form, Radio } from 'antd';

interface OrganizationFormData {
  organizationName: string;
  type: 'club' | 'company';
  email: string;
  password: string;
}

const OrganizationSignupPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (values: OrganizationFormData) => {
    setLoading(true);
    try {
      // Handle organization registration logic here
      console.log('Organization registration:', values);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    // Handle Google signup logic here
    console.log('Google signup');
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
            Organization Registration
          </h1>

          <Form
            form={form}
            onFinish={handleRegister}
            layout='vertical'
            className='space-y-6'
            requiredMark={false}
            initialValues={{ type: 'club' }}
          >
            {/* Organization Name Field */}
            <Form.Item
              name='organizationName'
              label={
                <span className='text-sm font-medium text-gray-700'>
                  Organization Name
                </span>
              }
              rules={[
                {
                  required: true,
                  message: 'Please enter your organization name',
                },
              ]}
              className='mb-6'
            >
              <Input
                placeholder="Enter your organization's name"
                className='!px-4 !py-3 !border-gray-200 !rounded-xl focus:!ring-2 focus:!ring-[#00BDA4] focus:!border-transparent !h-12'
                size='large'
              />
            </Form.Item>

            {/* Type Selection */}
            <Form.Item
              name='type'
              label={
                <span className='text-sm font-medium text-gray-700'>Type</span>
              }
              rules={[
                { required: true, message: 'Please select organization type' },
              ]}
              className='mb-6'
            >
              <Radio.Group className='flex gap-6'>
                <Radio
                  value='club'
                  className='!text-gray-700 [&_.ant-radio-checked_.ant-radio-inner]:!bg-[#00BDA4] [&_.ant-radio-checked_.ant-radio-inner]:!border-[#00BDA4] [&_.ant-radio:hover_.ant-radio-inner]:!border-[#00BDA4]'
                >
                  Club
                </Radio>
                <Radio
                  value='company'
                  className='!text-gray-700 [&_.ant-radio-checked_.ant-radio-inner]:!bg-[#00BDA4] [&_.ant-radio-checked_.ant-radio-inner]:!border-[#00BDA4] [&_.ant-radio:hover_.ant-radio-inner]:!border-[#00BDA4]'
                >
                  Company
                </Radio>
              </Radio.Group>
            </Form.Item>

            {/* Email Field */}
            <Form.Item
              name='email'
              label={
                <span className='text-sm font-medium text-gray-700'>Email</span>
              }
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
              className='mb-6'
            >
              <Input
                type='email'
                placeholder='organization@example.com'
                className='!px-4 !py-3 !border-gray-200 !rounded-xl focus:!ring-2 focus:!ring-[#00BDA4] focus:!border-transparent !h-12'
                size='large'
              />
            </Form.Item>

            {/* Password Field */}
            <Form.Item
              name='password'
              label={
                <span className='text-sm font-medium text-gray-700'>
                  Password
                </span>
              }
              rules={[
                { required: true, message: 'Please create a password' },
                { min: 6, message: 'Password must be at least 6 characters' },
              ]}
              className='mb-6'
            >
              <Input.Password
                placeholder='Create a secure password'
                className='!px-4 !py-3 !border-gray-200 !rounded-xl focus:!ring-2 focus:!ring-[#00BDA4] focus:!border-transparent !h-12'
                size='large'
              />
            </Form.Item>

            {/* Google Signup Button */}
            <Button
              type='default'
              onClick={handleGoogleSignup}
              className='!w-full !h-12 !bg-[#00BDA4] !border-[#00BDA4] hover:!bg-[#00A693] hover:!border-[#00A693] !text-white !rounded-xl !font-medium !flex !items-center !justify-center !gap-2 !mb-4'
              size='large'
            >
              <svg className='w-5 h-5' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                />
                <path
                  fill='currentColor'
                  d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                />
                <path
                  fill='currentColor'
                  d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                />
                <path
                  fill='currentColor'
                  d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                />
              </svg>
              Sign up with Google
            </Button>

            {/* Register Button */}
            <Form.Item className='mb-0'>
              <Button
                type='primary'
                htmlType='submit'
                loading={loading}
                className='!w-full !h-12 !bg-[#4F46E5] !border-[#4F46E5] hover:!bg-[#4338CA] hover:!border-[#4338CA] !rounded-xl !font-medium'
                size='large'
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default OrganizationSignupPage;
