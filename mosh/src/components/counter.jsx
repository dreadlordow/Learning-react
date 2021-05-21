import React, { Component } from "react";

class Counter extends Component {
  formatCount = () => {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : `Counter: ${count}`;
  };

  getBadgeClasses() {
    let classes = "badge m-2 p-3 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  render() {
    let classes = this.getBadgeClasses();
    const isValueZero = this.props.counter.value === 0;
    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>

        <button
          disabled={isValueZero}
          className="btn btn-warning btn-sm m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
