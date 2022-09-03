import logo from "./logo.svg";
import "./App.css";
import { GlobalStyles } from "./TodoApp/Components/styles/Global";
import TodoApp from "./TodoApp/TodoApp";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <TodoApp />
    </div>
  );
}

export default App;
