import React from "react";
import styles from "./SignupForm.module.css";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { ChosenForm } from "../../pages/LoginPage/LoginPage";

interface ISignupFormProps {
    onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
    changeForm: React.Dispatch<React.SetStateAction<ChosenForm>>;
}

const SignupForm: React.FC<ISignupFormProps> = ({ onSubmit, changeForm }) => {

    return (
        <form className={styles.form} onSubmit= { (e) => onSubmit(e) }>
            <h2 className={styles.formTitle}>Sign up</h2>
            <div className={styles.inputContainer}>
                <TextInput 
                    id="name" 
                    labelText="Name" 
                    inputName="name"
                    type="text" />
                <TextInput 
                    id="email" 
                    labelText="E-mail" 
                    inputName="email"
                    type="email" />
                <TextInput 
                    id="password" 
                    labelText="Password" 
                    inputName="password"
                    type="password" />
            </div>
            <div className={styles.buttonsContainer}>
                <Button 
                    text="Sign up"
                    className={styles.submitButton}
                    type="submit"
                    />
            </div>
            <div className={styles.otherOptions}>
                <button
                    onClick={ () => changeForm('login') }
                    className={styles.option}
                    >I already have an account</button>
            </div>
        </form>
    )
};

export default SignupForm;