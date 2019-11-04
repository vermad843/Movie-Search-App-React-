import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
     title : ' Movie Search App',
     searchTerm : '',
    };
    this.searchTermChanged = this.searchTermChanged.bind(this);
    this.formSubmitted   = this.formSubmitted.bind(this);
  }


  formSubmitted(event) {
    event.preventDefault();
  }

  
  searchTermChanged(event) {
    this.setState({
     searchTerm : event.target.value
    });

  }

  render() {
    const { title , searchTerm } = this.state;
         return (
      <div>
        <h1>
          {title} 
        </h1>
        <form  onSubmit = {this.formSubmitted}>
           <label htmlFor = "searchTerm">Search </label>
             <input 
               onChange = {this.searchTermChanged}
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