import React from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import './App.css';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
class MoviesList extends React.Component {
    state = {
        moviesList: ['tt2294629'],
        searchTerm: ''
    };

    search = event => {
        event.preventDefault();
        axios
            .get(
                `https://www.omdbapi.com/?apikey=${API_KEY}&s=${
                    this.state.searchTerm
                }&plot=full`
            )
            .then(res => res.data)
            .then(res => {
                if (!res.Search) {
                    this.setState({ moviesList: [] });
                    return;
                }

                const moviesList = res.Search.map(movie => movie.imdbID);
                this.setState({
                    moviesList
                });
            });
    };

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    render() {
        const { moviesList } = this.state;

        return (
            <div>
                <form onSubmit={this.search}>
                    <input
                        placeholder="Search for a movie"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Go
                        <i className="fa fa-search" />
                    </button>
                </form>
                {moviesList.length > 0 ? (
                    moviesList.map(movie => (
                        <MovieCard movieID={movie} key={movie} />
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



export default MoviesList;