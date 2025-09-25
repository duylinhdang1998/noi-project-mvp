import { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu, Avatar, Dropdown, Badge, Button, Progress } from 'antd';
import type { MenuProps } from 'antd';
import {
  DashboardOutlined,
  FileTextOutlined,
  UserOutlined,
  BellOutlined,
  MessageOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const StudentLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'My Profile',
      onClick: () => navigate('/student/profile'),
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      onClick: () => navigate('/student/settings'),
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: handleLogout,
    },
  ];

  const sidebarItems: MenuProps['items'] = [
    {
      key: '/student/dashboard',
      icon: <DashboardOutlined />,
      label: <Link to='/student/dashboard'>Dashboard</Link>,
    },
    {
      key: '/student/matching',
      icon: <BellOutlined />,
      label: <Link to='/student/matching'>Matching</Link>,
    },
    {
      key: '/student/my-applications',
      icon: <FileTextOutlined />,
      label: <Link to='/student/my-applications'>My Applications</Link>,
    },
    {
      key: '/student/profile',
      icon: <UserOutlined />,
      label: <Link to='/student/profile'>My Profile</Link>,
    },
  ];

  const selectedKey = location.pathname;

  return (
    <Layout className='min-h-screen'>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className='bg-white shadow-lg'
        width={280}
      >
        <div className='flex items-center justify-center p-6 border-b border-gray-200'>
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>✦</span>
            </div>
            {!collapsed && (
              <span className='text-xl font-bold text-teal-600'>logo</span>
            )}
          </div>
        </div>
        <Menu
          theme='light'
          mode='inline'
          selectedKeys={[selectedKey]}
          items={sidebarItems}
          className='border-r-0 pt-4'
        />
      </Sider>

      <Layout>
        <Header className='bg-white shadow-sm px-6 flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <Button
              type='text'
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className='text-lg'
            />
            <div>
              <h1 className='text-xl font-semibold text-gray-800 m-0'>
                Dashboard Overview
              </h1>
              <div className='flex items-center space-x-4 mt-1'>
                <span className='text-sm text-gray-600'>
                  Profile Completion:
                </span>
                <Progress
                  percent={75}
                  size='small'
                  className='w-32'
                  strokeColor='#10b981'
                />
              </div>
            </div>
          </div>

          <div className='flex items-center space-x-4'>
            <Badge count={5}>
              <Button
                type='text'
                icon={<MessageOutlined />}
                size='large'
                className='text-gray-600'
              />
            </Badge>
            <Badge count={3}>
              <Button
                type='text'
                icon={<BellOutlined />}
                size='large'
                className='text-gray-600'
              />
            </Badge>
            <Button
              type='text'
              icon={<SettingOutlined />}
              size='large'
              className='text-gray-600'
            />

            <Dropdown menu={{ items: userMenuItems }} placement='bottomRight'>
              <div className='flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg'>
                <Avatar
                  size={40}
                  src='/public/J1.jpg'
                  className='border-2 border-gray-200'
                />
                <div className='text-right'>
                  <div className='text-sm font-medium text-gray-800'>
                    John Doe
                  </div>
                  <div className='text-xs text-gray-500'>Student</div>
                </div>
              </div>
            </Dropdown>
          </div>
        </Header>

        <Content className='p-6 bg-gray-50 min-h-screen'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default StudentLayout;
