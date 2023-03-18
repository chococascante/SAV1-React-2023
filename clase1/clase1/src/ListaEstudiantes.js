import React from "react";

export const ListaEstudiantes = ({ listaEstudiantes }) => {
  return (
    <React.Fragment>
      {listaEstudiantes.map((estudiante) => (
        <div key={estudiante}>
          <p>{estudiante}</p>
          <p>nombre: Nombre</p>
          <p>apellido: Apellido</p>
          <p>edad: 20</p>
        </div>
      ))}
    </React.Fragment>
  );
};
