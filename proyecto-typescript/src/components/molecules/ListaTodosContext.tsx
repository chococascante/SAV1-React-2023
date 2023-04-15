import React from "react";
import { useEjemploContext } from "../../contexts/Ejemplo";
import { Todo } from "./Todo";
import "../../styles/listas.css";
import { Button as MUIButton, TextField } from "@mui/material";
import { Button as AntdButton } from "antd";
import styled from "@emotion/styled";
import { useFirebaseAuth } from "../../contexts/FirebaseAuthContext";

export const ListaTodosContext = () => {
  const { todos, loading, agregarTodo } = useEjemploContext();
  const { logout } = useFirebaseAuth();

  if (loading) return <p>Cargando...</p>;

  const handleEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await agregarTodo(e.currentTarget.value);
      e.currentTarget.value = "";
    }
  };

  return (
    <div>
      <Container fondo="#ccc">
        <input
          type="text"
          onKeyDown={handleEnter}
          placeholder="Ingrese un nuevo todo."
        />

        <StyledButton variant="contained" className="bg-orange-600">
          Esto es un botón
        </StyledButton>
        <AntdButton className="bg-lime-500">Esto es otro botón.</AntdButton>
        <MUIButton type="button" onClick={logout}>
          Cerrar sesión
        </MUIButton>
        <ul className="lista" id="lista">
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </ul>
      </Container>
    </div>
  );
};

const Container = styled.div<{ fondo: string }>`
  padding: 20px;
  ${(props) => props.fondo && `background-color: ${props.fondo};`}
`;

const StyledButton = styled(MUIButton)`
  color: #fff;
`;
