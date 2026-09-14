import React, { useEffect, useState } from "react";
import styles from "./HabitSheet.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { checkHabit, uncheckHabit } from "../../state/daySlice";
import { starHabit } from "../../state/habitSlice";
import IFilterConditions from "../../interfaces/IFilterConditions";
import Day, { Days } from "../../types/Day";
import { format } from "date-fns";

interface IHabitSheetProps {
    filter: IFilterConditions;
    shownDays: string[];
}

const HabitSheet: React.FC<IHabitSheetProps> = ({ filter, shownDays }) => {

    const dispatch = useAppDispatch();
    const habits = useAppSelector((state) => state.habits.habits);
    const days = useAppSelector((state) => state.days.days);

    const handleChangeHabitStatus = (habitId: number, isChecked: boolean, date: string): void => {

        if (isChecked) {
            dispatch(uncheckHabit({ habitId, date }));
        }else {
            dispatch(checkHabit({ habitId, date }));
        }
    }

    const handleStarHabit = (habitId: number): void => {

        dispatch(starHabit(habitId));
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>⭐</th>
                    <th>Habit</th>
                    {
                        shownDays.map(item => {

                            return (
                                <th data-tooltip={format(item, 'PPPP')} key={item}>{`${format(new Date(item), 'PP')}`}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    habits.map(habit => {

                        let filterResult: boolean = true;
                        const today: string = new Date().toDateString();

                        if (filter.isDone !== null) {
                            const todayHabitStatus: boolean | undefined = days[today].includes(habit.id);

                            if (todayHabitStatus !== filter.isDone) {
                                filterResult = false;
                            }
                        }

                        if (filter.isStarred && !habit.starred) {
                            filterResult = false;
                        }

                        if (filterResult) {
                            return (
                                <tr key={habit.id}>
                                    <td>
                                        <input 
                                            type="checkbox" 
                                            checked={habit.starred ? true : false}
                                            onChange={() => handleStarHabit(habit.id)}
                                            />
                                    </td>
                                    <td>{habit.title}</td>
                                    {
                                        shownDays.map(item => {

                                            const isHabitDone = days[item].includes(habit.id);
                                            const isHabitActive = new Date(item) >= new Date(habit.cretedAt);

                                            return (
                                                <td
                                                    key={`${habit.id}-${item}`}
                                                    onClick={() => handleChangeHabitStatus(habit.id, isHabitDone, item)}
                                                    className={
                                                        `${styles.habitCell} ${isHabitDone ? styles.done : styles.undone} ${isHabitActive ? "" : styles.nonActive}`
                                                    }>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )   
                        }
                    })
                }
            </tbody>
        </table>
    )
};

export default HabitSheet;