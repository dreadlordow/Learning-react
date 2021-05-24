import React from "react";
const MovieDetails = ({ match, history }) => {
  console.log(history);
  return (
    <div>
      <h1>Movie - {match.params.id}</h1>
      <button onClick={() => history.push('/movies')}>Save</button>
    </div>
  );
};

export default MovieDetails;
