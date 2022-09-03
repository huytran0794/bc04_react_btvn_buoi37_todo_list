import {
  SUBMIT_DATA,
  UNSUBMIT_DATA,
  EDIT_DATA,
} from "../../constant/action.const";

export const submitDataAction = () => {
  return {
    type: SUBMIT_DATA,
  };
};

export const clearSubmitDataAction = () => {
  return {
    type: UNSUBMIT_DATA,
  };
};

export const editTodoAction = (todo) => ({
  type: EDIT_DATA,
  payload: todo,
});
