import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MovieCard from './MovieCard'

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            moviesList: ['tt2294629'],
            searchTerm: '',
            title : 'Movie Search App',
            loading : false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.formSubmitted = this.formSubmitted.bind(this);

    }

    formSubmitted(event) {
      event.preventDefault();
      this.setState({loading : true})
      axios
      .get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${
            this.state.searchTerm
        }&plot=full`
    )
    .then(res => res.data)
    .then(res => {
        this.setState({
            searchTerm : '',
            loading : false
        })
        if (!res.Search) {
            this.setState({ moviesList: [], 
                        });
            return;
        }

        const moviesList = res.Search.map(movie => movie.imdbID);
        this.setState({
            moviesList,
        });
     });
    };


    handleChange(event) {
        this.setState({
            searchTerm: event.target.value
        });
    };
    render() {
        const {title, moviesList, loading } = this.state;
        return (
            <div>
                {loading  ? <img src = "Facebook-1s-200px.gif" alt = "loading" /> : 
                <form onSubmit = {this.formSubmitted}>
                    <h1>{title}</h1>
                    <input 
                     onChange = {this.handleChange}
                     placeholder = "Search for movie ex- Iron Man"
                     className = "u-full-width"
                     type = "text" 
                     />
                     <button type = "submit">Go</button>
                </form>} 
                 {moviesList.length > 0 ? (
                     moviesList.map(movie => (
                         <MovieCard movieID = {movie} key = {movie}/>
                     ))
                 ) : (
                   <p>
                       Movie Not Found!!!
                   </p>     
                 )}  
            </div>
        );
    }
}

export default MovieList;