import React, { useState } from "react";
import { useTodo } from "../Context/UseContext";

function TodoForm() {
    const [todo, setTodo] =  useState('');
    const {addTodo} = useTodo()
    const clickHandle = () => {

        if(!todo)return
        addTodo({todo, complete: false})
        setTodo('')
    }

  return (
    <div>
      <div class="input-group mb-3">
        <input
          type="text"
          value={todo}
          class="form-control"
          placeholder="enter a new todo"
          onChange={(e) => setTodo(e.target.value)}

        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={clickHandle}
        >
          Button
        </button>
      </div>
    </div>
  );
}

export default TodoForm;
