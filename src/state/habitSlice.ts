import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Habit } from "../types/Habit";

type HabitState = {
    habits: Habit[];
}

const initialState: HabitState = {
    habits: [
        {
            id: 1,
            userID: 1,
            title: "throw out the trash",
            cretedAt: new Date("2026-07-13").toDateString()
        }
    ]
};

const habitSlice = createSlice({
    name: "habit",
    initialState,
    reducers: {
        create: (state, action: PayloadAction<Habit>) => {
            return {
                ...state,
                habits: [...state.habits, action.payload],
            };
        },
        remove: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                habits: [...state.habits.filter(item => item.id !== action.payload)],
            };
        },
    }
});

export const habitReducer =  habitSlice.reducer;

export const { create, remove } = habitSlice.actions;