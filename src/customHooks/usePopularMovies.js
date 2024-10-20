
import { useDispatch, useSelector } from "react-redux";
import { API_constants } from "../utils/constant";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);
    
    const getPopularMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
            , API_constants)
        const json = await data.json();
        console.log("Movies List are as follows : " + json.results);
        dispatch(addPopularMovies(json.results))
    }

    useEffect(()=>{
        if(!popularMovies) getPopularMovies();
    },[]);
}

export default usePopularMovies;