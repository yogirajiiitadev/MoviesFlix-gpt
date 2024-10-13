# MoviesFlix-GPT

A React application inspired by Netflix, MoviesFlix-GPT provides a dynamic platform for movie browsing with tailored suggestions, Firebase authentication, and a sleek, user-friendly design.

## Table of Contents

- [Features](#features)
- [Project Setup](#project-setup)
- [Installation](#installation)
- [Configuration](#configuration)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Implementation Details](#implementation-details)
- [Acknowledgements](#acknowledgements)

## Features

- **Login/Signup Page**
  - Login and Signup forms with validation using `useRef`.
  - Redirects authenticated users to the Browse page.
  - Deployed App to Firebase.
  - Authentication using Google Firebase
  - Use Firebase API's like onAuthStateChange, signInWithEmailAndPassword, createUserWithEmailAndPassword 
  - Created our Redux Store using userSlice
  - Implemented Sign Out
  - Update Profile with displayName
  - BugFix : Redirect user to browse page if logged in, Redirect to login if user is logged out.
  - Unsubscribed to the onAuthStateChange callback API once the header component unmounts.

- **Browse Page (Accessible only after Authentication)**
  - Register TMDB API, Create a new APP and get the access token.
  - Get data from TMDB list now playing API.
  - Created Custom Hook for nowPlayingMovies.
  - Updated the store with Movies data after creating a slice.
  - PLanning for main and secondary container.
  - Fetch data for trailer video.
  - Update the store with same trailer video data.
  - Embedded the Youtube video make it mute and Autoplay it on loading.
  - Get data from TMDB for Popular, Top Rated and Upcoming Movies using custom Hook.
  - Build Secondary Container using Movies List and Movie Cards

- **MoviesFlix-GPT**
  - Search bar for movie queries.
  - Provides personalized movie suggestions based on search input.

## Project Setup

1. **Create React App**: Start the project using the following command:

   ```bash
   npx create-react-app moviesflix-gpt
   cd moviesflix-gpt
