import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { StyledTdListWrapper } from "./styles/TdList.styled";
import Todo from "./Todo";
class TodoList extends Component {
  state = {
    currentTabIdx: 0,
    tdList: [],
    inCompleteArr: [],
    completeArr: [],
  };
  renderTdList = () => {
    let list;
    switch (this.state.currentTabIdx) {
      case 1:
        list = this.state.completeArr;
        break;
      case 2:
        list = this.state.inCompleteArr;
        break;
      default:
        list = this.state.tdList;
        break;
    }

    return list.map((td, idx) => {
      return <Todo key={td.id.toString() + idx} td={td} />;
    });
  };

  renderCounter = () => {
    switch (this.state.currentTabIdx) {
      case 1:
        return (
          <p className="text text-complete">
            <span className="number nb-complete">
              {this.state.completeArr.length}
            </span>
            <span className="title">completed task</span>
          </p>
        );
      case 2:
        return (
          <p className="text text-incomplete">
            <span className="number nb-incomplete">
              {this.state.inCompleteArr.length}
            </span>
            <span className="title">task left</span>
          </p>
        );
      default:
        return (
          <p className="text text-all">
            <span className="number nb-complete">
              {this.state.completeArr.length}
            </span>
            <span className="char">/</span>
            <span className="number nb-all">{this.props.todoList.length}</span>
            <span className="title">completed task</span>
          </p>
        );
    }
  };
  handleChooseTab = (tab) => {
    this.setState({ currentTabIdx: tab });
  };
  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.todoList.length) {
      state.tdList = [...nextProps.todoList];
    }

    if (nextProps.searchTerm.length) {
      state.tdList = _.filter(nextProps.todoList, (td) => {
        let idx = td.title
          .toLowerCase()
          .indexOf(nextProps.searchTerm.toLowerCase());
        return idx > -1;
      });
    }

    state.completeArr = _.filter(state.tdList, (td) => td.completed);
    state.inCompleteArr = _.filter(state.tdList, (td) => !td.completed);

    return state;
  }
  render() {
    console.log("current tab:", this.state.currentTab);
    if (!this.props.todoList.length) {
      return (
        <h5
          style={{
            color: "#fff",
            fontSize: "35px",
            fontWeight: "500",
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          There is no task to show
        </h5>
      );
    }
    return (
      <>
        <StyledTdListWrapper className="td-list-wrapper">
          <ul className="todo-list">{this.renderTdList()}</ul>
          <div className="stat">
            <div className="td-counter">{this.renderCounter()}</div>
            <div className="filter-wraper">
              <div
                className={`filter-type ${
                  this.state.currentTabIdx === 0 && "active"
                }`}
                onClick={() => {
                  this.handleChooseTab(0);
                }}
              >
                All
              </div>
              <div
                className={`filter-type ${
                  this.state.currentTabIdx === 1 && "active"
                }`}
                onClick={() => {
                  this.handleChooseTab(1);
                }}
              >
                Completed
              </div>
              <div
                className={`filter-type ${
                  this.state.currentTabIdx === 2 && "active"
                }`}
                onClick={() => {
                  this.handleChooseTab(2);
                }}
              >
                In progress
              </div>
            </div>
            <div className="btn-clear">Clear completed</div>
          </div>
        </StyledTdListWrapper>
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  todoList: state.todoListReducer.todoList,
  searchTerm: state.todoListReducer.searchTerm,
});

export default connect(mapStateToProps)(TodoList);
