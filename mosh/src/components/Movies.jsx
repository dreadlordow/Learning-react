import React, { Component } from "react";
import "../components-css/Movies-css.css";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./ListGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./MoviesTable";
import { Link } from "react-router-dom";
import _ from "lodash";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: getMovies(),
      currentPage: 1,
      pageSize: 4,
      selectedGenre: null,
      sortColumn: { path: "title", order: "asc" },
      searchQuery: "",
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
      searchQuery: "",
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = ({ currentTarget: input }) => {
    const movies = getMovies();
    const inputText = input.value.toLowerCase();
    let filteredMovies = movies.filter((x) =>
      x.title.toLowerCase().startsWith(inputText)
    );
    if (input.value === "") {
      filteredMovies = getMovies();
    }
    console.log(filteredMovies);

    this.setState({
      searchQuery: input.value,
      movies: filteredMovies,
      currentPage: 1,
      selectedGenre: null,
    });
  };

  saveNewMovie = ({ title, genre, numberInStock, dailyRentalRate }) => {
    console.log("executed");
    var movies = [...this.state.movies];
    const newMovie = {
      _id: 21031231,
      title: title,
      genre: genre,
      numberInStock: numberInStock,
      dailyRentalRate: dailyRentalRate,
    };
    movies.push(newMovie);
    this.setState({ movies }, () => {
      this.props.history.push("/movies");
    });
  };

  render() {
    const { pageSize, currentPage, sortColumn, movies, searchQuery } =
      this.state;
    const length = Object.keys(movies).length;
    const sorted = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
    const paginatedMovies = paginate(sorted, currentPage, pageSize);
    const genres = getGenres();
    var moviesCount = "";
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              genres={genres}
              onGenreChange={this.handleGenreChange}
              selectedGenre={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            <Link className="btn btn-primary" to="/movies/new">
              New movie
            </Link>

            <input
              value={searchQuery}
              onChange={this.handleSearch}
              className="form-control mr-sm-2 my-3"
              type="search"
              aria-label="Search"
              placeholder="Search"
            />

            {length === 0 ? (
              <h5>There are no movies</h5>
            ) : (
              <h5>There are {length} movies</h5>
            )}
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
      </React.Fragment>
    );
  }
}
export default Movies;
