import React from "react";
import PropsFunciones from "./PropsFunciones";

export default function Funciones() {
  const [nombre, setNombre] = React.useState("Luis");
  const [apellido, setApellido] = React.useState("Cascante");

  React.useEffect(() => {
    console.log("Did Mount");
    setTimeout(() => {
      setNombre("Juan");
      setApellido("Mendez");
    }, 3000);
  }, []);

  React.useEffect(() => {
    console.log("Did Update");
    console.log(nombre);
  }, [nombre]);

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  console.log("Render");
  return (
    <div>
      {/*  */}
      <h1>Hola, mi nombre es {nombre}</h1>
      <input type="text" value={nombre} onChange={handleChange} />
      <PropsFunciones apellido={apellido} />
    </div>
  );
}
