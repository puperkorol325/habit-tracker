import { configureStore } from "@reduxjs/toolkit";

type State = {
    habits: Habit[];
}

export type CreateHabit = {
    type: "create";
    payload: Habit;
};

export type DeleteHabit = {
    type: "delete";
    payload: {
        id: number
    };
};

export type IncreaseStreak = {
    type: "increaseStreak";
    payload: {
        id: number
    };
}

export type KnockDownStreak = {
    type: "knockDownStreak";
    payload: {
        id: number;
    }
}

type Action = CreateHabit | DeleteHabit | IncreaseStreak | KnockDownStreak;

const initialState: State = {
    habits: []
};

const reducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case "create":
            return {
                ...state,
                habits: [...state.habits, action.payload],
            };
        case "delete":
            return {
                ...state,
                habits: [...state.habits.filter(item => item.id !== action.payload.id)],
            };
        case "increaseStreak":
            return {
                ...state,
                habits: [...state.habits.map(item => item.id === action.payload.id ? { ...item, streak: item.streak + 1 } : item )],
            };
        case "knockDownStreak":
            return {
                ...state,
                habits: [...state.habits.map(item => item.id === action.payload.id ? { ...item, streak: 0 } : item )],
            };
        default:
            return state;
    }
};

export const store = configureStore({
    reducer: reducer,
});

