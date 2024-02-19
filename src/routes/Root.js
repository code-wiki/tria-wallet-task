import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/store';
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';

export default function Root() {
    const store = configureStore();
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}
