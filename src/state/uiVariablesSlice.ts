import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import LocalStorageInteractions from "../classes/LocalStorageInteractions";

type uiVariablesState = {
    darkTheme: boolean;
}

const initialState: uiVariablesState = {
    darkTheme: LocalStorageInteractions.getDarkThemeMode()
}

const uiVariablesSlice = createSlice({
    name: "uiVariables",
    initialState,
    reducers: {
        switchDarkTheme: (state, action: PayloadAction<void>): void => {
            state.darkTheme = !state.darkTheme;
            LocalStorageInteractions.setDarkThemeMode(state.darkTheme);
        },
    }
});


export const uiVariablesReducer =  uiVariablesSlice.reducer;

export const { switchDarkTheme } = uiVariablesSlice.actions;
