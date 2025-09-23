import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ConfigProvider } from 'antd';
import { appTheme } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={appTheme}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  </StrictMode>
);
