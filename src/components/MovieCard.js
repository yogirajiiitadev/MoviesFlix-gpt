import React from 'react'
import { MOVIE_IMG_BASEURL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4 cursor-pointer'>
        <img alt='Movie Card' src={MOVIE_IMG_BASEURL + posterPath}></img>
    </div>
  )
}

export default MovieCard