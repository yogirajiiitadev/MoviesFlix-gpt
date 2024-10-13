import React from 'react'
import MoviesList from "./MovieList"
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
  return ( movies.nowPlayingMovies && (
    <div className=' bg-black'>
        <div className='-mt-52 pl-12 relative z-20'>
            <MoviesList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}></MoviesList>
            <MoviesList title={"Top Rated"} movies={movies.topRatedMovies}></MoviesList>
            <MoviesList title={"Popular"} movies={movies.popularMovies}></MoviesList>
            <MoviesList title={"Upcoming"} movies={movies.upcomingMovies}></MoviesList>
        </div>
    </div>
  )
)
}

export default SecondaryContainer