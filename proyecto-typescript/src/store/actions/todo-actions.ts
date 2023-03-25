import { ADD_TODO, UPDATE_TODOS } from ".";
import { ITodo } from "../../models/ITodo";

export const addTodo = (payload: ITodo) => ({
  type: ADD_TODO,
  payload,
});

export const updateTodos = (payload: ITodo[]) => ({
  type: UPDATE_TODOS,
  payload,
});
