import { SHOW_MODAL, HIDE_MODAL } from "../../constant/action.const";

export const showModalAction = () => {
  console.log(SHOW_MODAL);
  return {
    type: SHOW_MODAL,
  };
};

export const hideModalAction = () => {
  console.log(HIDE_MODAL);
  return {
    type: HIDE_MODAL,
  };
};
