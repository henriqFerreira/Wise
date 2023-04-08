import { Component } from 'react';
import Sidebar from './layouts/_Sidebar/_Sidebar';
import "./assets/css/global.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Assignments from './pages/Assignments/Assignments';
import Rooms from './pages/Rooms/Rooms';
import Pages from './pages/Pages/Pages';

export default class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/assignments' element={ <Assignments /> } />
                    <Route path='/pages' element={ <Pages /> } />
                    <Route path='/rooms' element={ <Rooms /> } />
                </Routes>
            </BrowserRouter>
        );
    }
}