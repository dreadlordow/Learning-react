import React, { Component } from "react";
import Movie from "./Movie";
import TableHeader from "./common/TableHeader";
class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: 'like'},
    { key: 'delete'},
  ];

  render() {
    const { paginatedMovies, onDelete, onSort, sortColumn  } = this.props;
    return (
      <table className="table">
          <TableHeader 
          columns={this.columns}
          onSort={onSort}
          sortColumn={sortColumn} />
        <tbody>
          {paginatedMovies.map((movie) => {
            return (
              <Movie
                key={movie._id}
                m={movie}
                onDelete={() => onDelete(movie._id)}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
