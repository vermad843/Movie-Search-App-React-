import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
     title : ' Movie Search App',
     searchTerm : '',
    };
  }
  render() {
    const { title , searchTerm } = this.state;
         return (
      <div>
        <h1>
          {title} 
        </h1>
        <form >
        <label htmlFor = "searchTerm">Search </label>
          <input 
            value = {searchTerm}
            className = "u-full-width" 
            type = "text" 
            id = "searchTerm" 
            name = "searchTerm" 
            placeholder = "Enter a movie title.." />
            <button type = "submit">Search</button>
         </form>
      </div>
    );
  }
}
export default App;