import React from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
  User,
} from "firebase/auth";

export interface FirebaseAuthContextProps {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  user: User | undefined;
}

const FirebaseAuthContext = React.createContext<FirebaseAuthContextProps>({
  user: undefined,
  login: async () => {},
  logout: async () => {},
  register: async () => {},
});

export const FirebaseAuthContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = React.useState<User | undefined>(undefined);

  const login = React.useCallback(async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      setUser(userCredential.user);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const register = React.useCallback(
    async (email: string, password: string) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          getAuth(),
          email,
          password
        );
        setUser(userCredential.user);
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  const logout = React.useCallback(async () => {
    try {
      await signOut(getAuth());
    } catch (error) {
      console.error(error);
    }
  }, []);

  const authStateChanged = async (user: User | null) => {
    if (!user) {
      setUser(undefined);
      return;
    }
    setUser(user);
  };

  React.useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  const contextValue: FirebaseAuthContextProps = React.useMemo(
    () => ({
      user,
      login,
      logout,
      register,
    }),
    [user, login, logout, register]
  );

  return (
    <FirebaseAuthContext.Provider value={contextValue}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export const useFirebaseAuth = () =>
  React.useContext<FirebaseAuthContextProps>(FirebaseAuthContext);
