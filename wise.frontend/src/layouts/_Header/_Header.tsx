import { Component } from "react";
import styles from "./Header.module.css";

class Header extends Component {
    render () {
        return (
            <header className={ styles.header }>
                <img src="/images/LogoIpsum.svg" alt="LogoIpsum placeholder" />
            </header>
        );
    }
}

export default Header;