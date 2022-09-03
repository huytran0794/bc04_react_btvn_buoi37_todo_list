import _ from "lodash";
import {
  ADD_TO_DO,
  UPDATE_TO_DO,
  QUICK_UPDATE_TO_DO_STATUS,
  QUICK_UPDATE_TO_DO_TITLE,
  DELETE_TO_DO,
  SEARCH_TO_DO_BY_NAME,
} from "../../constant/action.const";
const initialState = {
  todoList: [],
  searchTerm: "",
};

export let todoListReducer = (state = initialState, { type, payload }) => {
  let findIdx;
  switch (type) {
    case ADD_TO_DO:
      state.todoList = [...state.todoList, payload];
      return { ...state };
    case QUICK_UPDATE_TO_DO_STATUS:
      findIdx = _.findIndex(state.todoList, (item) => item.id === payload.id);
      // luu y, mai coi lai
      // state.todoList[findIdx] = {
      //   ...state.todoList[findIdx],
      //   completed: !state.todoList[findIdx].completed,
      // };
      state.todoList[findIdx] = payload;
      return {
        ...state,
        todoList: [...state.todoList],
      };
    case QUICK_UPDATE_TO_DO_TITLE:
      findIdx = _.findIndex(state.todoList, (item) => item.id === payload.id);

      state.todoList[findIdx] = payload;
      return {
        ...state,
        todoList: [...state.todoList],
      };
    case UPDATE_TO_DO:
      findIdx = _.findIndex(state.todoList, (item) => item.id === payload.id);
      state.todoList[findIdx] = payload;
      console.log(state.todoList);
      return {
        ...state,
        todoList: [...state.todoList],
      };
    case DELETE_TO_DO:
      findIdx = _.findIndex(state.todoList, (item) => item.id === payload);
      state.todoList.splice(findIdx, 1);
      return {
        ...state,
        todoList: [...state.todoList],
      };
    case SEARCH_TO_DO_BY_NAME:
      return { ...state, searchTerm: payload };
    default:
      return state;
  }
};
