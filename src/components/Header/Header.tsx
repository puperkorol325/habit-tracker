import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import LocalStorageInteractions from "../../classes/LocalStorageInteractions";

const Header: React.FC = () => {

    const [username, setUsername] = useState<string | null>("");

    useEffect(() => {
        setUsername(LocalStorageInteractions.getName());
    }, []);

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Habit-tracker</h1>
            <div className={styles.profileInfoContainer}>
                <p className={styles.username}>{username}</p>
                <img className={styles.pfp} src={require("../../images/default-pfp.jpg")} alt="Profile picture" />
            </div>
        </header>
    )
};

export default Header;