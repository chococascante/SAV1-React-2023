import React from "react";
import { ITodo } from "../models/ITodo";
import { IUser } from "../models/IUser";
import { getTodos, saveTodo } from "../services/firebase";
import { useFirebaseAuth } from "./FirebaseAuthContext";

export interface EjemploContextProps {
  todos: ITodo[];
  users: IUser[];
  loading: boolean;

  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  agregarTodo: (title: string) => Promise<void>;
  toggleTodoCompleted: (newValue: boolean, todoId: number) => void;
}

const EjemploContext = React.createContext<EjemploContextProps>({
  todos: [],
  users: [],
  loading: false,
  setTodos: () => {},
  setUsers: () => {},
  setLoading: () => {},
  agregarTodo: () => Promise.resolve(),
  toggleTodoCompleted: () => {},
});

export const EjemploContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const { authUser } = useFirebaseAuth();

  const traerTodos = React.useCallback(async () => {
    try {
      setLoading(true);
      if (!authUser) return;
      const response = await getTodos(authUser);

      setTodos(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [authUser]);

  const agregarTodo = React.useCallback(
    async (title: string) => {
      if (!authUser || !title) return;
      const newTodo: ITodo = {
        id: Math.random(),
        title,
        completed: false,
      };
      if (!authUser) return;
      try {
        await saveTodo(newTodo, authUser);

        const nuevosTodos = await getTodos(authUser);
        setTodos(nuevosTodos);
      } catch (error) {
        console.error(error);
      }
    },
    [authUser]
  );

  const toggleTodoCompleted = React.useCallback(
    (newValue: boolean, todoId: number) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: newValue,
          };
        }
        return todo;
      });

      setTodos(newTodos);
    },
    [todos]
  );

  React.useEffect(() => {
    traerTodos();
  }, [traerTodos]);

  const contextValue = React.useMemo(
    () => ({
      todos,
      users,
      setTodos,
      setUsers,
      loading,
      setLoading,
      agregarTodo,
      toggleTodoCompleted,
    }),
    [
      todos,
      users,
      setTodos,
      setUsers,
      loading,
      setLoading,
      agregarTodo,
      toggleTodoCompleted,
    ]
  );
  return (
    <EjemploContext.Provider value={contextValue}>
      {children}
    </EjemploContext.Provider>
  );
};

export const useEjemploContext = () =>
  React.useContext<EjemploContextProps>(EjemploContext);
