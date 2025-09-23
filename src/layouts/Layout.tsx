import { NavLink, Outlet } from 'react-router-dom';
import type { CSSProperties } from 'react';

const linkStyle: CSSProperties = { textDecoration: 'none', color: 'inherit' };

const Layout = () => {
  return (
    <div>
      <nav
        style={{
          display: 'flex',
          gap: 12,
          padding: 12,
          borderBottom: '1px solid #eee',
        }}
      >
        <NavLink to='/' style={linkStyle}>
          Home
        </NavLink>
        <NavLink to='/about' style={linkStyle}>
          About
        </NavLink>
        <NavLink to='/profile' style={linkStyle}>
          Profile
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
