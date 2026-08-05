import React, { useEffect, useState } from "react";
import styles from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";
import RegistrationFunctions from "../../classes/RegistrationFuntions";

export type ChosenForm = 'login' | 'signup' | 'reset';

const LoginPage: React.FC = () => {

    const [chosenForm, setChosenForm] = useState<ChosenForm>('login');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const loginFormOnSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data: FormData = new FormData(e.target);
        
        const email = (data.get("email")?.toString() || null);
        const password = (data.get("password")?.toString() || null);

        const response = await RegistrationFunctions.logInUser(email, password);
        if (response === true) {
            
        }else {
            setErrorMessage(response);
        }
    };

    const signupFormOnSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data: FormData = new FormData(e.target);
        
        const email = (data.get("email")?.toString() || null);
        const password = (data.get("password")?.toString() || null);
        const name = (data.get("name")?.toString() || null);

        const response = await RegistrationFunctions.signUpUser(email, password, name);

        if (response === true) {
            
        }else {
            setErrorMessage(response)
        }
        return;
    };

    const resetFormOnSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        return;
    };

    useEffect(() => {
        setErrorMessage('');
    }, [chosenForm]);

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
                        <LoginForm
                            onSubmit={loginFormOnSubmit}
                            changeForm={setChosenForm}
                            />
                    )}
                    {chosenForm === 'signup' && (
                        <SignupForm
                            onSubmit={signupFormOnSubmit}
                            changeForm={setChosenForm}
                            />
                    )}
                    {chosenForm === 'reset' && (
                        <ResetPasswordForm
                            onSubmit={resetFormOnSubmit}
                            changeForm={setChosenForm}
                            />
                    )}
                    <p className={styles.errorMessage}>{errorMessage}</p>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;