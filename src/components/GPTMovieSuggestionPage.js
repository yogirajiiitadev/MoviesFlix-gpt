import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestionPage = () => {
  const {movieNames, movieResults} = useSelector(store => store.gpt);
  if(!movieNames){
    return "Error!";
  }

  return (
    <div className='p-4 m-4 bg-black bg-opacity-70 text-white'>
      {movieNames.map((movie, index) => 
      <MovieList
      key={movie} 
      title={movie} 
      movies={movieResults[index]}>
      </MovieList>)}
      
    </div>
  )
}

export default GPTMovieSuggestionPage