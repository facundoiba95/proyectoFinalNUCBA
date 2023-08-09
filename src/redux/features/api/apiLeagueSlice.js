import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { leagueStates } from "../../../libs/getLeagueStates";

const initialState = {
    content:[],
    league1:[],
    serieA:[],
    premierLeague:[],
    libertadores:[],
    championsLeague:[],
    ligaArgentina:[],
    laLiga:[],
    isLoading:false,
    error: null
};

export const fetchApiLeagues = createAsyncThunk(
    'content/fetchContent',
    async (idLeague) => {
        try {
            const getIdLocalStorage = idLeague ? idLeague : localStorage.getItem('idLeague') 
            const dataIdLeague= JSON.stringify({ idLeague: getIdLocalStorage });

            const connect = await fetch(`${import.meta.env.VITE_URL_BACKEND}leagues/getLeaguesByID`,{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                mode:'cors',
                body: dataIdLeague
            });

            const res = await connect.json();
            return res.resApi.data;
        } catch (error) {
            console.log(error);
            return;
        }
    }

)

export const apiLeagueSlice = createSlice({
    name:'apiLeagues',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchApiLeagues.fulfilled, ( state, action ) => {
            if(action.meta.arg){
                state[leagueStates[action.meta.arg]] = action.payload;
                localStorage.setItem(`${leagueStates[action.meta.arg]}`, JSON.stringify(leagueStates[action.meta.arg]));
                state.isLoading = false;
            }
            state.content = action.payload;
        })
        builder.addCase(fetchApiLeagues.pending, ( state, action ) => {
            state.isLoading = true;
            return;
        })
        builder.addCase(fetchApiLeagues.rejected, ( state, action ) => {
            state.isLoading = false;
            state.error = action.error.message
            return;
        })
    }
})

export default apiLeagueSlice.reducer;