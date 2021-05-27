import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from './MovieRow';

class MovieList extends Component {
    componentDidMount() {
        
    }
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => <div>Movie List: {userContext.currentUser ? userContext.currentUser.name : ""}<MovieRow /></div>}
      </UserContext.Consumer>
    );
  }
}
MovieList.contextType = UserContext
export default MovieList;
