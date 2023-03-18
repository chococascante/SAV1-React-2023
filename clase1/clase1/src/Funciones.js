import React from "react";
import PropsFunciones from "./PropsFunciones";

let timerId = null;

export default function Funciones() {
  const [nombre, setNombre] = React.useState("Luis");
  const [apellido, setApellido] = React.useState("Cascante");

  // componentDidMount
  React.useEffect(() => {
    console.log("Did Mount");
    timerId = setTimeout(() => {
      setNombre("Juan");
      setApellido("Mendez");
    }, 3000);

    // componentWillUnmount
    return () => {
      console.log("Will Unmount");
      clearTimeout(timerId);
    };
  }, []);

  // componentDidUpdate
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
