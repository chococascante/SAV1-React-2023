import { EjemploContextProvider } from "./contexts/Ejemplo";
import { ListaTodosContext } from "./components/molecules/ListaTodosContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ListaPublicacionesWrapper } from "./components/organisms/ListaPublicacionesWrapper";
import { PublicacionPorId } from "./components/organisms/PublicacionPorId";
import { LoginForm } from "./components/organisms/LoginForm";
import { FirebaseContextProvider } from "./contexts/FirebaseContext";
import { FirebaseAuthContextProvider } from "./contexts/FirebaseAuthContext";
import { SignupForm } from "./components/organisms/SignupForm";
import { ProtectedPage } from "./components/layout/ProtectedPage";
import { AuthPage } from "./components/layout/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedPage>
        <EjemploContextProvider>
          <ListaTodosContext />
        </EjemploContextProvider>
      </ProtectedPage>
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
  {
    path: "/login",
    element: (
      <AuthPage>
        <LoginForm />
      </AuthPage>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthPage>
        <SignupForm />
      </AuthPage>
    ),
  },
]);

function App() {
  return (
    <FirebaseContextProvider>
      <FirebaseAuthContextProvider>
        <RouterProvider router={router} />
      </FirebaseAuthContextProvider>
    </FirebaseContextProvider>
  );
}

export default App;
