import React from "react";

export const ListaEstudiantes = ({ listaEstudiantes }) => {
  return (
    <React.Fragment>
      {listaEstudiantes.map((estudiante) => (
        <div key={estudiante}>
          <p>{estudiante.id}</p>
          <p>nombre: {estudiante.nombre}</p>
          <p>apellido: {estudiante.apellido}</p>
          <p>edad: {estudiante.edad}</p>
        </div>
      ))}
    </React.Fragment>
  );
};
