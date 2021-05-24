import React, { Component } from "react";
import Movie from "../Movie";
class TableBody extends Component {
  render() {
    const { data, onDelete, sortColumn } = this.props;
    return (
      <tbody>
        {data.map((item) => {
          return <Movie key={item._id} 
                        item={item} 
                        onDelete={onDelete}
                        sortColumn={sortColumn} />;
        })}
      </tbody>
    );
  }
}

export default TableBody;
