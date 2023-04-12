import { Component } from "react";
import { Outlet } from "react-router-dom";
import Header from "./layouts/_Header/_Header";
import styles from "./assets/css/AuthApp.module.css";
import "./assets/css/global.css";

export default class AuthApp extends Component {
    render () {
        return (
            <div className={ styles.content }>
                <Header />
                <Outlet />
            </div>
        );
    }
}