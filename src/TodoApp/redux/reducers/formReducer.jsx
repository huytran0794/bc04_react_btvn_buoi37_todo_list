import {
  SUBMIT_DATA,
  UNSUBMIT_DATA,
  EDIT_DATA,
} from "../../constant/action.const";

const initialState = {
  submit: false,
  todoEditing: null,
};

export let formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBMIT_DATA:
      return { ...state, submit: true };
    case UNSUBMIT_DATA:
      return { ...state, submit: false };
    case EDIT_DATA:
      return { ...state, todoEditing: payload };
    default:
      return state;
  }
};
