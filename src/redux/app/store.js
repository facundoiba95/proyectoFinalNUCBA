import { configureStore } from "@reduxjs/toolkit";
import apiLeagueSlice from "../features/api/apiLeagueSlice";
import apiMatchesSlice from "../features/api/apiMatchesSlice";
import apiScorersSlice from "../features/api/apiScorersSlice";
import apiAuthSlice from "../features/api/apiAuthSlice";
import apiBetSlice from "../features/api/apiBetSlice";
import apiUserSlice from "../features/api/apiUserSlice";

const store = configureStore({
    reducer:{
        apiLeagues: apiLeagueSlice,
        apiMatches: apiMatchesSlice,
        apiScorers: apiScorersSlice,
        apiAuth: apiAuthSlice,
        apiBets: apiBetSlice,
        apiUsers: apiUserSlice
    }
})

export default store;