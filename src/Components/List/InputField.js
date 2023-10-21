import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { leftActions } from "../Store/leftSlice";

const InputField = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    console.log(input);
    dispatch(
      leftActions.addNewList({
        task: input,
      })
    );
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add Item</button>
    </div>
  );
};

export default InputField;
