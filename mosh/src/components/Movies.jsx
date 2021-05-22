import React, { Component } from "react";
import { getMovies, getMovie } from "../services/fakeMovieService";
import Like from "./Like";
import Movie from "./Movie";
import Pagination from "./Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./ListGroup";
import { getGenres } from "../services/fakeGenreService";
import "../components-css/Movies-css.css";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: getMovies(),
      currentPage: 1,
      pageSize: 4,
    };
  }

  deleteMovie = (id) => {
    this.setState({
      movies: this.state.movies.filter((x) => x._id !== id),
    });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = (genre) => {
    const movies = getMovies();
    if (genre === "all") {
      this.setState({ movies });
      return;
    }
    const filteredMovies = movies.filter((x) => x.genre.name === genre.name);
    this.setState({
      movies: filteredMovies,
    });
  };

  render() {
    const { pageSize, currentPage, movies } = this.state;
    const length = Object.keys(movies).length;
    const paginatedMovies = paginate(movies, currentPage, pageSize);
    const genres = getGenres();

    return (
      <React.Fragment>
        {length === 0 ? (
          <h5>There are no movies in the database</h5>
        ) : (
          <div className="wrapper">
            <div>
              <ListGroup
                genres={genres}
                onGenreChange={this.handleGenreChange}
              />
            </div>
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
                {paginatedMovies.map((movie) => {
                  return (
                    <Movie
                      key={movie._id}
                      m={movie}
                      onDelete={this.deleteMovie}
                    />
                  );
                })}
              </table>
              <Pagination
                itemsCount={length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
export default Movies;
