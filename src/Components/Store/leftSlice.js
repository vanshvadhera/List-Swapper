import { createSlice } from "@reduxjs/toolkit";

const leftSlice = createSlice({
  name: "left",
  initialState: [
    { id: 1, task: "Task1", checked: "False", taskPending: "True" },
    { id: 2, task: "Task2", checked: "False", taskPending: "True" },
  ],
  reducers: {
    makeItemChecked(state, action) {
      const id = action.payload;
      const item = state.find((item) => item.id === id);
      item.checked = "True";
    },
    makeItemUnChecked(state, action) {
      const id = action.payload;
      const item = state.find((item) => item.id === id);
      item.checked = "False";
    },
    addNewList(state, action) {
      let newList = {
        id: state.length + 1,
        task: action.payload.task,
        checked: "False",
        taskPending: "True",
      };
      state.push(newList);
    },
    deleteList(state, action) {
      const id = action.payload;
      console.log("Delet List called", id);
      return state.filter((item) => item.id !== id)
    },
  },
});

export const leftActions = leftSlice.actions;
export default leftSlice;
