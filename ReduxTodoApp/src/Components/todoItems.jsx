import { useSelector, useDispatch } from "react-redux";
import {
  toggleComplete,
  deleteTodo,
  editTodo,
} from "../features/Todo/todoSlice";
import { useState } from "react";
function TodoItems() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  console.log(todos);
  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSave = (id) => {
    dispatch(editTodo({ id, text: editText }));
    setEditId(null);
    setEditText("");
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <>
      {todos.map((todo) => (

        <div key={todo.id} className="mt-2">
          <div className={`bg-danger-subtle d-flex p-2 align-items-center gap-2 rounded `}>
            <input
              type="checkbox"
              disabled={editText}
              className={`form-check-input`}
              checked={todo.complete}
              onChange={() => handleToggleComplete(todo.id)}
            />

            {editId === todo.id ? (
              <input
                type="text"
                className={`form-control  ${
                  editText ? " form-control " : " bg-danger-subtle "
                }`}
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <input
                type="text"
                readOnly={!editText}
                className={`form-control  ${
                  editText ? " form-control" : " bg-danger-subtle "
                }  ${todo.complete ? "text-decoration-line-through" : ""}`}
                value={todo.text}
              />
            )}
            {editId === todo.id ? (
              <button
                className="btn bg-light"
                onClick={() => handleSave(todo.id)}
              >
                Save
              </button>
            ) : (
              <button
                className={`btn bg-light" ${
                  todo.complete ? "disabled" : "btn bg-light"
                }`}
                onClick={() => handleEdit(todo.id, todo.text)}
              >
                Edit
              </button>
            )}

            <button
              className="btn bg-light"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoItems;
