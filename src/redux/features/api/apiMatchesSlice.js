import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { matchesStates } from "../../../libs/getLeagueStates";

const initialState= {
    matchesLeague: [],
    league1:[],
    libertadores:[],
    serieA:[],
    premierLeague:[],
    championsLeague:[],
    laLiga:[],
    ligaArgentina: [],
    content:[],
    searchMatch:[],
    isLoading: false,
    error: null
}

export const fetchAllMatches = createAsyncThunk(
    'matches/fetchAllMatches',
    async (idLeague) => {
        try {
            const dataIdLeague = JSON.stringify({idLeague: Number(idLeague)});
            const connect = await fetch(`${import.meta.env.VITE_URL_BACKEND}matches/getMatchesLeagues`, {
               method: "POST",
               headers: {
                 "Content-Type": "application/json"
               },
               body: dataIdLeague
            })
            const res = await connect.json();
            const resArray = await res.matches;
            return resArray;
        } catch (error) {
            console.log(error);
        }
    }
)

export const fetchMatches = createAsyncThunk(
    'content/fetchMatches',
    async (idLeague) => {
        try {
           const dataIdLeague = JSON.stringify({idLeague: Number(idLeague)});
           const connect = await fetch(`${import.meta.env.VITE_URL_BACKEND}matches/getMatchesLeagues`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: dataIdLeague
           })
           const res = await connect.json();
           const resArray = res.matches;
           
           const rewriteResponse = resArray.map(match => {
                if(match.competition.type === 'CUP'){
                    return match;
                } else {
                    return { ... match, 
                        previusMatchday: match.season.currentMatchday - 1,
                        nextMatchday: match.season.currentMatchday + 1
                    }
                } 
           })

        //    localStorage.setItem('matchesLeague', JSON.stringify(rewriteResponse))

            const currentMatchday = rewriteResponse.filter(match => match.matchday === match.season.currentMatchday)
            const previusMatchday = rewriteResponse.filter(match => match.previusMatchday === match.matchday)
            const nextMatchday = rewriteResponse.filter(match => match.nextMatchday === match.matchday)
            const nextMatchDayCup = rewriteResponse.filter(match => {
                if(match.competition.type === 'CUP' && match.stage === 'SEMI_FINALS' && match.stage === 'FINAL'){
                    return match; 
                }
            })
            const scheduledMatchesCup = rewriteResponse.filter(matches => matches.status === 'TIMED')
           return {
            currentMatchday,
            previusMatchday,
            nextMatchday,
            scheduledMatchesCup,
            rewriteResponse
           };
        } catch (error) {
            console.log(error);
        }
    }
)

export const fetchMatchesToday = createAsyncThunk(
    'content/fetchMatchesToday',
    async (idLeague) => {
        try {
            const dataIdLeague = JSON.stringify({idLeague});
            const connect = await fetch(`${import.meta.env.VITE_URL_BACKEND}matches/getMatchesLeaguesToday`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: dataIdLeague
            })
            
            const res = await connect.json();
            return res.filterMatchesToday;
        } catch (error) {
            console.log(error);
        }
    }
)

export const fetchMatchesArgentina = createAsyncThunk(
    'content/fetchMatchesArgentina',
    async () => {
        try {
           const connect = await fetch(`${import.meta.env.VITE_URL_BACKEND}matches/getMatchesLeagueArgentina`,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }
           })
           const res = await connect.json();
         

           const resArray = res.matches;
        //    const phase = 'match.league.round == ""';
        //   const resArray = JSON.parse(localStorage.getItem('ligaArgentina'));
          const date = new Date().toISOString().slice(0,10);
          const setPhase = resArray.map(match => {
            return {... match, phase: match.league.round.substring(0,10)}
          })
          const PrimeraFase = setPhase.filter(match => match.phase == '1st Phase ')

          const getMatchday = PrimeraFase.find(match =>  {
            if(match.date >= date && match.phase == '1st Phase '){
                return match.currentMatchday = Number(match.league.round.substring(12))
            };
        }).currentMatchday;

           const newArray = PrimeraFase.map(match => {
            const matchday = Number(match.league.round.substring(12)); 
            return { ... match,
                matchday,
                currentMatchday: getMatchday,
                previusMatchday: getMatchday - 1,
                nextMatchday: getMatchday + 1,
            }
           })

           const currentMatchday = newArray.filter(match => match.matchday === match.currentMatchday)
           const previusMatchday = newArray.filter(match => match.previusMatchday === match.matchday)
           const nextMatchday = newArray.filter(match => match.nextMatchday === match.matchday)

          return {
           currentMatchday,
           previusMatchday,
           nextMatchday,
           newArray
          }        
        } catch (error) {
            console.log(error);
        }
    }
)


export const apiMatchesSlice = createSlice({
    name: 'apiMatches',
    initialState,
    reducers: {
        setSearchMatch: ( state,action ) => {
            state.searchMatch = action.payload;
            return state;
        }
    },
    extraReducers: ( builder ) => {
        builder.addCase(fetchAllMatches.rejected, ( state,action ) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        builder.addCase(fetchAllMatches.pending, ( state,action ) => {
            state.isLoading = true;
        })
        builder.addCase(fetchAllMatches.fulfilled, ( state,action ) => {
            state.content = action.payload;
            state.isLoading = false;
        } )

        builder.addCase( fetchMatches.pending, ( state, action ) => {
            state.isLoading = true;
        })
        builder.addCase(fetchMatches.rejected, ( state, action ) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        builder.addCase( fetchMatches.fulfilled, ( state, action ) => {
            state.matchesLeague = action.payload;
            state.isLoading = false;
        })


        builder.addCase( fetchMatchesToday.pending, ( state, action ) => {
            state.isLoading = true;
            return state;
        })
        builder.addCase(fetchMatchesToday.rejected, ( state, action ) => {
            state.isLoading = false;
            state.error = action.error.message;
            return state;
        })
        builder.addCase(fetchMatchesToday.fulfilled, ( state, action ) => {
            if(action.meta.arg){
                state[matchesStates[action.meta.arg]] = action.payload;
                state.isLoading = false;
                return;
            }

            state.content =  action.payload;
            state.isLoading = false;
            return state;
        })

        builder.addCase(fetchMatchesArgentina.pending, ( state, action ) => {
            state.isLoading = true;
            return state;
        })
        builder.addCase(fetchMatchesArgentina.rejected, ( state, action ) => {
            state.error = action.error.message;
            state.isLoading = false;
            return state;
        })
        builder.addCase(fetchMatchesArgentina.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.ligaArgentina = action.payload;
            return state;
        })
    }
})
export const { setSearchMatch } = apiMatchesSlice.actions;
export default apiMatchesSlice.reducer;