
import { Header2 } from "./Header2"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"

export const Browse = ()=>{
    useNowPlayingMovies(); //fetches nowPlaying movies list and adds it to redux store.

    return(
        <div>
            <Header2></Header2>
        </div>
    )
}