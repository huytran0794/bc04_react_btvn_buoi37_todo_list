import {
  ADD_TO_DO,
  UPDATE_TO_DO,
  QUICK_UPDATE_TO_DO_STATUS,
  DELETE_TO_DO,
  SEARCH_TO_DO_BY_NAME,
  QUICK_UPDATE_TO_DO_TITLE,
} from "../../constant/action.const";

export const addTodoAction = (todo) => ({
  type: ADD_TO_DO,
  payload: todo,
});

export const deleteTodoAction = (todoId) => ({
  type: DELETE_TO_DO,
  payload: todoId,
});

export const updateTodoAction = (todo) => ({
  type: UPDATE_TO_DO,
  payload: todo,
});

export const quickUpdateStatusAction = (td) => ({
  type: QUICK_UPDATE_TO_DO_STATUS,
  payload: td,
});

export const quickUpdateTitleAction = (td) => ({
  type: QUICK_UPDATE_TO_DO_TITLE,
  payload: td,
});

export const searchNameTodoAction = (todoName) => ({
  type: SEARCH_TO_DO_BY_NAME,
  payload: todoName,
});
