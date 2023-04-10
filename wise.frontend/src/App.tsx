import { Component } from 'react';
import Sidebar from './layouts/_Sidebar/_Sidebar';
import "./assets/css/global.css";
import { Outlet } from 'react-router-dom';

export default class App extends Component {
    render () {
        return (
            <>
                <Sidebar />
                <Outlet />
            </>
        );
    }
}