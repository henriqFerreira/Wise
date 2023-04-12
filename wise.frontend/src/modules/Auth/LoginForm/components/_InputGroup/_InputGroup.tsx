import { Component } from "react";
import { IconType } from "react-icons";
import { FaCircleNotch, FaEye, FaEyeSlash, FaRegEnvelope, FaUser } from "react-icons/fa";
import styles from "./_InputGroup.module.css";

interface Properties {
    label: string;
    type: string;
    placeholder: string;
    icon: string;
    error: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


class InputGroup extends Component<Properties> {
    static iconsMap () : { [key: string]: IconType } {
        return {
            user: FaUser,
            envelope: FaRegEnvelope,
            eye: FaEye,
            eyeSlash: FaEyeSlash
        }
    }

    render () {
        const { label, type, placeholder, icon, error, value, onChange } = this.props;
        const Icon = InputGroup.iconsMap()[icon] || FaCircleNotch;

        return (
            <label className={ styles.label }>
                { label }
                <div className={ styles.iconGroup }>
                    <input className={ styles.input } type={ type } placeholder={ placeholder } value={ value } onChange={ onChange } />
                    <Icon className={ styles.icon } />
                </div>
                { error !== '' ? <span className={ styles.error }> { error } </span> : '' }
            </label>
        );
    }
}

export default InputGroup;