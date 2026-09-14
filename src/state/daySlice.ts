import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Day, { Days } from "../types/Day";
import LocalStorageInteractions from "../classes/LocalStorageInteractions";
import { addDays, startOfToday } from "date-fns";

type DayState = {
    days: Days;
};

function getAllDays(): Days {

    const theFirstDay: Date = new Date(LocalStorageInteractions.getData() || "08-01-2026");
    
    let current = new Date(theFirstDay.toDateString());

    const days: { [date: string]: Day } = {

    };
    
    const today = startOfToday();

    while (current.getTime() <= today.getTime()) {
        days[current.toDateString()] = [];

        current = addDays(current, 1);
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

            state.days[action.payload.date].splice(state.days[action.payload.date].indexOf(action.payload.habitId), 1);
        }
    }
});

export const dayReducer = daySlice.reducer;

export const { checkHabit, uncheckHabit } = daySlice.actions;