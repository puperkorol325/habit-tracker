import React from "react";
import styles from "./Sidemenu.module.css";
import ProfileIcon from "../../icons/ProfileIcon";
import HomeIcon from "../../icons/HomeIcon";
import SettingsIcon from "../../icons/SettingsIcons";

const Sidemenu: React.FC = () => {

    return (
        <div className={styles.sidemenu}>
            <nav className={styles.nav}>
                <li className={`${styles.navItem} ${styles.active}`}><HomeIcon className={styles.icon}/> Home</li>
                <li className={styles.navItem}><ProfileIcon className={styles.icon}/> Profile</li>
                <li className={styles.navItem}><SettingsIcon className={styles.icon}/> Settings</li>
            </nav>
        </div>
    )
};

export default Sidemenu;