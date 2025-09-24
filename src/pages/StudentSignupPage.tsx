import { useState } from 'react';
import { Button, Input, Form } from 'antd';

interface StudentFormData {
  name: string;
  university: string;
  year: string;
  email: string;
  password: string;
}

const StudentSignupPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (values: StudentFormData) => {
    setLoading(true);
    try {
      // Handle student registration logic here
      console.log('Student registration:', values);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
      <div className='w-full max-w-md'>
        {/* Main Card */}
        <div className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
          <h1 className='text-2xl font-semibold text-gray-800 text-center mb-8'>
            Student Registration
          </h1>

          <Form
            form={form}
            onFinish={handleRegister}
            layout='vertical'
            className='space-y-6'
            requiredMark={false}
          >
            {/* Name Field */}
            <Form.Item
              name='name'
              label={
                <span className='text-sm font-medium text-gray-700'>Name</span>
              }
              rules={[
                { required: true, message: 'Please enter your full name' },
              ]}
              className='mb-6'
            >
              <Input
                placeholder='Your full name'
                className='!px-4 !py-3 !border-gray-200 !rounded-xl focus:!ring-2 focus:!ring-[#00BDA4] focus:!border-transparent !h-12'
                size='large'
              />
            </Form.Item>

            {/* University Field */}
            <Form.Item
              name='university'
              label={
                <span className='text-sm font-medium text-gray-700'>
                  University
                </span>
              }
              rules={[
                {
                  required: true,
                  message: 'Please enter your university name',
                },
              ]}
              className='mb-6'
            >
              <Input
                placeholder='Your university name'
                className='!px-4 !py-3 !border-gray-200 !rounded-xl focus:!ring-2 focus:!ring-[#00BDA4] focus:!border-transparent !h-12'
                size='large'
              />
            </Form.Item>

            {/* Year Field */}
            <Form.Item
              name='year'
              label={
                <span className='text-sm font-medium text-gray-700'>Year</span>
              }
              rules={[
                { required: true, message: 'Please enter your academic year' },
              ]}
              className='mb-6'
            >
              <Input
                placeholder='e.g., Freshman, Sophomore'
                className='!px-4 !py-3 !border-gray-200 !rounded-xl focus:!ring-2 focus:!ring-[#00BDA4] focus:!border-transparent !h-12'
                size='large'
              />
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
                placeholder='you@example.com'
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
              className='mb-8'
            >
              <Input.Password
                placeholder='Create a password'
                className='!px-4 !py-3 !border-gray-200 !rounded-xl focus:!ring-2 focus:!ring-[#00BDA4] focus:!border-transparent !h-12'
                size='large'
              />
            </Form.Item>

            {/* Register Button */}
            <Form.Item className='mb-0'>
              <Button
                type='primary'
                htmlType='submit'
                loading={loading}
                className='!w-full !h-12 !bg-[#00BDA4] !border-[#00BDA4] hover:!bg-[#00A693] hover:!border-[#00A693] !rounded-xl !font-medium'
                size='large'
              >
                Register
              </Button>
            </Form.Item>
          </Form>
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

export default StudentSignupPage;
