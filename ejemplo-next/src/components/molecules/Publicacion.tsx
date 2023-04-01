import React from "react";
import { IPost } from "../../models/IPost";
import { Comentario } from "./Comentario";

interface IPublicacionProps {
  post: IPost;
}

export const Publicacion: React.FC<IPublicacionProps> = ({ post }) => {
  const renderComentarios = () => {
    if (!post.comentarios || post.comentarios.length === 0) {
      return null;
    }

    return (
      <ul>
        {post.comentarios.map((comentario) => {
          return (
            <Comentario
              key={`${comentario.id}-${comentario.email}`}
              comentario={comentario}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <li>
      <p># {post.id}</p>
      <p>Escrito por: {post.autor?.name}</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      {renderComentarios()}
    </li>
  );
};
