
import { useDispatch, useSelector } from "react-redux";
import { API_constants } from "../utils/constant";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);
    const getUpcomingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
            , API_constants)
        const json = await data.json();
        console.log("Movies List are as follows : " + json.results);
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(()=>{
        if(!upcomingMovies) getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies;