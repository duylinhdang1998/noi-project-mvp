import { theme } from 'antd';
import type { ThemeConfig } from 'antd';

export const appTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: '#00BDA4FF',
    borderRadius: 8,
  },
  components: {
    Button: {
      borderRadius: 6,
    },
  },
}; 