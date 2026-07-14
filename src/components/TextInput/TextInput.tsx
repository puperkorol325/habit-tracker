import React from "react";
import styles from "./TextInput.module.css";
import { InputType } from "zlib";

interface ITextInputProps {
    id: string;
    labelText: string;
    inputName: string;
    type: "email" | "date" | "text" | "url" | "tel" | "password";
}

const TextInput: React.FC<ITextInputProps> = (props: ITextInputProps) => {

    return (
        <div className={styles.fieldContainer}>
            <label className={styles.label} htmlFor={ props.id }>{ props.labelText }</label>
            <input className={[styles.input].join(" ")} type={ props.type } name={ props.inputName } id={ props.id }/>
        </div>
    );
}

export default TextInput