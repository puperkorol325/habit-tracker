import { configureStore, createSlice, Reducer } from "@reduxjs/toolkit";
import { Habit } from "../types/Habit";
import Day from "../types/Day";
import { habitReducer } from "./habitSlice";


export const store = configureStore({
    reducer: habitReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
