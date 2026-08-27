import React from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router";

const NotFound: React.FC = () => {

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>PAGE IS NOT FOUND</h2>
            <Link className={styles.returnButton} to='/home'>BACK TO HOME</Link>
        </div>
    );
};

export default NotFound;