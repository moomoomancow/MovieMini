import React from 'react';
import {useState, useEffect} from 'react'
import './App.css';




function App() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
   GetMovies()
  }, [])

  const GetMovies = async () => {
    try {
      const response = await fetch(`http://localhost:8080/movies`);
      if (response.ok) {
        const data = await response.json();
        setMoviesList(data)
        console.log(moviesList)
      } else {
        console.error('Dang brah, stuff is messed up for real')
      }
    } catch (error) {
      console.error('Error here too dudes')
    }
  }



  return (
    <div className="App">
      <h1>Movies:</h1>
      {/* start conditional render */}
      {moviesList.length > 0 ? (
        moviesList.map((movie) => (
          <div key = {movie.id}>
            <h5>{movie.title}</h5>
            </div>
        ))
      ) : (
        <p>No movies available</p>
      )}
      {/* end conditional render */}
    </div>
  );
}

export default App;

