import React from "react";
import MovieForm from "./MovieForm";
import { getMovie } from "./../services/fakeMovieService";

const MovieDetails = ({ match, history }) => {
  return (
    <div>
      <MovieForm/>
    </div>
  );
};

export default MovieDetails;
