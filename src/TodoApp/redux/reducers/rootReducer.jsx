import { formReducer } from "./formReducer";
import { todoListReducer } from "./todoListReducer";
import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer";
let rootReducer = combineReducers({
  formReducer,
  todoListReducer,
  modalReducer,
});

export { rootReducer };
