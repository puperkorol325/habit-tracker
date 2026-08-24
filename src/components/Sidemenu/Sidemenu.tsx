import React from "react";
import styles from "./Sidemenu.module.css";
import ProfileIcon from "../../icons/ProfileIcon";
import HomeIcon from "../../icons/HomeIcon";
import SettingsIcon from "../../icons/SettingsIcons";
import { NavLink, useNavigate } from "react-router";

const Sidemenu: React.FC = () => {

    return (
        <div className={styles.sidemenu}>
            <nav className={styles.nav}>
                <NavLink to="/home" className={({ isActive }) => isActive ?  `${styles.active} ${styles.navItem}` : `${styles.navItem}`}>
                    <HomeIcon className={styles.icon}/> 
                    Home
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => isActive ?  `${styles.active} ${styles.navItem}` : `${styles.navItem}`}>
                    <ProfileIcon className={styles.icon}/> 
                    Profile
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ?  `${styles.active} ${styles.navItem}` : `${styles.navItem}`}>
                    <SettingsIcon className={styles.icon}/> Settings
                </NavLink>
            </nav>
        </div>
    )
};

export default Sidemenu;