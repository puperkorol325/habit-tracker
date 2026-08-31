import React, { useEffect, useState } from "react";
import styles from "./TimeController.module.css";
import { Days } from "../../types/Day";
import ArrowIconRight from "../../icons/ArrowIconRight";
import { useAppSelector } from "../../hooks/redux-hooks";

interface ITimeControllerProps {
    shownDays: string[];
    handleToPrevWeek: () => void;
    handleToNextWeek: () => void;
}

const TimeController: React.FC<ITimeControllerProps> = ({ shownDays, handleToPrevWeek, handleToNextWeek }) => {

    const days = useAppSelector((state) => state.days.days);

    return (
        <div className={styles.timeController}>
            <ArrowIconRight 
                className={`${styles.arrow} ${days[new Date(new Date().setTime(new Date(shownDays[0]).getTime() - 86400000)).toDateString()] ? '' : styles.disabled}`} 
                onClick={handleToPrevWeek} 
            />
            <p className={styles.period}>{shownDays[0]} - {shownDays[shownDays.length-1]}</p>
            <ArrowIconRight 
                className={`${styles.arrow} ${days[new Date(new Date().setTime(new Date(shownDays[shownDays.length-1]).getTime() + 86400000)).toDateString()] ? '' : styles.disabled}`} 
                onClick={handleToNextWeek} 
            />
        </div>
    );
};

export default TimeController;