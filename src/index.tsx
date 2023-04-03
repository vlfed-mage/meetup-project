import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import AppWrapper from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root') as HTMLElement;

if (!rootElement) {
    throw new Error("Couldn't find 'root' element");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
    <StrictMode>
        <Router>
            <AppWrapper />
        </Router>
    </StrictMode>
);
