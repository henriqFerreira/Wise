import { Component } from "react";
import LoginForm from "../../modules/Auth/LoginForm/LoginForm";
import styles from "./Login.module.css";

class Login extends Component {
    render () {
        return (
            <main className={ styles.main }>
                <span className={ styles.circle }></span>
                <span className={ styles.circle }></span>
                <span className={ styles.circle }></span>
                <span className={ styles.circle }></span>
                <LoginForm />
            </main>
        )
    }
}

export default Login;