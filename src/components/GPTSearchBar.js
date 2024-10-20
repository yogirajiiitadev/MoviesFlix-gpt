import React, { useReducer, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_constants, OPENAI_KEY2 } from '../utils/constant';
import { addGPTMovieResult } from '../utils/gptSlice';
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GPTSearchBar = () => {
  const showGptSearchView = useSelector(state => state.gpt.showGptSearchView);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  // Search movies in TMDB
  const searchMovieTMDB = async(movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_constants)
    const json = await data?.json();
    console.log("Json results : ", json?.results);
    return json?.results;
  }


  const handleGPTSearchClick  = async() => { 
    console.log(searchText.current.value);
    // Make an API call to OpenAI and get movie results
    const gptQuery = "Act as a hindi movie recommendation system and suggest some movies for the query : "+ searchText.current.value + ". only give me names of five movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    // const gptResults = await openai.chat.completions.create({
    //     messages: [{ role: 'user', content: gptQuery }],
    //     model: 'gpt-3.5-turbo',
    //   });
    // console.log("Results : ",gptResults.choices);
    const genAI = new GoogleGenerativeAI(OPENAI_KEY2);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = "Write a story about a magic backpack.";
    const result = await model.generateContent(gptQuery);
    console.log("Movies results : ",result.response.text());

    // Construct movies array
    const gptMovies = result.response.text().split(",");
    console.log(gptMovies);


    // For each movie call search api of TMDB api
    const data = gptMovies.map((movie)=>searchMovieTMDB(movie));
    // data will be an array of promises
    // it will take some time to resolve
    const tmdbResults = await Promise.all(data);
    console.log("tmdbResults : ", tmdbResults);
    dispatch(addGPTMovieResult({movieNames : gptMovies, movieResults : tmdbResults}));
  }
  return (
    <div className='pt-[10%] flex justify-center '>
        <form className=' w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" className='p-4 m-4 col-span-9' placeholder='What would you like to watch today?'></input>
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4' onClick={handleGPTSearchClick}>Search</button>
        </form>
    </div>
  )
}

export default GPTSearchBar;