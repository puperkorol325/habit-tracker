import { configureStore, createSlice, Reducer } from "@reduxjs/toolkit";
import { Habit } from "../types/Habit";
import Day from "../types/Day";
import { habitReducer } from "./habitSlice";
import { dayReducer } from "./daySlice";
import { createPopupReducer } from "./createPopupSlice";


export const store = configureStore({
    reducer: {
        habits: habitReducer,
        days: dayReducer,
        createPopup: createPopupReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
