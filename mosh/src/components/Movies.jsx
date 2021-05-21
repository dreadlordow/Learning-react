import React, { Component } from "react";
import { getMovies, getMovie } from "../services/fakeMovieService";
import Like from "./Like";
import Movie from "./Movie";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: getMovies(),
    };
  }

  deleteMovie = (id) => {
    this.setState({
      movies: this.state.movies.filter((x) => x._id !== id),
    });
  };

  render() {
    const movies = this.state.movies;
    const length = Object.keys(movies).length;
    return (
      <div>
        {length === 0 ? (
          <h5>There are no movies in the database</h5>
        ) : (
          <div>
            <h5>There are {length} movies in the database</h5>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th></th>
                </tr>
              </thead>
              {this.state.movies.map((movie) => {
                return (
                  <Movie
                    key={movie._id}
                    m={movie}
                    onDelete={this.deleteMovie}
                  />
                );
              })}
            </table>
          </div>
        )}
      </div>
    );
  }
}
export default Movies;
