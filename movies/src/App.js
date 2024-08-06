import React from 'react';
import './App.css';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

function App() {

  return (
    <div className="App">
      <h1>Movies:</h1>
      {movies.map((x) => {
      return (
        <>
        <h5>{x.title}</h5>
        </>
      )
    })}
    </div>
  );
}

export default App;

