import React from "react";
import styles from "./HabitSheet.module.css";

const HabitSheet: React.FC = () => {

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>⭐</th>
                    <th>Habit</th>
                    <th>10.08</th>
                    <th>11.08</th>
                    <th>12.08</th>
                    <th>13.08</th>
                    <th>14.08</th>
                    <th>15.08</th>
                    <th>16.08</th>
                    <th>17.08</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td>Wash the dishes</td>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td><input type="checkbox" name="" id="" /></td>
                    <td><input type="checkbox" name="" id="" /></td>
                </tr>
            </tbody>
        </table>
    )
};

export default HabitSheet;