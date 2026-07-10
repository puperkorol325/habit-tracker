import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage: React.FC = () => {

    type ChosenForm = 'login' | 'signup' | 'reset';

    const [chosenForm, setChosenForm] = useState<ChosenForm>('login');

    return (
        <div className={styles.loginPageWrapper}>
            <div className={styles.loginPanel}>
                <img
                    className={ styles.image }
                    src={ require('../../images/loginpage-img.png') } 
                    alt="Image" />
                <div className={styles.divider}></div>
                <div className={styles.rightBlock}>
                    <div className={styles.titleBlock}>
                        <h1 className={styles.title}>Habit-tracker</h1>
                        <p className={styles.subtitle}>Your saviour in tracking habits</p>
                    </div>
                    {chosenForm === 'login' && (
                        <LoginForm />
                    )}
                </div>
            </div>
        </div>
    )
};

export default LoginPage;