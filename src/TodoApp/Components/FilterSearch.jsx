import React, { Component } from "react";
import { connect } from "react-redux";
import { searchNameTodoAction } from "../redux/actions/todoListAction";

class FilterSearch extends Component {
  state = {
    search: "",
  };
  handleOnChange = (e) => {
    let value = e.target.value;
    this.setState({ search: value });
  };
  static getDerivedStateFromProps(nextProps, state) {
    if (!nextProps.todoList.length) {
      return null;
    }

    return true;
  }
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
        <button
          className="fa-solid fa-magnifying-glass btn-search"
          onClick={() => {
            this.props.handleSearchByName(this.state.search);
          }}
        ></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoListReducer.todoList,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchByName: (searchTxt) => {
    dispatch(searchNameTodoAction(searchTxt));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterSearch);
