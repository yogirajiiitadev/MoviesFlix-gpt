
import { useDispatch, useSelector } from "react-redux";
import { API_constants } from "../utils/constant";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
    const getTopRatedMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
            , API_constants)
        const json = await data.json();
        console.log("Movies List are as follows : " + json.results);
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=>{
        if(!topRatedMovies) getTopRatedMovies();
    },[]);
}

export default useTopRatedMovies;