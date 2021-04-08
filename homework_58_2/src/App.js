import './App.css';
import axios from 'axios';
import { React, useEffect, useState } from 'react';
import Button from './component/Button/Button';

const App = () => {
  const [data, setData] = useState([]);
  let url = 'https://api.chucknorris.io/jokes/random';
  let changeJoke = () => {
    axios.get(url).then(resp => {
      setData(resp.data.value)
    })
  }
  useEffect(() => {
    axios.get(url).then(resp => {
      setData(resp.data.value);
    })
  }, [])
  
  if(!data || data.length === 0) return <p>Данные загружаются</p>
  return (
    <div className="App">
    <Button click={changeJoke} />
    <h3 className='joke_wrapper'>
    {data}
    </h3> 
    </div>
    );
  }
  
  export default App;
  