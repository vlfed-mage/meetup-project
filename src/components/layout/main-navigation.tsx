import { NavLink } from 'react-router-dom';

import classes from '../../styles/main-navigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Meetups</div>
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
