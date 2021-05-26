import React from "react";

const ListGroup = (props) => {
  const genres = props.genres;
  const selectedItem = props.selectedGenre;
  
  return (
    <ul className="list-group">
      {genres.map(genre => {
        return (
          <li
            key={genre._id}
            onClick={() => props.onGenreChange(genre)}
            className={
              genre === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {genre.name}
          </li>
        );
      })}
    </ul>
  );
};

export default ListGroup;
