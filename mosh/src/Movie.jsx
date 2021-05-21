import React, { Component } from "react";

class Movie extends Component {
  render() {
    return (
      <tr>
        <th>{this.props.title}</th>
        <th>{this.props.genre.name}</th>
        <th>{this.props.stock}</th>
        <th>{this.props.dailyRentalRate}</th>
      </tr>
    );
  }
}

export default Movie;
