import React from "react";
import axios from "axios";
import { ListaPublicaciones } from "../molecules/ListaPublicaciones";
import { IPost } from "../../models/IPost";
import { IUser } from "../../models/IUser";
import { IComment } from "../../models/IComment";

export const ListaPublicacionesWrapper = () => {
  const [publicaciones, setPublicaciones] = React.useState<IPost[]>([]);
  const [cargando, setCargando] = React.useState(true);

  const traerPublicaciones = async () => {
    try {
      // Hacer la petición
      const [posts, comentarios, usuarios] = await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/comments"),
        axios.get("https://jsonplaceholder.typicode.com/users"),
      ]);

      const publicacionesConAutoresYComentarios = (posts.data as IPost[]).map(
        (publicacion) => {
          const autorPublicacion = (usuarios.data as IUser[]).find(
            (usuario) => usuario.id === publicacion.userId
          );

          const comentariosDePublicacion = (
            comentarios.data as IComment[]
          ).filter((comentario) => comentario.postId === publicacion.id);

          return {
            ...publicacion,
            autor: autorPublicacion,
            comentarios: comentariosDePublicacion,
          };
        }
      );

      // Guardar en el estado
      setPublicaciones(publicacionesConAutoresYComentarios);

      // Cambiar el estado de cargando
      setCargando(false);
    } catch (error) {
      console.error(error);
    }
  };

  //componentDidMount
  React.useEffect(() => {
    traerPublicaciones();
  }, []);

  // const renderContent = () => {
  //   return cargando ? (
  //     <p>Cargando...</p>
  //   ) : (
  //     <ListaPublicaciones publicaciones={publicaciones} />
  //   );
  // };

  // const renderContentIf = () => {
  //   if (cargando) {
  //     return <p>Cargando...</p>;
  //   } else {
  //     return <ListaPublicaciones publicaciones={publicaciones} />;
  //   }
  // };

  if (cargando) {
    return <p>Cargando...</p>;
  }

  return <ListaPublicaciones publicaciones={publicaciones} />;
};
