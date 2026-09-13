import React from "react";
import styles from "./Switch.module.css";

interface ISwitchProps {
    id: string;
    name: string;
    className?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Switch: React.FC<ISwitchProps> = ({ id, name, className, onChange }) => {

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
                    />
            </label>
        </>
    );
}

export default Switch;