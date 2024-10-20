import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        showGptSearch : false,
        movieNames : null,
        movieResults : null
    },
    reducers : {
        toggleGptSearchView : (state, action) => {
            console.log("Toggle Triggered! ")
            state.showGptSearch = !state.showGptSearch;
        },
        addGPTMovieResult : (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})

export const {toggleGptSearchView, addGPTMovieResult} = gptSlice.actions;
export default gptSlice.reducer