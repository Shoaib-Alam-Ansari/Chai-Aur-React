import { createContext, useContext } from "react";

export const TodoContext = createContext({
todos: [],
addTodo: (todo) => {},
updateTodo:  (todo, id) => {},
deleteTodo: (id) => {},
toggleComplete: (id) => {}

});

export const ContextProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}

