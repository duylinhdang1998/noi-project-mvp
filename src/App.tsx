import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Suspense } from 'react';
import { router } from './router';
import { appTheme } from './theme';

const App = () => {
  return (
    <ConfigProvider theme={appTheme}>
      <Suspense
        fallback={
          <div className='flex items-center justify-center min-h-screen'>
            Loading...
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
