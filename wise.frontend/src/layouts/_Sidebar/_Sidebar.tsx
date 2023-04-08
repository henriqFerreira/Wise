import { Component } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import styles from "./Sidebar.module.css";
import SidebarItem from "./components/SidebarItem/_SidebarItem";

interface State {
    Shown: boolean
}

class Sidebar extends Component<{}, State> {
    state: State = {
        Shown: true
    }

    toggle (): void {
        this.setState(() => ({ Shown: !this.state.Shown }));
    }

    render () {
        return (
            <aside className={`${ styles.aside } ${ this.state.Shown ? styles.expanded : styles.collapsed }`}>
                <button className={ styles.toggleAside } onClick={ () => this.toggle() }>
                    { this.state.Shown ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft /> }
                </button>
                <div className={ styles.items }>
                    <SidebarItem to="/" isShown={ this.state.Shown } placeholder="Home" icon="home" />
                    <SidebarItem to="/assignments" isShown={ this.state.Shown } placeholder="Assignments" icon="" />
                    <SidebarItem to="/rooms" isShown={ this.state.Shown } placeholder="Rooms" icon="graduationCap" />
                    <SidebarItem to="/pages" isShown={ this.state.Shown } placeholder="Pages" icon="book" />
                </div>
            </aside>
        )
    }
}

export default Sidebar;