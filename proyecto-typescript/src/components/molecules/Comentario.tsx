import React from "react";
import { IComment } from "../../models/IComment";

interface IComentarioProps {
  comentario: IComment;
}

export const Comentario: React.FC<IComentarioProps> = ({ comentario }) => {
  return (
    <li>
      <p># {comentario.id}</p>
      <p>Escrito por: {comentario.name}</p>
      <p>{comentario.body}</p>
    </li>
  );
};
