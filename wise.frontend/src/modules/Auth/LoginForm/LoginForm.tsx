import { Component } from "react";
import InputGroup from "./components/_InputGroup/_InputGroup";
import styles from "./LoginForm.module.css";

class LoginForm extends Component {

    handleSubmit () {

    }

    render () {
        return (
            <form className={ styles.form }>
                <h2>Log-in</h2>
                <h4>Please, enter your credentials.</h4>
                <hr />
                <InputGroup label="Email" type="text" placeholder="email@exemplo.com" icon="envelope" error="" />
                <InputGroup label="Password" type="password" placeholder="•••••••••••" icon="eye" error="" />
                <button className={ styles.loginButton }>Log-in</button>
            </form>
        );
    }
}

export default LoginForm;