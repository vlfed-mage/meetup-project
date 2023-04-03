import { Navigate, useRoutes, RouteObject } from 'react-router-dom';

import './app.css';

import { AllMeetups, Favorites, NewMeetups } from '../pages';

const App = () => {
    const routes: RouteObject[] = [
        {
            path: '/',
            element: <AllMeetups />,
        },
        {
            path: '/favorites',
            element: <Favorites />,
        },
        {
            path: '/new-meetups',
            element: <NewMeetups />,
        },
        {
            path: '*',
            element: <Navigate to='/' />,
        },
    ];

    return useRoutes(routes);
};

export default App;
