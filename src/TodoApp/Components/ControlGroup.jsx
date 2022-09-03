import React, { Component } from "react";
import { connect } from "react-redux";
import { showModalAction } from "../redux/actions/modalAction";
import FilterGroup from "./FilterGroup";
import { StyledBtnWithIcon } from "./styles/Button.styled";
class ControlGroup extends Component {
  render() {
    console.log("Re-render");
    return (
      <div className="control-group flex justify-between">
        <StyledBtnWithIcon
          className="btn-add"
          bg="rgba(110, 133, 183, 1);"
          color="#fff;"
          onClick={this.props.handleOpenModal}
        >
          <i className="icon fa-solid fa-plus"></i>
          <span className="text">Add task</span>
        </StyledBtnWithIcon>
        <FilterGroup />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  handleOpenModal: () => {
    dispatch(showModalAction());
  },
});

export default connect(null, mapDispatchToProps)(ControlGroup);
