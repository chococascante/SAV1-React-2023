import { EjemploContextProvider } from "./contexts/Ejemplo";
import { ListaTodosContext } from "./components/molecules/ListaTodosContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ListaPublicacionesWrapper } from "./components/organisms/ListaPublicacionesWrapper";
import { PublicacionPorId } from "./components/organisms/PublicacionPorId";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <EjemploContextProvider>
        <ListaTodosContext />
      </EjemploContextProvider>
    ),
  },
  {
    path: "/publicaciones",
    element: <ListaPublicacionesWrapper />,
  },
  {
    path: "/publicaciones/:id",
    element: <PublicacionPorId />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
