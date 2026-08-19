import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Habit } from "../types/Habit";

type HabitState = {
    habits: Habit[];
}

const initialState: HabitState = {
    habits: [

    ]
};

const habitSlice = createSlice({
    name: "habit",
    initialState,
    reducers: {
        createHabit: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                habits: [...state.habits,  { 
                    title: action.payload, 
                    userID: 1,
                    cretedAt: new Date().toDateString(), 
                    id: (state.habits[state.habits.length-1]?.id || 0)+1 
                }],
            };
        },
        removeHabit: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                habits: [...state.habits.filter(item => item.id !== action.payload)],
            };
        },
    }
});

export const habitReducer =  habitSlice.reducer;

export const { createHabit,  removeHabit } = habitSlice.actions;