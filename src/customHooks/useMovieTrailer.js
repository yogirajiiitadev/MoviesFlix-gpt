import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_constants } from '../utils/constant';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // fetch movie videos with the help of movieId and updating the store
      const getMovieVideos = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId +'/videos?language=en-US', API_constants)
      const json = await data.json();
  
      const filterData = json.results.filter((video)=> video.type==='Trailer')
  
      const trailer = filterData.length ? filterData[0] : json[0];
      dispatch(addTrailerVideo(trailer));
      
    }
  
    useEffect(()=>{
      getMovieVideos();
    },[])
}

export default useMovieTrailer