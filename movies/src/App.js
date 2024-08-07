import React from 'react';
import {useState, useEffect} from 'react'
import './App.css';


function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [addedMovies, setAddedMovies] = useState('');

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

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleAddMovies = (e) => {
    setAddedMovies(e.target.value);
    addMoviesFetch(addedMovies)
  }

  const addMoviesFetch = async () => {
    try {
      const request = await fetch(`http://localhost:8080/movies`);
        
    }
  }

  const filteredMovies = moviesList.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="App">
      <h1>Movies:</h1>
      <input
        type='text'
        placeholder='Movie Search'
        value={searchQuery}
        onChange={handleSearchQuery}/>
      <input
        type='text'
        placeholder='Add movies'
        value={addedMovies}
        onChange={handleAddMovies}/>

      {/* start conditional render */}
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
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

