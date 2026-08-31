import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Day, { Days } from "../types/Day";
import { aC } from "react-router/dist/development/data-CjO11-hU";

type DayState = {
    days: Days;
};

function getDaysFromAugust(): Days {

    const current = new Date();

    const theFirstOfAugust: Date = new Date("08-01-2026");

    const numberOfDays: number = current.getDate() - theFirstOfAugust.getDate() + 1;
    
    current.setDate(theFirstOfAugust.getDate());

    const days: { [date: string]: Day } = {

    };

    for (let i = 0; i < numberOfDays; i++) {
        days[current.toDateString()] = [];
        current.setDate(current.getDate() + 1);
    }

    return days;
}

const initialState: DayState = {
    days: {
        ...getDaysFromAugust()
    }
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

            if (!state.days[action.payload.date].includes(action.payload.habitId)) {
                state.days[action.payload.date].push(action.payload.habitId);
            }
        },
        uncheckHabit: (state, action: PayloadAction<checkHabitPayload>) => {

            state.days[action.payload.date].splice(state.days[action.payload.date].indexOf(action.payload.habitId));
        }
    }
});

export const dayReducer = daySlice.reducer;

export const { checkHabit, uncheckHabit } = daySlice.actions;