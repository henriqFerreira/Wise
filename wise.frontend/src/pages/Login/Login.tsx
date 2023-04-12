import { Component } from "react";
import LoginForm from "../../modules/Auth/LoginForm/LoginForm";
import styles from "./Login.module.css";

class Login extends Component {

    handleLogin = async (email: string, password: string) => {

    }

    render () {
        return (
            <main className={ styles.main }>
                <span className={ styles.circle }></span>
                <span className={ styles.circle }></span>
                <span className={ styles.circle }></span>
                <span className={ styles.circle }></span>
                <LoginForm onSubmit={ this.handleLogin } />
            </main>
        )
    }
}

export default Login;