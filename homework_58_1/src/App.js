import React, { Component} from 'react';
import { v4 as uuidv4 } from "uuid";
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    
    this.state = {
      movies: [
      {id: uuidv4(), name: 'Movie #1'},
      {id: uuidv4(), name: 'Movie #2'},
      {id: uuidv4(), name: 'Movie #3'},
    ]};
  }
  onInputChange(e){
    this.setState({name: e.target.value});
  }
  onSubmitForm(e) {
    e.preventDefault();
  }
  removeItem(id){
    let index = this.state.movies.findIndex(i => i.id === id);
    this.setState(this.state.movies.splice(index,1));
  }
  changeName = ({target: {value}}) => {
    this.setState({ value })
  }
  addToState = () => {
    this.state.movies.push({
         id: uuidv4(), name: this.state.name
       });
  }
  shouldComponentUpdate(nextState) {
    if (this.state.movies.name === nextState.name) {  
      return true;
    }
  }

  render() {
    return (
      <div className="App">
      <Form change={this.onInputChange} 
      name='name'
      value={this.state.name}
      submit={this.onSubmitForm}
      click={this.addToState}
      />
      <p className='title'>To watch list</p>
      {this.state.movies.map(item => {
        return <List key={item.id} 
        change={e => this.changeName(e)}
        value={item.name} 
        click={() => this.removeItem(item.id)}
        />
      })}
      </div>
      );
    }  
  }
  
  export default App;
  