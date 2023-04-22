import React from "react";
import {
  UserCredential,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";

export interface FirebaseAuthContextProps {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  user: UserCredential | undefined;
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
  const [user, setUser] = React.useState<UserCredential | undefined>(undefined);

  const login = React.useCallback(async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      setUser(userCredential);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <div>firebase-auth-context</div>;
};
