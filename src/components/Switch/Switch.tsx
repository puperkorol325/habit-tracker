import React from "react";
import styles from "./Switch.module.css";

interface ISwitchProps {
    id: string;
    name: string;
    className?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
}

const Switch: React.FC<ISwitchProps> = ({ id, name, className, onChange, checked }) => {

    return (
        <>
            <label 
                className={`${styles.switch} ${className}`}
                >
                <input
                    id={id}
                    name={name}
                    className={styles.checkbox}
                    type="checkbox"
                    onChange={onChange}
                    checked={checked}
                    />
            </label>
        </>
    );
}

export default Switch;