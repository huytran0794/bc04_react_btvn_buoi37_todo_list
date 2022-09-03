import React, { Component } from "react";

class FilterSearch extends Component {
  state = {
    search: null,
  };
  handleOnChange = (e) => {
    let value = e.target.value;
    this.setState({ search: value });
  };
  render() {
    console.log("Only render search component");
    return (
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          onChange={(e) => {
            this.handleOnChange(e);
          }}
          placeholder="Enter task name..."
        />
        <button className="fa-solid fa-magnifying-glass btn-search"></button>
      </div>
    );
  }
}

export default FilterSearch;
