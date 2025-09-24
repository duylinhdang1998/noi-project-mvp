import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const menus = [
  {
    label: 'Home',
    to: '#',
  },
  {
    label: 'About',
    to: '#',
  },
  {
    label: 'Features',
    to: '#',
  },
  {
    label: 'Contact',
    to: '#',
  },
];

export default function Navbar() {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-xs'>
      <div className='flex items-center justify-between container mx-auto py-2'>
        <Link to='/'>
          <img src='/logo.jpeg' alt='Noi' className='w-full h-12' />
        </Link>
        <div className='flex items-center gap-4'>
          {menus.map((menu) => (
            <Link
              key={menu.label}
              to={menu.to}
              className='text-black hover:text-primary transition-all'
            >
              {menu.label}
            </Link>
          ))}
        </div>
        <div className='flex items-center gap-x-3'>
          <Button href='/login' type='primary'>
            Sign In
          </Button>
          <Button href='/signup'>Sign Up</Button>
        </div>
      </div>
    </div>
  );
}
