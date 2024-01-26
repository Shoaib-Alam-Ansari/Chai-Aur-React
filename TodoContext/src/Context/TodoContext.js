import React,{createContext, useContext} from 'react'

export const Todotext = createContext({
    todos: [{
        id: 1,
        todo: " qwerth",
        complete: false
    }],

    addTodo: (toto) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    todoComplete: (id) => {},
});
export const TodoProvider = Todotext.Provider
export const  UseTodo = () => {
    return useContext(Todotext);
}

