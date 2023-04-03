import React from 'react';

import App from './app';
import Layout from '../layout/layout';

const AppWrapper = () => {
    return (
        <div className='container'>
            <Layout>
                <App />
            </Layout>
        </div>
    );
};

export default AppWrapper;
