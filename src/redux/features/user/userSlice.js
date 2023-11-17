// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    userName: null,
    userEmail: null,
    token: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.userName = action.payload.userName;
            state.userEmail = action.payload.userEmail;
            state.token = action.payload.token;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
