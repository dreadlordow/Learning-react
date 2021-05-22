import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const genres = this.props.genres;
    return (
      <ul className="list-group">
        <li
          onClick={() => this.props.onGenreChange("all")}
          className="list-group-item"
        >
          All Genres
        </li>
        {genres.map((genre) => {
          return (
            <li
              key={genre.name}
              onClick={() => this.props.onGenreChange(genre)}
              className="list-group-item"
            >
              {genre.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListGroup;
