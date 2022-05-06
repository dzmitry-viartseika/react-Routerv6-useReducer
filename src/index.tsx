import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';
import DashboardPage from './pages/DashboardPage';
import ErrorPage from "./pages/ErrorPage";
import SharedLayout from "./layouts/SharedLayout";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/users' element={<UsersPage />} />
                    <Route path='/posts' element={<PostsPage />} />
                    <Route path='*' element={<ErrorPage />} />
                </Route>
                // Nested routes
                <Route path='/dashboard' element={<DashboardPage />}>
                    <Route path='stats' element={<div>stats</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
document.getElementById('root'),
);
