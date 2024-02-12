import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, cheakTodo } from "../features/Todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const clickTodoHandler = (e) =>{
      e.preventDefault();
      dispatch(addTodo(input));
      setInput("")
  }

  return (
    <>
      <div class="input-group">
        <input
          type="text"
          value={input}
          class="form-control"
          placeholder="Enter a todo..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button class="btn btn-primary" type="button" id="button-addon2" onClick={clickTodoHandler}>
          Button
        </button>
      </div>
    </>
  );
}

export default AddTodo;
