import { Component } from 'react';
import Sidebar from './layouts/_Sidebar/_Sidebar';
import "./assets/css/global.css";

export default class App extends Component {
    render () {
        return (
            <>
            <Sidebar />
            </>
        );
    }
}