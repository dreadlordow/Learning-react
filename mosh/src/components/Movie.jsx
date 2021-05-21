import React, { Component } from "react";
import Like from "./Like";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  handleLike = () => {
    this.setState({
      liked: !this.state.liked,
    });
    console.log(this.state.liked);
  };

  render() {
    const m = this.props.m;
    return (
      <tr key={m._id}>
        <th>{m.title}</th>
        <th>{m.genre.name}</th>
        <th>{m.numberInStock}</th>
        <th>{m.dailyRentalRate}</th>
        <th>
          <Like key={m._id} liked={this.state.liked} onLike={this.handleLike} />
        </th>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.onDelete(m._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
