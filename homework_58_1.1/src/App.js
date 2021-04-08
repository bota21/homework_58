import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';

const App = () => {
  const [movies, setMovies] = useState([
      {id: uuidv4(), name: 'Movie #1'},
      {id: uuidv4(), name: 'Movie #2'},
      {id: uuidv4(), name: 'Movie #3'}
    ])
  
  let onInputChange = (e, id) => {
    let index = movies.findIndex(i => i.id === id);
    let copyMovie = [...movies];
    let movie = {...movies[index]};
    movie.name = e.target.value;
    copyMovie[index] = movie;
    setMovies(copyMovie);
  }
  let onSubmitForm = (e) => {
    e.preventDefault();
    let copyMovie = [...movies];
   copyMovie.push({id: uuidv4(), name: movies[-1].name});
   setMovies(copyMovie);
for(let key in movies) {
  localStorage.setItem(movies[key].id, movies[key].name)  
  console.log(localStorage);
}
  }
  let removeItem = (id) => {
    let index = movies.findIndex(i => i.id === id);
    let copyMovie = [...movies];
    copyMovie.splice(index, 1);
    setMovies(copyMovie);
    for(let key in movies) {
      localStorage.removeItem(movies[key].id)  
    }
  }
  let changeName = (e, id) => {
    let index = movies.findIndex(i => i.id === id);
let copyMovie = [...movies];
let movie = {...movies[index]};
copyMovie.name = e.target.value;
copyMovie[index] = movie;
    setMovies(copyMovie)
  }
 
    return (
      <div className="App">
      <Form 
      change={onInputChange} 
      name='name'
      value={movies.name}
      click={onSubmitForm}
      />
      <p className='title'>To watch list</p>
      {movies.map(item => {
        return <List key={item.id} 
        focus={changeName}
        value={item.name} 
        click={() => removeItem(item.id)}
        />
      })}
      </div>
      );
    }  
    
  export default App;
  