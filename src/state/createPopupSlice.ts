import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type createPopupState = boolean;

const initialState: createPopupState = false;

const createPopupSlice = createSlice({
    name: "createHabitPopup",
    initialState,
    reducers: {
        switchState: (state, action: PayloadAction<void>) => {
            return !state;
        }
    }
});

export const createPopupReducer = createPopupSlice.reducer;
export const { switchState } = createPopupSlice.actions;