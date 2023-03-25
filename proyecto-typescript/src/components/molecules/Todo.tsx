import React from "react";
import { useEjemploContext } from "../../contexts/Ejemplo";
import { ITodo } from "../../models/ITodo";

export interface TodoProps {
  todo: ITodo;
}

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const { toggleTodoCompleted } = useEjemploContext();

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleTodoCompleted(event.currentTarget.checked, todo.id);
  };

  return (
    <li style={{ listStyleType: "none" }}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheck}
        />
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.title}
        </span>
      </label>
    </li>
  );
};
