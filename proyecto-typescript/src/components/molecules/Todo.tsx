import React from "react";
import { useEjemploContext } from "../../contexts/Ejemplo";
import { ITodo } from "../../models/ITodo";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

export interface TodoProps {
  todo: ITodo;
}

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const { toggleTodoCompleted } = useEjemploContext();

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleTodoCompleted(event.currentTarget.checked, todo.id);
  };

  return (
    <li className="list-none">
      <label>
        <Checkbox checked={todo.completed} onChange={handleCheck} />
        {/* <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheck}
        /> */}
        <Typography
          variant="body1"
          component="span"
          className={`${todo.completed ? "line-through" : "list-none"}`}
        >
          {todo.title}
        </Typography>
      </label>
    </li>
  );
};
