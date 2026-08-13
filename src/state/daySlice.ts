import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Day from "../types/Day";

type DayState = {
    days: Day[];
};

const initialState: DayState = {
    days: [
        {
            date: new Date(new Date().setDate(new Date().getDate() - 2)),
            doneHabits: []
        },
        {
            date: new Date(new Date().setDate(new Date().getDate() - 1)),
            doneHabits: []
        },
        {
            date: new Date(),
            doneHabits: []
        }
    ]
};

type checkHabitPayload = {
    date: Date;
    habitId: number;
}

const daySlice = createSlice({
    name: "days",
    initialState,
    reducers: {
        checkHabit: (state, action: PayloadAction<checkHabitPayload>) => {

            state.days.map((item) => {
                if (item.date === action.payload.date) {
                    item.doneHabits.push(action.payload.habitId);
                }
                return item;
            })
        },
        uncheckHabit: (state, action: PayloadAction<checkHabitPayload>) => {

            state.days.map((item) => {
                if (item.date === action.payload.date) {
                    item.doneHabits.filter(id => {
                        if (id === action.payload.habitId) {
                            return null;
                        }else {
                            return id;
                        }
                    });
                }
                return item;
            })
        }
    }
});

export const dayReducer = daySlice.reducer;

export const { checkHabit, uncheckHabit } = daySlice.actions;