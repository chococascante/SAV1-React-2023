import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { traerTodos, updateTodos } from "../../store/actions/todo-actions";
import { updateUsers } from "../../store/actions/user-action";

export const ListaTodosFunciones = () => {
  const todos = useSelector((state) => state.todoReducer.todos);

  console.log(todos);

  const dispatch = useDispatch();

  const fetchTodos = React.useCallback(
    () => dispatch(traerTodos()),
    [dispatch]
  );

  // componentDidMount
  React.useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return <div>ListaTodosFunciones</div>;
};
