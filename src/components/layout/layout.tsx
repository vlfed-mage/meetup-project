import React, { ReactNode } from 'react';

import classes from '../../styles/layout.module.css';

import MainNavigation from './main-navigation';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>{children}</main>
        </div>
    );
};

export default Layout;
