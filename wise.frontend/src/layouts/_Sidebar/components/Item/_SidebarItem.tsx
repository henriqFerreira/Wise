import { Component } from "react";
import { FaCircleNotch } from "react-icons/fa";
import styles from "./SidebarItem.module.css";

interface Properties {
    isShown: boolean;
    placeholder: string;
}

class SidebarItem extends Component<Properties> {
    render () {
        const { isShown, placeholder } = this.props;

        return (
            <div className={` ${ styles.item } ${ isShown ? styles.expanded : styles.collapsed } `}>
                <FaCircleNotch className={ styles.icon } />
                { isShown ? placeholder : '' }
            </div>
        )
    }
}

export default SidebarItem;