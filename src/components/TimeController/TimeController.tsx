import React, { useEffect, useState } from "react";
import styles from "./TimeController.module.css";
import { Days } from "../../types/Day";
import ArrowIconRight from "../../icons/ArrowIconRight";
import { useAppSelector } from "../../hooks/redux-hooks";
import { addDays, format, subDays } from "date-fns";

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
                className={`${styles.arrow} ${days[subDays(shownDays[0], 7).toDateString()] ? '' : styles.disabled}`} 
                onClick={handleToPrevWeek} 
            />
            <p className={styles.period}>{format(shownDays[0], "P")} - {format(shownDays[shownDays.length-1], "P")}</p>
            <ArrowIconRight 
                className={`${styles.arrow} ${days[addDays(shownDays[shownDays.length-1], 7).toDateString()] ? '' : styles.disabled}`} 
                onClick={handleToNextWeek} 
            />
        </div>
    );
};

export default TimeController;