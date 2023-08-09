import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[],
    user:[],
    isLoading: false,
    error:null
}

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        try {
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}users/getUsers`)
            const res = await req.json();
            return res;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
)

export const apiUserSlice = createSlice({
    name:'apiUsers',
    initialState,
    reducers:{},
    extraReducers: ( builder ) => {
        builder.addCase(getUsers.rejected, ( state,action ) => {
            state.error = action.error.message;
            state.isLoading = false;
        })
        builder.addCase(getUsers.pending, ( state,action ) => {
            state.isLoading = true;
        })
        builder.addCase(getUsers.fulfilled, ( state,action ) => {
            state.users = action.payload;
            state.isLoading = false;
        })
    }
})

export default apiUserSlice.reducer;