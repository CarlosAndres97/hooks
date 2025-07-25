import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-reducer/todoReducer"

const initialState = []
  
const init = () => {
  return JSON.parse(localStorage.getItem('todos') || [])
}

export const useTodos = (  ) => {
  

  const [ todos, dispatch ] = useReducer(todoReducer, initialState, init)

  useEffect(
      () => {
       localStorage.setItem('todos', JSON.stringify(todos))
      }
    ,[todos])
  
    const handleNewTodo = (todo) => {
      const action = {
        type: "[TODO] Add Todo",
        payload: todo
      }
      dispatch(action)
    }
  
    const handleToggleTodo = ( id ) => {
      dispatch({
          type: "[TODO] Toggle Todo",
          payload: id
      });
      
    }
  
    const handleDeleteTodo = ( id ) => {
      dispatch({
          type: "[TODO] Remove Todo",
          payload: id
      });
    }

    const todosCount = todos.length;

    const pendingTodosCount = todos.filter(todo => !todo.done).length;

  return{
    todos,
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo,
    todosCount,
    pendingTodosCount
  }
}