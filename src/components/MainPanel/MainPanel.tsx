import React, { useState } from "react";
import styles from "./MainPanel.module.css";
import ResetIcon from "../../icons/ResetIcon";
import HabitSheet from "../HabitSheet/HabitSheet";
import CreateHabitControl from "../CreateHabitControl/CreateHabitControl";

const MainPanel: React.FC = () => {

    type FilterConditions = {
        done: boolean;
        starred: boolean;
    }

    return (
        <div className={styles.mainPanel}>
            <form className={styles.filters}>
                <div className={styles.filter}>
                    <input type="radio" name="status" id="done" />
                    <label className={styles.filterLabel} htmlFor="done">Done</label>
                </div>
                <div className={styles.filter}>
                    <input type="radio" name="status" id="undone" />
                    <label className={styles.filterLabel} htmlFor="undone">Undone</label>
                </div>
                <div className={styles.filter}>
                    <input type="checkbox" name="starred" id="starred" />
                    <label className={styles.filterLabel} htmlFor="starred">⭐</label>
                </div>
                <button className={styles.resetButton} type="reset">
                    <ResetIcon className={styles.resetIcon} />
                </button>
            </form>
            <div className={styles.sheet}>
                <HabitSheet />
            </div>
            <CreateHabitControl />          
        </div>
    );
};

export default MainPanel;