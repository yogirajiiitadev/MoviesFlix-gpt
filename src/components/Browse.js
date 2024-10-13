
import { Header2 } from "./Header2"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";

export const Browse = ()=>{
    useNowPlayingMovies(); //fetches nowPlaying movies list and adds it to redux store.
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return(
        <div>
            <Header2></Header2>
            <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer>
        </div>
    )
}