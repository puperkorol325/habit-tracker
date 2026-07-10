import React from "react";
import styles from "./LoginForm.module.css";

const LoginForm: React.FC = () => {

    return (
        <form className={styles.form}>
            <h2 className={styles.formTitle}>Log in</h2>
            <div className={styles.fieldContainer}>
                <label className={styles.label} htmlFor="email">E-mail</label>
                <input className={[styles.loginInputText, "defaultInput"].join(" ")} type="email" name="email" id="email"/>
            </div>
        </form>
    )
};

export default LoginForm;