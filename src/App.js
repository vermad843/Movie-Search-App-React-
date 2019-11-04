import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
     title : ' Movie Search App',
     searchTerm : '',
     loading : false
    };
    this.searchTermChanged = this.searchTermChanged.bind(this);
    this.formSubmitted   = this.formSubmitted.bind(this);
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=41913991")
    .then(res => {
      return  res.json()
    }).then(data => {
    console.log(data);
    })
  }


  formSubmitted(event) {
    event.preventDefault();
    console.log('I was clicked')
    this.setState({
      loading : true
    })
  }

  
  searchTermChanged(event) {
    this.setState({
     searchTerm : event.target.value
    });

  }

  render() {
    const { title , searchTerm, loading  } = this.state;
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
         {loading ? <img src = "Facebook-1s-200px.gif" alt = "loading..."/> : ''}
      </div>
    );
  }
}
export default App;