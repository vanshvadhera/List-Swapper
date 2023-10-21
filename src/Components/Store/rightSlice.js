import { createSlice } from "@reduxjs/toolkit";

const rightSlice = createSlice({
  name: "right",
  initialState: [
    { id: 1, task: 1, checked: "False", taskPending: "False" },
    { id: 2, task: 2, checked: "False", taskPending: "False" },
  ],
  reducers: {
    addNewList(state, action){
      let newList = {
        id : state.length + 1,
        task: action.payload,
        checked : "False",
        taskPending : "False"
      }
      state.push(newList)
    },
    makeItemChecked(state,action){
      let id = action.payload;
      let item  = state.find((item) => item.id === id)
      item.checked = "True"
    },
    makeItemUnChecked(state,action){
      const id = action.payload
      const item = state.find((item) => item.id === id)
      item.checked = "False"
    },
    deleteList(state, action){
      const id = action.payload;
      console.log("Delet List called", id);
      return state.filter((item) => item.id !== id)
    }
  },
});

export const rightActions = rightSlice.actions;
export default rightSlice;
