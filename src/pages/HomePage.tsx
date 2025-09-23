import HowItWorks from '@/components/Landing/HowItWorks';
import KeyFeatures from '@/components/Landing/KeyFeatures';
import { Button, Card, Col, Divider, Row, Space, Tag, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

const testimonials = [
  {
    quote:
      'NỐI transformed my campus experience! I found the perfect debate club that aligned with all my interests.',
    author: 'Sarah J.',
    meta: 'Student, University of Arts',
  },
  {
    quote:
      'Finding dedicated volunteers used to be a challenge. NỐI helped us connect with passionate students effortlessly.',
    author: 'David L.',
    meta: 'Club President, Tech Innovators',
  },
  {
    quote:
      'The two-way rating system is brilliant! It ensures quality interactions and accountability for both students and organizations.',
    author: 'Emily R.',
    meta: 'Student Activities Coordinator',
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('token', 'demo-token');
    navigate('/profile', { replace: true });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
  };

  const hasToken = !!localStorage.getItem('token');

  return (
    <main>
      {/* Hero */}
      <section className='py-12 pt-12'>
        <div className='max-w-7xl mx-auto px-4 py-10'>
          <Row gutter={[32, 32]} align='middle'>
            <Col xs={24} md={12}>
              <Space direction='vertical' size={16} className='w-full'>
                <Tag color='success' className='w-fit'>
                  Campus Connections
                </Tag>
                <Title className='!m-0'>
                  Nối – AI Matching Platform for Students and Clubs
                </Title>
                <Paragraph type='secondary' className='!mb-0'>
                  Discover ideal clubs or find the perfect members with
                  intelligent AI matching, fostering vibrant campus communities.
                </Paragraph>
                <Space size='middle' wrap>
                  {!hasToken ? (
                    <Button type='primary' size='large' onClick={handleLogin}>
                      Join as Student
                    </Button>
                  ) : (
                    <Button size='large' onClick={handleLogout}>
                      Logout (remove token)
                    </Button>
                  )}
                  <Button size='large' onClick={() => navigate('/profile')}>
                    Join as Organization
                  </Button>
                </Space>
              </Space>
            </Col>
            <Col xs={24} md={12}>
              <img
                src='/banner.png'
                alt='Home Page'
                className='w-full h-full'
              />
            </Col>
          </Row>
        </div>
      </section>

      <Divider className='!m-0' />

      {/* Features */}
      <KeyFeatures />

      <Divider className='!m-0' />

      {/* How It Works */}
      <HowItWorks />

      <Divider className='!m-0' />

      {/* Testimonials */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 py-10'>
          <Title level={3} className='text-center'>
            What Our Users Say
          </Title>
          <Row gutter={[16, 16]} className='mt-4'>
            {testimonials.map((t) => (
              <Col key={t.author} xs={24} md={8}>
                <Card bordered className='h-full flex flex-col'>
                  <Paragraph className='mb-3 flex-1'>"{t.quote}"</Paragraph>
                  <Space direction='horizontal' size={10} className='mt-auto'>
                    <img
                      src='https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt='avatar'
                      className='w-10 h-10 rounded-full'
                    />
                    <div className='flex flex-col gap-y-0'>
                      <Text strong>{t.author}</Text>
                      <Text type='secondary'>{t.meta}</Text>
                    </div>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* CTA banner */}
      <section className='py-16 bg-emerald-50 border-t border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 py-10'>
          <Row gutter={[16, 16]} align='middle' justify='space-between'>
            <Col xs={24} md={16}>
              <Title level={3} className='!m-0'>
                Ready to Transform Your Campus Connection?
              </Title>
              <Paragraph type='secondary' className='mt-2'>
                Join thousands of students and organizations building stronger,
                more vibrant campus communities.
              </Paragraph>
            </Col>
            <Col xs={24} md={8}>
              <Space size='middle' wrap>
                <Button type='primary' size='large' onClick={handleLogin}>
                  Join as Student
                </Button>
                <Button size='large' onClick={() => navigate('/profile')}>
                  Join as Organization
                </Button>
              </Space>
            </Col>
          </Row>
        </div>
      </section>

      {/* Footer (simple) */}
      <footer>
        <div className='max-w-7xl mx-auto px-4 py-6'>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Space direction='vertical' size={8}>
                <Title level={5} className='!m-0'>
                  Nối
                </Title>
                <Paragraph type='secondary' className='!m-0'>
                  Connecting students and clubs effortlessly.
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} md={16}>
              <Space size='large' wrap>
                <Link to='/about' className='text-primary hover:text-gray-800'>
                  Features
                </Link>
                <Link to='/about' className='text-primary hover:text-gray-800'>
                  How It Works
                </Link>
                <Link to='/about' className='text-primary hover:text-gray-800'>
                  Testimonials
                </Link>
              </Space>
            </Col>
          </Row>
          <Divider className='my-4' />
          <Text type='secondary'>© 2025 Nối. All rights reserved.</Text>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
