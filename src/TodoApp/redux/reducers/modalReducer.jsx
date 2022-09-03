import { HIDE_MODAL, SHOW_MODAL } from "../../constant/action.const";

const initialState = {
  open: false,
};

export let modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_MODAL:
      return { ...state, open: true };
    case HIDE_MODAL:
      return { ...state, open: false };
    default:
      return state;
  }
};
