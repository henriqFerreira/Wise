import { Component } from "react";
import InputGroup from "./components/_InputGroup/_InputGroup";
import styles from "./LoginForm.module.css";

interface Properties {
    onSubmit: (email: string, password: string) => void;
}

interface State {
    email: string;
    password: string;
}

class LoginForm extends Component<Properties, State> {
    state: State = {
        email: "",
        password: ""
    };

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(() => ({ email: event.target.value }));
    }

    handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(() => ({ password: event.target.value }));
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.onSubmit(email, password);
    }

    render () {
        return (
            <form className={ styles.form } onSubmit={ this.handleSubmit }>
                <h2>Log-in</h2>
                <h4>Please, enter your credentials.</h4>
                <hr />
                <InputGroup
                    label="Email"
                    type="text"
                    placeholder="email@exemplo.com"
                    icon="envelope"
                    error=""
                    value={ this.state.email }
                    onChange={ this.handleEmailChange }
                />
                <InputGroup
                    label="Password"
                    type="password"
                    placeholder="•••••••••••"
                    icon="eye"
                    error=""
                    value={ this.state.password }
                    onChange={ this.handlePasswordChange }
                />
                <button className={ styles.loginButton }>Log-in</button>
            </form>
        );
    }
}

export default LoginForm;