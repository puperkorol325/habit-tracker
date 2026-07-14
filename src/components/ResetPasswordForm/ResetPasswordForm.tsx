import React from "react";
import styles from "./ResetPasswordForm.module.css";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { ChosenForm } from "../../pages/LoginPage/LoginPage";

interface IResetPasswordFormProps {
    onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
    changeForm: React.Dispatch<React.SetStateAction<ChosenForm>>;
}

const ResetPasswordForm: React.FC<IResetPasswordFormProps> = ({ onSubmit, changeForm }) => {

    return (
        <form className={styles.form} onSubmit= { (e) => onSubmit(e) }>
            <h2 className={styles.formTitle}>Reset password</h2>
            <div className={styles.inputContainer}>
                <TextInput 
                    id="email" 
                    labelText="E-mail" 
                    inputName="email"
                    type="email" />
            </div>
            <div className={styles.buttonsContainer}>
                <Button 
                    text="Reset"
                    className={styles.submitButton}
                    type="submit"
                    />
            </div>
            <div className={styles.otherOptions}>
                <button
                    onClick={ () => changeForm('login') }
                    className={styles.option}
                    >Back to loging in</button>
            </div>
        </form>
    )
};

export default ResetPasswordForm;