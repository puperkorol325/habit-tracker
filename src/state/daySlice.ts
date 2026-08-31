import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Day, { Days } from "../types/Day";
import { aC } from "react-router/dist/development/data-CjO11-hU";
import LocalStorageInteractions from "../classes/LocalStorageInteractions";

type DayState = {
    days: Days;
};

function getAllDays(): Days {

    const theFirstDay: Date = new Date(LocalStorageInteractions.getData() || "08-01-2026");
    
    const current = new Date(theFirstDay.toDateString());

    const days: { [date: string]: Day } = {

    };
    
    const today = new Date();

    while (current.getTime() < today.getTime()) {
        const dayCopy = new Date(current);
        days[dayCopy.toDateString()] = [];

        current.setDate(current.getDate() + 1);
    }

    return days;
}

const initialState: DayState = {
    days: {
        ...getAllDays()
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