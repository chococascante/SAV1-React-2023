// import { ListaPublicacionesWrapper } from "./components/organisms/ListaPublicacionesWrapper";
// import { Provider } from "react-redux";
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { configureStore } from "@reduxjs/toolkit";
// import { todoReducer } from "./store/reducers/todo-reducer";
// import { userReducer } from "./store/reducers/user-reducer";
// import reducers from "./store/reducers";
// import { ListaTodosFunciones } from "./components/molecules/ListaTodosFunciones.js";
import { EjemploContextProvider } from "./contexts/Ejemplo";
import { ListaTodosContext } from "./components/molecules/ListaTodosContext";

// const storeViejo = createStore(
//   combineReducers(reducers),
//   applyMiddleware(thunk)
// );

// const storeNuevo = configureStore({
//   reducer: {
//     todoReducer,
//   },
// });

function App() {
  return (
    <div>
      <EjemploContextProvider>
        <ListaTodosContext />
      </EjemploContextProvider>

      <p>Hola Mundo</p>
    </div>
  );
}

export default App;
