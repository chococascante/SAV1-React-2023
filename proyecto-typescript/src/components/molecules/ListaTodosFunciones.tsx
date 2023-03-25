import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { updateTodos } from "../../store/actions/todo-actions";

export const ListaTodosFunciones = () => {
  const todos = useSelector((state: any) => state.todoReducer.todos);

  console.log(todos);

  const dispatch = useDispatch();

  const traerTodos = React.useCallback(async () => {
    const responseTodos = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const updateTodosAction = updateTodos(responseTodos.data);

    dispatch(updateTodosAction);
  }, [dispatch]);

  // componentDidMount
  React.useEffect(() => {
    traerTodos();
  }, [traerTodos]);

  return <div>ListaTodosFunciones</div>;
};
