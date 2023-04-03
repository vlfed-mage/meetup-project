import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
    return (
        <header>
            <div>Meetups</div>
            <ul>
                <li>
                    <NavLink to='/'>All Meetups</NavLink>
                </li>
                <li>
                    <NavLink to='/favorites'>My Favorites</NavLink>
                </li>
                <li>
                    <NavLink to='/new-meetups'>Add New Meetups</NavLink>
                </li>
            </ul>
        </header>
    );
};

export default MainNavigation;
