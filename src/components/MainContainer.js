import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store)=>store.movies.nowPlayingMovies);
  if(!movies) return null;

  const mainMovie = movies[1];
  console.log(mainMovie);

  return (
    <div>
        <VideoTitle original_title={mainMovie.original_title} overview={mainMovie.overview}></VideoTitle>
        <VideoBackground movieId={mainMovie.id}></VideoBackground>
    </div>
  )
}

export default MainContainer