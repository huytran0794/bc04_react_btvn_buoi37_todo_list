import React, { Component } from "react";
import { connect } from "react-redux";
import { editTodoAction } from "../redux/actions/formAction";
import { showModalAction } from "../redux/actions/modalAction";
import {
  deleteTodoAction,
  quickUpdateStatusAction,
} from "../redux/actions/todoListAction";
import {
  StyledTdAction,
  StyledTdDetail,
  StyledTodo,
} from "./styles/Todo.styled";
import { StyledTdStatus } from "./styles/Todo.styled";
class Todo extends Component {
  render() {
    let { id, title, completed } = this.props.td;
    return (
      <StyledTodo className="todo td" id={`td-${id}`}>
        <StyledTdStatus className="td-status">
          <label htmlFor={`status-input-${id}`} className="cb-wrapper">
            <input
              type="checkbox"
              className="cb-input status-input"
              id={`status-input-${id}`}
              checked={completed}
              onChange={() => {
                this.props.handleQuickUpdateStatus({
                  id,
                  title,
                  completed: !completed,
                });
              }}
            ></input>
            <span className="icon-check fa-solid fa-check"></span>
          </label>
        </StyledTdStatus>
        <StyledTdDetail className="td-detail" completed={completed}>
          <span className="td-name">{title}</span>
          <span className="td-create-date"></span>
        </StyledTdDetail>
        <StyledTdAction className="td-action">
          <button
            type="button"
            className="btn btn-edit"
            onClick={() => {
              // mo modal
              this.props.handleOpenModal();
              this.props.handleFormEdit(this.props.td);
              // thong bao modal la cai form bay gio se la edit form, voi edit data
            }}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button
            type="button"
            className="btn btn-delete "
            onClick={() => {
              this.props.handleDeleteTd(id);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </StyledTdAction>
      </StyledTodo>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  handleOpenModal: () => {
    dispatch(showModalAction());
  },
  handleFormEdit: (todo) => {
    dispatch(editTodoAction(todo));
  },

  handleQuickUpdateStatus: (td) => {
    dispatch(quickUpdateStatusAction(td));
  },

  handleDeleteTd: (id) => {
    dispatch(deleteTodoAction(id));
  },
});

export default connect(null, mapDispatchToProps)(Todo);
