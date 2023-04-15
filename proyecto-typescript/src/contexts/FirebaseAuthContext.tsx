import React from "react";
import {
  User,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export interface FirebaseAuthContextProps {
  authUser: User | undefined;
  authToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const FirebaseAuthContext = React.createContext<FirebaseAuthContextProps>({
  authUser: undefined,
  authToken: null,
  login: async () => {},
  signup: async () => {},
  loginWithGoogle: async () => {},
  logout: async () => {},
});

export const FirebaseAuthContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [authUser, setAuthUser] = React.useState<User | undefined>(undefined);
  const [authToken, setAuthToken] = React.useState<string | null>(null);

  const signup = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      setAuthUser(userCredential.user);
      const token = await userCredential.user.getIdToken();
      setAuthToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      setAuthUser(userCredential.user);
      const token = await userCredential.user.getIdToken();
      setAuthToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(getAuth(), provider);

      setAuthUser(userCredential.user);
      const token = await userCredential.user.getIdToken();
      setAuthToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(getAuth());
    } catch (error) {
      console.error(error);
    }
  };

  const authStateChanged = async (user: User | null) => {
    if (user) {
      setAuthUser(user);
      const token = await user.getIdToken();
      setAuthToken(token);
    } else {
      setAuthUser(undefined);
      setAuthToken(null);
    }
  };

  React.useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged(authStateChanged);

    return () => unsubscribe();
  }, [authUser]);

  const contextValue: FirebaseAuthContextProps = {
    authUser,
    authToken,
    login,
    signup,
    loginWithGoogle,
    logout,
  };

  return (
    <FirebaseAuthContext.Provider value={contextValue}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export const useFirebaseAuth = () =>
  React.useContext<FirebaseAuthContextProps>(FirebaseAuthContext);
