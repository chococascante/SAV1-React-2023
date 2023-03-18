import React from "react";
import { PropsFunciones } from "./PropsFunciones";

export default function Funciones() {
  const [nombre, setNombre] = React.useState<string>("Luis");
  const [apellido, setApellido] = React.useState("Cascante");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(event.target.value);
  };

  return (
    <>
      <h1>Hola, mi nombre es {nombre}</h1>
      <section></section>
      <input type="text" value={nombre} onChange={handleChange} />
      <PropsFunciones apellido={apellido} />
    </>
  );
}
