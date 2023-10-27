import React from 'react';
import { Button } from 'antd';
import ThemeProvider from '@/theme/ThemeProvider';

const TestPage: React.FC = () => {


    return (
        <ThemeProvider>
            <div>
                <h1>Test Page</h1>
                <Button type="primary">Button</Button>
            </div>
        </ThemeProvider>
    )
}

export default TestPage