import React, { Component } from "react";
import "../components-css/Movies-css.css";
import { getMovies } from "../services/movieService";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./ListGroup";
import { getGenres } from "../services/genreService";
import MoviesTable from "./MoviesTable";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";
import { deleteMovie } from "./../services/movieService";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      ALLMOVIES: [],
      movies: [],
      currentPage: 1,
      pageSize: 4,
      selectedGenre: null,
      sortColumn: { path: "title", order: "asc" },
      searchQuery: "",
      genres: [],
    };
  }

  async componentDidMount() {
    const genres = await getGenres();
    const movies = await getMovies();
    this.setState({ genres, movies, ALLMOVIES: movies });
  }

  handleDelete = async (id) => {
    const originalMovies = this.state.movies;

    try {
      this.setState({
        movies: originalMovies.filter((x) => x._id !== id),
      });
      await deleteMovie(id);
    } catch (ex) {
      this.setState({ movies: originalMovies });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = async (genre) => {
    const movies = await getMovies();
    if (genre.name !== "All Genres") {
      var filteredMovies = movies.filter((x) => x.genre.name === genre.name);
    }
    this.setState({
      movies: filteredMovies,
      selectedGenre: genre,
      currentPage: 1,
      searchQuery: "",
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = async ({ currentTarget: input }) => {
    console.log(input.value);
    const movies = this.state.movies;
    const inputText = input.value.toLowerCase();
    let filteredMovies = movies.filter((x) =>
      x.title.toLowerCase().startsWith(inputText)
    );
    if (input.value === "") {
      filteredMovies = this.state.ALLMOVIES;
    }

    this.setState({
      searchQuery: input.value,
      movies: filteredMovies,
      currentPage: 1,
      selectedGenre: null,
    });
  };

  render() {
    const { pageSize, currentPage, sortColumn, movies, searchQuery, genres } =
      this.state;
    const { user } = this.props;
    const length = Object.keys(movies).length;
    const sorted = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
    const paginatedMovies = paginate(sorted, currentPage, pageSize);
    var moviesCount = "";
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ToastContainer />
            <ListGroup
              genres={genres}
              onGenreChange={this.handleGenreChange}
              selectedGenre={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            {user && (
              <Link className="btn btn-primary" to="/movies/new">
                New movie
              </Link>
            )}
            
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
