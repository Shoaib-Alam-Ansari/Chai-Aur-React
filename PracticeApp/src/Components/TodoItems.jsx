import React, { useState } from "react";
import { useTodo } from "../Context/UseContext";
function TodoItems({ todo }) {
  const { deleteTodo, updateTodo, toggleComplete } = useTodo();
  const [todomsg, setTodomsg] = useState(todo.todo);
  const [todoEditable, setTodoEitable] = useState(false);
  console.log(todo.complete);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todomsg });
    setTodoEitable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <>
      <div>
        <div
          className={`p-2 d-flex gap-1 rounded justify-content-center align-items-center mb-2 ${
            todo.complete ? " bg-success-subtle " : "bg-secondary"
          }`}
        >
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={todo.complete}
            onChange={toggleCompleted}
            disabled={todoEditable}
          />
          <input
            value={todomsg}
            type="text"
            className={`form-control border-0  ${
              !todoEditable ? "bg-secondary" : "form-control"
            }`}
            onChange={(e) => setTodomsg(e.target.value)}
            readOnly={!todoEditable}
          />
          <span
            className={`btn bg-light ${todo.complete ? "disabled" : ""}`}
            onClick={() => {
              if (todoEditable) {
                editTodo();
              } else {
                setTodoEitable((prev) => !prev);
              }
            }}
          >
            U
          </span>
          <span className="btn bg-light" onClick={() => deleteTodo(todo.id)}>
            D
          </span>
        </div>
      </div>
    </>
  );
}

export default TodoItems;
