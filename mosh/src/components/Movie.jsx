import React, { Component } from "react";
import Like from "./Like";
import { Link } from "react-router-dom";
import { getCurrentUser } from "./../services/authServices";

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
  };

  render() {
    const m = this.props.item;
    const user = getCurrentUser();
    return (
      <tr key={m._id}>
        <th>
          <Link to={`/movies/${m._id}`}>{m.title}</Link>
        </th>
        <th>{m.genre.name}</th>
        <th>{m.numberInStock}</th>
        <th>{m.dailyRentalRate}</th>
        <th>
          <Like key={m._id} liked={this.state.liked} onLike={this.handleLike} />
        </th>
        <td>
          {user && user.isAdmin && (
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(m._id)}
            >
              Delete
            </button>
          )}
        </td>
      </tr>
    );
  }
}

export default Movie;
