import React, { useEffect } from "react";
import styles from "./HabitSheet.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { checkHabit, uncheckHabit } from "../../state/daySlice";

const HabitSheet: React.FC = () => {

    const dispatch = useAppDispatch();
    const habits = useAppSelector((state) => state.habits.habits);
    const days = useAppSelector((state) => state.days.days);

    console.log(days)

    const handleChangeHabitStatus = (habitId: number, isChecked: boolean, date: Date): void => {

        if (isChecked) {
            dispatch(uncheckHabit({ habitId, date }));
        }else {
            dispatch(checkHabit({ habitId, date }));
        }
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>⭐</th>
                    <th>Habit</th>
                    {
                        days.map(item => {

                            return (
                                <th key={item.date.toDateString()}>{`${item.date.getDate()}.${item.date.getMonth().toString().padStart(2, "0")}`}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    habits.map(habit => {

                        return (
                            <tr key={habit.id}>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>{habit.title}</td>
                                {
                                    days.map(item => {

                                        const isHabitDone = item.doneHabits.includes(habit.id);
                                        const isHabitActive = item.date > habit.cretedAt;

                                        return (
                                            <td
                                                key={`${habit.id}-${item.date.toDateString()}`}
                                                onClick={() => handleChangeHabitStatus(habit.id, isHabitDone, item.date)}
                                                className={
                                                    `${styles.habitCell} ${isHabitDone ? styles.done : styles.undone} ${isHabitActive ? "" : styles.nonActive}`
                                                }>
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
};

export default HabitSheet;