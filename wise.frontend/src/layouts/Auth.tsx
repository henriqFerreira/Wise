import { Component } from "react";
import { Outlet } from "react-router-dom";
import styles from "./assets/css/AuthApp.module.css";
import "./assets/css/global.css";
import Header from "./_Header/_Header";

export default class Auth extends Component {
    render () {
        return (
            <div className={ styles.content }>
                <Header />
                <Outlet />
            </div>
        );
    }
}