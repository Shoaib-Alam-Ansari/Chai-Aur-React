import { useSelector, useDispatch,  } from "react-redux";
import { cheakTodo, deleteTodo, updateTodo  } from "../features/Todo/todoSlice";
import { useState } from "react";
function TodoItems({todo}) {
  const [todoMsg, setTodoMsg] = useState([])
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos);
  return (
    <>
      {todos.map((todo) => (
        <div className=" bg-danger-subtle d-flex justify-content-between py-2 px-3 rounded mt-2 gap-2">
          <div className="col-9 col-sm-8 col-md-9 col-lg-9 col-xl-10 d-flex gap-2 justify-content-center align-items-center">
            <input type="checkbox" className=" form-check-input" checked={todos.complete} onChange={() => dispatch(cheakTodo(todo.id))} />
            <input type="text" className="form-control" value={todo.text} key={todo.id} />
          </div>
          <div className="d-flex gap-2">
            <button className="btn bg-light" onClick={() => dispatch(updateTodo([...todos, todo.text]))}

            >E</button>
            <button className="btn bg-light" onClick={() => dispatch(deleteTodo(todo.id))}>D</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoItems;
