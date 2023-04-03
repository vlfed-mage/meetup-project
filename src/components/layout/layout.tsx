import React, { FC, ReactNode } from 'react';

import classes from '../../styles/layout.module.css';

import MainNavigation from './main-navigation';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>{children}</main>
        </div>
    );
};

export default Layout;
