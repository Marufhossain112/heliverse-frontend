// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    teams: [],
};

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setTeam(state, action) {
            state.teams = [...state.teams, action.payload];
        }
    },
});

export const { setTeam } = teamSlice.actions;
export default teamSlice.reducer;
