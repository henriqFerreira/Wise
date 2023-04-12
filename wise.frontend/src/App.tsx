import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './layouts/_Sidebar/_Sidebar';
import styles from "./assets/css/App.module.css";
import "./assets/css/global.css";

export default class App extends Component {
    render () {
        return (
            <div className={ styles.content }>
                <Sidebar />
                <Outlet />
            </div>
        );
    }
}