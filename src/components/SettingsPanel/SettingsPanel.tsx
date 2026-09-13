import React from "react";
import styles from "./SettingsPanel.module.css";
import Switch from "../Switch/Switch";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { switchDarkTheme } from "../../state/uiVariablesSlice";

const SettingsPanel: React.FC = () => {

    const dispatch = useAppDispatch();
    const isDarkTheme: boolean = useAppSelector((state) => state.uiVariables.darkTheme);

    const darkThemeChangeHandler = (): void => {
        dispatch(switchDarkTheme());
    }

    return (
        <>
            <h1 className={styles.title}>Settings</h1>
            <div className={styles.settingsWrapper}>
                <div className={styles.settingField}>
                    <p className={styles.settingName}>Dark theme</p>
                    <Switch
                        id="dark-theme"
                        name="dark-theme"
                        onChange={darkThemeChangeHandler}
                        checked={isDarkTheme}
                        />
                </div>
            </div>
        </>
    );
}

export default SettingsPanel;