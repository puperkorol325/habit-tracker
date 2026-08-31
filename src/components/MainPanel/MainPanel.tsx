import React, { useEffect, useState } from "react";
import styles from "./MainPanel.module.css";
import ResetIcon from "../../icons/ResetIcon";
import HabitSheet from "../HabitSheet/HabitSheet";
import CreateHabitControl from "../CreateHabitControl/CreateHabitControl";
import IFilterConditions from "../../interfaces/IFilterConditions";
import Day, { Days } from "../../types/Day";
import { useAppSelector } from "../../hooks/redux-hooks";
import TimeController from "../TimeController/TimeController";

const MainPanel: React.FC = () => {

    const READINESS_STATUS_NAME: string = "isDone";
    const STARRED_STATUS_NAME: string = "isStarred";

    const days = useAppSelector((state) => state.days.days);
    const [currentStartOfTheWeek, setCurrentStartOfTheWeek] = useState<Date>(new Date());

    const [filter, setFilter] = useState<IFilterConditions>({
        isDone: null,
        isStarred: false
    });

    const [shownDays, setShownDays] = useState<string[]>([]);

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

    const handleToPrevWeek = (): void => {
        setCurrentStartOfTheWeek(new Date(currentStartOfTheWeek.setDate(currentStartOfTheWeek.getDate() - 7)));
    }

    const handleToNextWeek = (): void => {
        setCurrentStartOfTheWeek(new Date(currentStartOfTheWeek.setDate(currentStartOfTheWeek.getDate() + 7)));
    }

    // setup this week
    useEffect(() => {
        const today = new Date();
        const todayDayOfWeek = new Date().getDay();

        const beginingOfTheWeek = new Date();

        beginingOfTheWeek.setDate(today.getDate() - todayDayOfWeek);

        setCurrentStartOfTheWeek(new Date(beginingOfTheWeek.toDateString()));
    }, []);

    useEffect(() => {
        getWeek();
    }, [currentStartOfTheWeek]);

    function getWeek(): void {
        setShownDays([]);
        const current = new Date(currentStartOfTheWeek);
        for (let i = 0; i < 7; i++) {
            const dayCopy = new Date(current);
            if (days[dayCopy.toDateString()]) {
                setShownDays(state => [...state, dayCopy.toDateString()]);
            }

            current.setDate(current.getDate() + 1);
        }
    }

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
                <HabitSheet shownDays={shownDays} filter={filter}/>
            </div>
            <CreateHabitControl /> 
            <TimeController 
                shownDays={shownDays} 
                handleToNextWeek={handleToNextWeek} 
                handleToPrevWeek={handleToPrevWeek} 
            />
        </>        
    );
};

export default MainPanel;