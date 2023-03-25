import { ListaPublicacionesWrapper } from "./components/organisms/ListaPublicacionesWrapper";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./store/reducers/todo-reducer";
import { ListaTodosFunciones } from "./components/molecules/ListaTodosFunciones";

const storeViejo = createStore(
  combineReducers({ todoReducer }),
  applyMiddleware()
);

// const storeNuevo = configureStore({
//   reducer: {
//     todoReducer,
//   },
// });

function App() {
  return (
    <Provider store={storeViejo}>
      <div>
        <ListaTodosFunciones />
      </div>
    </Provider>
  );
}

export default App;
