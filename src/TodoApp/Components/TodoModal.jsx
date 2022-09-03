import React, { Component } from "react";
import { connect } from "react-redux";
import { hideModalAction } from "../redux/actions/modalAction";
import { submitDataAction } from "../redux/actions/formAction";
import {
  StyledBtnClose,
  StyledBtnCancel,
  StyledBtnSuccess,
} from "./styles/Button.styled";

import { StyledModal, StyledModalOverlay } from "./styles/Modal.styled";
import Form from "./Form";

class TodoModal extends Component {
  state = {
    isEdit: false,
  };
  renderModalTitle = () => (
    <h4 className="title">
      {(this.state.isEdit && "Edit task") || "Add task"}
    </h4>
  );
  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.todoEditing) {
      return { isEdit: true };
    }
    return true;
  }
  render() {
    console.log("Render whole modal");
    if (!this.props.open) return null;
    return (
      <>
        <StyledModal className="modal" id="modalInput">
          <div className="modal-wrapper">
            <div className="modal-content">
              <div className="modal-header">
                {this.renderModalTitle()}
                <StyledBtnClose
                  className="btn-close"
                  onClick={this.props.handleCloseForm}
                >
                  &times;
                </StyledBtnClose>
              </div>
              <div className="modal-body">
                <div className="wrapper">
                  <Form initState={this.state} />
                </div>
              </div>
              <div className="modal-footer">
                <StyledBtnCancel
                  className="btn-cancel"
                  onClick={this.props.handleCloseForm}
                >
                  Cancel
                </StyledBtnCancel>
                <StyledBtnSuccess
                  type="button"
                  className="btn-create"
                  onClick={this.props.handleSubmitData}
                >
                  {(this.state.isEdit && "Update task") || "Create task"}
                </StyledBtnSuccess>
              </div>
            </div>
          </div>
        </StyledModal>
        <StyledModalOverlay
          className="overlay"
          onClick={this.props.handleCloseForm}
        ></StyledModalOverlay>
      </>
    );
  }
  componentWillUnmount() {
    console.log("Modal unmount ne");
    // this.props.handleCancelSubmitData();
  }
}

let mapStateToProps = (state) => ({
  open: state.modalReducer.open,
  todoEditing: state.formReducer.todoEditing,
});

let mapDispatchToProps = (dispatch) => ({
  handleCloseForm: () => {
    dispatch(hideModalAction());
  },
  handleSubmitData: () => {
    dispatch(submitDataAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoModal);
