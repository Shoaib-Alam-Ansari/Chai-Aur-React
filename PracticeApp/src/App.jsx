import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ContextProvider } from "./Context/UseContext";
import TodoForm from "./Components/TodoForm";
import TodoItems from "./Components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id
          ? { ...prevtodo, complete: !prevtodo.complete }
          : prevtodo
      )
    );
  };

  return (
    <ContextProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column gap-2 mt-5 align-items-center ">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <TodoForm />
            </div>
            {todos.map((todo) => (
              <div className="col-12 col-sm-6 col-md-6 col-lg-6" key={todo.id}>
                <TodoItems todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
