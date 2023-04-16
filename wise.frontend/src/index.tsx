import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './layouts/App';
import Auth from './layouts/Auth';
import Home from './pages/Home/Home';
import Assignments from './pages/Assignments/Assignments';
import Pages from './pages/Pages/Pages';
import Rooms from './pages/Rooms/Rooms';
import Login from './pages/Login/Login';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App /> }>
                    <Route index element={ <Home /> } />
                    <Route path='assignments' element={ <Assignments /> } />
                    <Route path='pages' element={ <Pages /> } />
                    <Route path='rooms' element={ <Rooms /> } />
                </Route>
                <Route path='/' element={ <Auth /> }>
                    <Route path='login' element={ <Login /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);