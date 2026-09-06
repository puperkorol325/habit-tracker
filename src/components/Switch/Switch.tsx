import React from "react";
import styles from "./Switch.module.css";

interface ISwitchProps {
    id: string;
    name: string;
    className?: string;
}

const Switch: React.FC<ISwitchProps> = ({ id, name, className }) => {

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
                    />
            </label>
        </>
    );
}

export default Switch;