
import { useDispatch } from "react-redux";
import { API_constants } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
            , API_constants)
        const json = await data.json();
        console.log("Movies List are as follows : " + json.results);
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;