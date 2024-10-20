import React from 'react'
import GPTMovieSuggestionPage from './GPTMovieSuggestionPage'
import GPTSearchBar from './GPTSearchBar'
import { BG_URL } from '../utils/constant'

const GPTSearch = () => {
  return (
    <div>
        <div className="fixed -z-10">
        <img
          src={BG_URL}
          alt=""
        />
      </div>
        <GPTSearchBar></GPTSearchBar>
        <GPTMovieSuggestionPage></GPTMovieSuggestionPage>
    </div>
  )
}

export default GPTSearch