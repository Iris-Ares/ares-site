import { Button, ConfigProvider } from 'antd';

import theme from '@/theme/themeConfig';


const ThemeProvider: React.FC<{children:React.ReactNode}>= ({ children }) => {

    return (
        <ConfigProvider theme={theme}>
            {children}
        </ConfigProvider>
    )
}

export default ThemeProvider