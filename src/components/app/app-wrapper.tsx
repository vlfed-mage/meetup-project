import React from 'react';

import App from './app';
import MainNavigation from '../layout/main-navigation';

const AppWrapper = () => {
    return (
        <div className='container'>
            <MainNavigation />
            <App />
        </div>
    );
};

export default AppWrapper;
