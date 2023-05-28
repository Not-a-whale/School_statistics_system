import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: true,
    isDarkMode: false
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setSidebar: (state) => {
            state.isSidebarOpen = state.isSidebarOpen ? false : true;
        },
        setTheme: (state) => {
            state.isDarkMode = state.isDarkMode ? false : true;
        }
    }
});

export const { setSidebar } = globalSlice.actions;

export default globalSlice.reducer;
