import React, { FC } from 'react';

import App from './app';
import Layout from '../layout/layout';

const AppWrapper: FC = () => {
    return (
        <div className='container'>
            <Layout>
                <App />
            </Layout>
        </div>
    );
};

export default AppWrapper;
