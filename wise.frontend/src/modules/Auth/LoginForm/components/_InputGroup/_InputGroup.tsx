import { Component } from "react";
import { IconType } from "react-icons";
import { FaCircleNotch, FaEnvelope, FaEye, FaEyeSlash, FaRegEnvelope, FaUser } from "react-icons/fa";
import styles from "./_InputGroup.module.css";

interface Properties {
    label: string;
    type: string;
    placeholder: string;
    icon: string;
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
        const { label, type, placeholder, icon } = this.props;
        const Icon = InputGroup.iconsMap()[icon] || FaCircleNotch;

        return (
            <label className={ styles.label }>
                { label }
                <div className={ styles.iconGroup }>
                    <input className={ styles.input } type={ type } placeholder={ placeholder } />
                    <Icon className={ styles.icon } />
                </div>
            </label>
        );
    }
}

export default InputGroup;