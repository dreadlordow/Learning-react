import React, { Component } from "react";

class Like extends Component {
  render() {
    const heartClassLabel = this.props.liked ? "fa fa-heart" : "fa fa-heart-o";
    return (
      <button
        onClick={() => this.props.onLike()}
        className="btn btn-primary-outline  "
      >
        <i className={heartClassLabel}></i>
      </button>
    );
  }
}

export default Like;
