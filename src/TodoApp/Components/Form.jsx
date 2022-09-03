import React, { Component } from "react";
import { initTodo } from "../constant/todo";
import { StyledForm, StyledFormGroup, StyledInput } from "./styles/Form.styled";
import { StyledSelect } from "./styles/SimpleSelect.styled";
import { connect } from "react-redux";
import {
  addTodoAction,
  updateTodoAction,
} from "../redux/actions/todoListAction";
import { nanoid } from "nanoid";
import { hideModalAction } from "../redux/actions/modalAction";
import {
  clearSubmitDataAction,
  editTodoAction,
} from "../redux/actions/formAction";
class Form extends Component {
  state = {
    todo: initTodo,
    isEdit: false,
  };
  handleOnChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      todo: { ...this.state.todo, [name]: value },
    });
  };

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.todoEditing) {
      // reset data cua todoediting ve lai null de cho user co the nhap input
      nextProps.handleFormEdit(null);
      return {
        todo: nextProps.todoEditing,
        isEdit: true,
      };
    }
    if (nextProps.isSubmitted) {
      if (state.isEdit) {
        nextProps.handleUpdateTodo({
          ...state.todo,
          completed: state.todo.completed === "2",
        });
      } else {
        nextProps.handleAddTodo({
          ...state.todo,
          id: nanoid(),
          completed: state.todo.completed === "2",
        });
      }

      nextProps.handleCloseForm();
    }
    return null;
  }

  render() {
    return (
      <StyledForm className="todo-form">
        <StyledFormGroup>
          <label htmlFor="td-title" className="group-title">
            Title
          </label>
          <StyledInput
            className="td-title"
            id="td-title"
            name="title"
            placeholder="What's need to be done"
            onChange={this.handleOnChange}
            value={this.state.todo.title}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="td-status-select" className="group-title">
            Choose task status
          </label>
          <StyledSelect
            className="status-select"
            id="td-status-select"
            name="completed"
            onChange={this.handleOnChange}
            value={!this.state.todo.completed ? "1" : "2"}
          >
            <option value="1">In progress</option>
            <option value="2">Completed</option>
          </StyledSelect>
        </StyledFormGroup>
        {/* <StyledFormGroup>
          <label htmlFor="td-status-select" className="group-title">
            Choose task priority
          </label>
          <StyledSelect
            className="priority-select"
            id="td-priority-select"
            name="priority"
            onChange={this.handleOnChange}
            value={this.state.todo.priority}
          >
            <option value="1">Priority 1</option>
            <option value="2">Priority 2</option>
            <option value="3">Priority 3</option>
          </StyledSelect>
        </StyledFormGroup> */}
      </StyledForm>
    );
  }

  componentWillUnmount() {
    this.props.handleCancelSubmitData();
  }
}

let mapStateToProps = (state) => ({
  todoEditing: state.formReducer.todoEditing,
  isSubmitted: state.formReducer.submit,
});

let mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (todo) => {
    dispatch(addTodoAction(todo));
  },
  handleUpdateTodo: (todo) => {
    dispatch(updateTodoAction(todo));
  },
  handleFormEdit: (todo) => {
    dispatch(editTodoAction(todo));
  },

  handleCloseForm: () => {
    dispatch(hideModalAction());
  },
  handleCancelSubmitData: () => {
    dispatch(clearSubmitDataAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
