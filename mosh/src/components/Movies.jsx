import React, { Component } from "react";
import "../components-css/Movies-css.css";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./ListGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: getMovies(),
      currentPage: 1,
      pageSize: 4,
      selectedGenre: "",
      sortColumn: { path: "title", order: "asc" },
    };
  }

  handleDelete = (id) => {
    this.setState({
      movies: this.state.movies.filter((x) => x._id !== id),
    });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = (genre) => {
    var movies = getMovies();
    if (genre.name !== "All Genres") {
      movies = movies.filter((x) => x.genre.name === genre.name);
    }
    this.setState({
      movies: movies,
      selectedGenre: genre,
      currentPage: 1,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { pageSize, currentPage, sortColumn, movies } = this.state;
    const length = Object.keys(movies).length;
    const sorted = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
    const paginatedMovies = paginate(sorted, currentPage, pageSize);
    const genres = getGenres();

    return (
      <React.Fragment>
        {length === 0 ? (
          <h5>There are no movies in the database</h5>
        ) : (
          <div className="row">
            <div className="col-3">
              <ListGroup
                genres={genres}
                onGenreChange={this.handleGenreChange}
                selectedGenre={this.state.selectedGenre}
              />
            </div>
            <div className="col">
              <h5>There are {length} movies in the database</h5>
              <MoviesTable
                paginatedMovies={paginatedMovies}
                sortColumn={sortColumn}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
              />
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
