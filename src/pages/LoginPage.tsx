import { useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values: { email: string; password: string }) => {
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock login - set student role for demo
      const mockUser = {
        id: '1',
        name: 'John Doe',
        email: values.email,
        role: 'student' as const,
      };

      localStorage.setItem('token', 'mock-jwt-token');
      localStorage.setItem('user', JSON.stringify(mockUser));

      message.success('Login successful!');
      navigate('/student/dashboard');
    } catch {
      message.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div className='text-center'>
          <div className='w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4'>
            <span className='text-white font-bold text-2xl'>✦</span>
          </div>
          <h2 className='text-3xl font-bold text-gray-900'>
            Sign in to your account
          </h2>
          <p className='mt-2 text-sm text-gray-600'>
            Use any email and password to login as a student
          </p>
        </div>

        <Card className='shadow-lg'>
          <Form
            name='login'
            initialValues={{ remember: true }}
            onFinish={handleLogin}
            layout='vertical'
            size='large'
          >
            <Form.Item
              name='email'
              label='Email'
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input
                prefix={<UserOutlined className='text-gray-400' />}
                placeholder='Enter your email'
              />
            </Form.Item>

            <Form.Item
              name='password'
              label='Password'
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className='text-gray-400' />}
                placeholder='Enter your password'
              />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                loading={loading}
                className='w-full bg-teal-500 hover:bg-teal-600 border-teal-500 h-12'
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>

          <div className='text-center'>
            <p className='text-sm text-gray-600'>
              Demo: Use any email/password to login as a student
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
