import React, { Component } from "react";
import { StyledContainer } from "./Components/styles/Container.styled";
import { StyledHeader } from "./Components/styles/Header.styled";
import { StyledTodoApp } from "./Components/styles/TodoApp.styled";
import ControlGroup from "./Components/ControlGroup";
import TodoModal from "./Components/TodoModal";
import TodoList from "./Components/TodoList";
class TodoApp extends Component {
  render() {
    console.log("App render");
    return (
      <StyledTodoApp className="TodoApp">
        <StyledHeader className="app-title">To do List</StyledHeader>
        <main>
          <section className="app-content">
            <StyledContainer>
              <div className="wrapper">
                <div className="content">
                  <ControlGroup />
                  <TodoModal />
                  {/* todo list */}
                  <TodoList />
                </div>
              </div>
            </StyledContainer>
          </section>
        </main>
      </StyledTodoApp>
    );
  }
}

export default TodoApp;
