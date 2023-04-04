import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import AppWrapper from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
import { FavoritesContextProvider } from './store/favorites-context';

const rootElement = document.getElementById('root') as HTMLElement;

if (!rootElement) {
    throw new Error("Couldn't find 'root' element");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
    <StrictMode>
        <FavoritesContextProvider>
            <Router>
                <AppWrapper />
            </Router>
        </FavoritesContextProvider>
    </StrictMode>
);
