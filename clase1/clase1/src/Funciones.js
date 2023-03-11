import React from "react";
import PropsFunciones from "./PropsFunciones";

export default function Funciones() {
  const [nombre, setNombre] = React.useState("Luis");
  const [apellido, setApellido] = React.useState("Cascante");

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setNombre("Juan");
  //     setApellido("Mendez");
  //   }, 3000);
  // });
  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div>
      {/*  */}
      <h1>Hola, mi nombre es {nombre}</h1>
      <input type="text" value={nombre} onChange={handleChange} />
      <PropsFunciones apellido={apellido} />
    </div>
  );
}
