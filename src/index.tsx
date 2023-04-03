import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import AppWrapper from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <Router>
            <AppWrapper />
        </Router>
    </StrictMode>
);
