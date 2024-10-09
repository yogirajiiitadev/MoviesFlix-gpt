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
  - A header with navigation options.
  - Main movie section featuring a background trailer, title, and description.
  - Movie suggestions with vertically and horizontally scrollable lists.

- **MoviesFlix-GPT**
  - Search bar for movie queries.
  - Provides personalized movie suggestions based on search input.

## Project Setup

1. **Create React App**: Start the project using the following command:

   ```bash
   npx create-react-app moviesflix-gpt
   cd moviesflix-gpt
