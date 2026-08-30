import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Day from "../types/Day";

type DayState = {
    days: Day[];
};

function getDaysFromAugust(): Day[] {

    const current = new Date();
    const dayOfWeek = current.getDay();

    const theFirstOfAugust: Date = new Date("08-01-2026");

    current.setDate(current.getDate() - dayOfWeek);

    const numberOfDays: number = current.getDate() - theFirstOfAugust.getDate();
    
    current.setDate(theFirstOfAugust.getDate());

    return Array.from({ length: numberOfDays }, () => {
        const dateCopy = new Date(current);
        current.setDate(current.getDate() + 1);

        return { 
            date: dateCopy.toDateString(), 
            doneHabits: [] 
        };
    });
}

const initialState: DayState = {
    days: [
        ...getDaysFromAugust()
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

            state.days.map((day) => {
                if (new Date(day.date).getTime() === new Date(action.payload.date).getTime()) {
                    const index: number = day.doneHabits.findIndex((val) => val === action.payload.habitId);

                    if (index >= 0) {
                        day.doneHabits.splice(index, 1);
                    }
                }

                return day;
            });
        }
    }
});

export const dayReducer = daySlice.reducer;

export const { checkHabit, uncheckHabit } = daySlice.actions;