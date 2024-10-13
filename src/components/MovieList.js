import React from 'react'
import MovieCard from './MovieCard'
import '../App.css'

const MovieList = ({title, movies}) => {
  console.log(movies);
  return (
    <div className='px-6'>
      <h1 className='text-3xl py-2 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll black-scrollbar'>      
        <div className='flex'>
          {movies?.map(movie =>
            <MovieCard key={movie.id} posterPath={movie.poster_path}></MovieCard>
          )}
        </div>
      </div>
    </div>
  )

}

export default MovieList