import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import "./index.css"
import App from './App';
import FitnessProvider from './context/fitnessProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <FitnessProvider>
            <App />
        </FitnessProvider>
    </BrowserRouter>
);


