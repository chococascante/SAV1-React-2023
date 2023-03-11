import React, { Component } from "react";

export class ListaEstudiantesClass extends Component {
  render() {
    const { listaEstudiantes } = this.props;
    return (
      <React.Fragment>
        {listaEstudiantes.map((estudiante) => (
          <p>{estudiante}</p>
        ))}
      </React.Fragment>
    );
  }
}
