import React, { Component } from "react";
import Movie from "./Movie";
import TableHeader from "./common/TableHeader";
import TableBody from "./common/TableBody";
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
        
          <TableBody 
          data={paginatedMovies}
          onDelete={onDelete}
          sortColumn= {sortColumn}/>
      </table>
    );
  }
}

export default MoviesTable;
