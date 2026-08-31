import { Habit } from "./Habit";

type Day = number[];

export type Days = {
    [date: string]: Day;
};

export default Day;