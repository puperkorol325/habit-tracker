import React from "react";
import styles from "./Button.module.css";

interface IButtonProps {
    type: "button" | "submit" | "reset";
    className: string;
    text: string;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {

    return (
        <button type={props.type} className={[styles.button, props.className].join(' ')}>{props.text}</button>
    )
};

export default Button;