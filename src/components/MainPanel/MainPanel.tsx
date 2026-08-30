import React, { useEffect, useState } from "react";
import styles from "./MainPanel.module.css";
import ResetIcon from "../../icons/ResetIcon";
import HabitSheet from "../HabitSheet/HabitSheet";
import CreateHabitControl from "../CreateHabitControl/CreateHabitControl";
import IFilterConditions from "../../interfaces/IFilterConditions";
import Day from "../../types/Day";

const MainPanel: React.FC = () => {

    const READINESS_STATUS_NAME: string = "isDone";
    const STARRED_STATUS_NAME: string = "isStarred";

    const [filter, setFilter] = useState<IFilterConditions>({
        isDone: null,
        isStarred: false
    });

    const handleChangeFilter = (field: EventTarget & HTMLInputElement): void => {
        const name: string = field.name;
        const id: string = field.id;

        if (name === READINESS_STATUS_NAME) {
            setFilter(state => ({
                ...state,
                isDone: id === 'done' ? true : false
            }));
        }

        if (name === STARRED_STATUS_NAME) {
            setFilter(state => ({
                ...state,
                isStarred: !state.isStarred
            }));
        }
    };

    const handleReset = (): void => {

        setFilter({
            isDone: null,
            isStarred: false
        });
    };

    return (
        <>
            <form className={styles.filters} onReset={handleReset}>
                <div className={styles.filter}>
                    <input 
                        id="done"
                        type="radio" 
                        name={READINESS_STATUS_NAME} 
                        checked={filter.isDone ? true : false}
                        onChange={(e) => handleChangeFilter(e.target)} />
                    <label className={styles.filterLabel} htmlFor="done">Done</label>
                </div>
                <div className={styles.filter}>
                    <input 
                        id="undone"
                        type="radio" 
                        name={READINESS_STATUS_NAME}  
                        checked={filter.isDone === false ? true : false}
                        onChange={(e) => handleChangeFilter(e.target)}  />
                    <label className={styles.filterLabel} htmlFor="undone">Undone</label>
                </div>
                <div className={styles.filter}>
                    <input
                        id="starred" 
                        type="checkbox" 
                        name={STARRED_STATUS_NAME} 
                        checked={filter.isStarred ? true : false}
                        onChange={(e) => handleChangeFilter(e.target)} />
                    <label className={styles.filterLabel} htmlFor="starred">⭐</label>
                </div>
                <button className={styles.resetButton} type="reset">
                    <ResetIcon className={styles.resetIcon} />
                </button>
            </form>
            <div className={styles.sheet}>
                <HabitSheet  filter={filter}/>
            </div>
            <CreateHabitControl /> 
        </>        
    );
};

export default MainPanel;