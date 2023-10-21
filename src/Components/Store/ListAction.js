import { leftActions } from "./leftSlice";
import { rightActions } from "./rightSlice";

export const makeItemChecked = (state) => {
  return async (dispatch) => {
    console.log(state.taskPending);
    if (state.taskPending === "True") {
      dispatch(leftActions.makeItemChecked(state.id));
    } else {
      dispatch(rightActions.makeItemChecked(state.id));
    }
  };
};

export const makeItemUnChecked = (state) => {
  return async (dispatch) => {
    console.log(state.taskPending);
    if (state.taskPending === "True") {
      dispatch(leftActions.makeItemUnChecked(state.id));
    } else {
      dispatch(rightActions.makeItemUnChecked(state.id));
    }
  };
};

export const leftToRight = (state) => {
  return async (dispatch) => {
    let list = state.filter((obj) => obj.checked === "True");
    console.log(list[0].id);
    dispatch(rightActions.addNewList(list[0].task));
    dispatch(leftActions.deleteList(list[0].id));
  };
};

export const rightToLeft = (state) => {
  return async (dispatch) => {
    let list = state.filter((obj) => obj.checked === "True");
    console.log(list[0].id);
    dispatch(leftActions.addNewList({ task: list[0].task }));
    dispatch(rightActions.deleteList(list[0].id));
  };
};
