import { FC } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import './app.css';

import { AllMeetups, Favorites, NewMeetups } from '../pages';

const App: FC = () => {
    return useRoutes([
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
    ]);
};

export default App;
