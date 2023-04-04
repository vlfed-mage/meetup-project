import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from '../../styles/main-navigation.module.css';
import { useFavorites } from '../hooks';

const MainNavigation = () => {
    const { total } = useFavorites();

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Meetups</div>
            <ul>
                <li>
                    <NavLink to='/'>All Meetups</NavLink>
                </li>
                <li>
                    <NavLink to='/favorites'>
                        My Favorites <span className={classes.badge}>{total}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new-meetups'>Add New Meetups</NavLink>
                </li>
            </ul>
        </header>
    );
};

export default MainNavigation;
