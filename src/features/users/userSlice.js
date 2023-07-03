import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', name: 'Najeeb'},
    {id: '2', name: 'Arif'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer;