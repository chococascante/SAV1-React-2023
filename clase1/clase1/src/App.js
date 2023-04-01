import { ListaEstudiantes } from "./ListaEstudiantes";
import { ListaEstudiantesClass } from "./ListaEstudiantesClass";

const listaNombresEstudiantes = [
  "José",
  "Juan",
  "Luis",
  "Cristian",
  "Fiorella",
  "Yensy",
];

const listaEstudiantes = [
  {
    nombre: "José",
    apellido: "Pérez",
    edad: 20,
  },
  {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 20,
  },
  {
    nombre: "Luis",
    apellido: "Pérez",
    edad: 20,
  },
  {
    nombre: "Cristian",
    apellido: "Pérez",
    edad: 20,
  },
  {
    nombre: "Fiorella",
    apellido: "Pérez",
    edad: 20,
  },
  {
    nombre: "Yensy",
    apellido: "Pérez",
    edad: 20,
  },
];

function App() {
  return (
    <div>
      <ListaEstudiantes listaEstudiantes={listaEstudiantes} />
      <ListaEstudiantesClass listaEstudiantes={listaNombresEstudiantes} />
    </div>
  );
}

export default App;
