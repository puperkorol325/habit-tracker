import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Day from "../types/Day";

type DayState = {
    days: Day[];
};

const initialState: DayState = {
    days: [
        {
            date: new Date(new Date().setDate(new Date().getDate() - 2)).toDateString(),
            doneHabits: []
        },
        {
            date: new Date(new Date().setDate(new Date().getDate() - 1)).toDateString(),
            doneHabits: []
        },
        {
            date: new Date().toDateString(),
            doneHabits: []
        }
    ]
};

type checkHabitPayload = {
    date: string;
    habitId: number;
}

const daySlice = createSlice({
    name: "days",
    initialState,
    reducers: {
        checkHabit: (state, action: PayloadAction<checkHabitPayload>) => {

            state.days.map((item) => {

                if (new Date(item.date).getTime() === new Date(action.payload.date).getTime()) {
                    item.doneHabits.push(action.payload.habitId);
                }

                return item;
            })
        },
        uncheckHabit: (state, action: PayloadAction<checkHabitPayload>) => {

            for (let i of state.days) {
                if (new Date(i.date).getTime() === new Date(action.payload.date).getTime()) {
                    i.doneHabits.filter(id => id !== action.payload.habitId);
                }
            }
        }
    }
});

export const dayReducer = daySlice.reducer;

export const { checkHabit, uncheckHabit } = daySlice.actions;