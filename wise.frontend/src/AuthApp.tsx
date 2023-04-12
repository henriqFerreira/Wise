import { Component } from "react";
import { Outlet } from "react-router-dom";
import Header from "./layouts/_Header/_Header";
import "./assets/css/AuthApp.css";

export default class AuthApp extends Component {
    render () {
        return (
            <>
                <Header />
                <Outlet />
            </>
        );
    }
}