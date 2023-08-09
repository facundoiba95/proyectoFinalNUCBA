import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState= {
    scorersByLeague: [],
    scorersByLeagueArgentina:[],
    error: null,
    isLoading: false
}

export const fetchScorersByLeague = createAsyncThunk(
    'scorersByLeague/fetchScorersByLeague',
    async ( codeLeague ) => {
        try {
            const league = JSON.stringify({code: codeLeague});
            const reqApi = await fetch(`${import.meta.env.VITE_URL_BACKEND}scorers/getScorersByLeagues`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                mode:'cors',
                body: league
            })
            const resApi = await reqApi.json();
            const scorers = resApi.changeLogos[0].scorers;

            localStorage.setItem('scorersLeague', JSON.stringify(scorers))
            return scorers;
        } catch (error) {
            console.log({error});
            return {error};
        }
    }
)

export const fetchScorersByLeagueArgentina = createAsyncThunk(
    'scorersByLeagueArgentina/fetchScorersByLeagueArgentina',
    async () => {
        try {
            const reqApi = await fetch(`${import.meta.env.VITE_URL_BACKEND}scorers/getScorersByLeagueArgentina`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                mode:'cors',
            })
            
            const resApi = await reqApi.json();
            return resApi;
        } catch (error) {
            console.log({error});
            return {error};
        }
    }
)

export const apiScorersSlice = createSlice({
    name:"apiScorers",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchScorersByLeague.rejected, ( state,action ) => {
            state.isLoading = false;
            state.error = action.error.message;
            return state;
        })
        builder.addCase(fetchScorersByLeague.pending, ( state,action ) => {
            state.isLoading = true;
            return state;
        })
        builder.addCase(fetchScorersByLeague.fulfilled, ( state,action ) => {
            state.isLoading = false;
            state.scorersByLeague = action.payload;
            return state;
        })

        builder.addCase(fetchScorersByLeagueArgentina.rejected, ( state,action ) => {
            state.error = action.error.message;
            state.isLoading = false;
            return state;
        })
        builder.addCase(fetchScorersByLeagueArgentina.pending, ( state,action ) => {
            state.isLoading = true;
            return state;
        })
        builder.addCase(fetchScorersByLeagueArgentina.fulfilled, ( state,action ) => {
            state.scorersByLeagueArgentina = action.payload;
            state.isLoading = false;
            return state;
        })
    }
})

export default apiScorersSlice.reducer;