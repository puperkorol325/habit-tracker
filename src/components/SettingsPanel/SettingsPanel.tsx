import React from "react";
import styles from "./SettingsPanel.module.css";
import Switch from "../Switch/Switch";

const SettingsPanel: React.FC = () => {

    return (
        <>
            <h1 className={styles.title}>Settings</h1>
            <div className={styles.settingsWrapper}>
                <div className={styles.settingField}>
                    <p className={styles.settingName}>Dark theme</p>
                    <Switch
                        id="dark-theme"
                        name="dark-theme"
                        />
                </div>
            </div>
        </>
    );
}

export default SettingsPanel;