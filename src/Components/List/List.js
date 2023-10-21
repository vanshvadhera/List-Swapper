import React from "react";
import { makeItemChecked, makeItemUnChecked } from "../Store/ListAction";
import { useDispatch } from "react-redux";

const List = (props) => {
  const dispatch = useDispatch()
  const handleChange = (state) => {
    if (state.target.checked){
      dispatch(makeItemChecked({
        id: props.id,
        taskPending: props.taskPending
      }))
    } else{
      dispatch(makeItemUnChecked({
        id: props.id,
        taskPending: props.taskPending
      }))
    }
  };
  const data = props.data;
  const id = props.id;
  return (
    <div style={{ padding: "15px" }}>
      <input
        type="checkbox"
        name={data}
        id={id}
        value={data}
        style={{ marginRight: "10px" }}
        onChange={handleChange}
      />
      <label htmlFor="Item1">{data}</label>
      <h3>{props.checked}</h3>
      <h3>{props.taskPending}</h3>
    </div>
  );
};

export default List;
