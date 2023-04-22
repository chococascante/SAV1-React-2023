import { FirebaseApp, initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import React from "react";

export interface FirebaseContextProps {
  firebaseApp: FirebaseApp | null;
  firebaseAuth: Auth | null;
}

const firebaseConfig = {
  apiKey: "AIzaSyBA7fdmAIQPYffojhOjO_9KwC-fI3azvHY",
  authDomain: "clasesav1peliculas.firebaseapp.com",
  projectId: "clasesav1peliculas",
  storageBucket: "clasesav1peliculas.appspot.com",
  messagingSenderId: "44884227002",
  appId: "1:44884227002:web:7e38524fbfe51183cd6383",
  measurementId: "G-4SQKFK22NC",
};

let app: FirebaseApp | null = null;
let auth: Auth | null = null;

const initFirebase = () => {
  if (!app || getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  }

  return app;
};

export const FirebaseContext = React.createContext<FirebaseContextProps>({
  firebaseApp: initFirebase(),
  firebaseAuth: null,
});

export const FirebaseContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [firebaseApp, setFirebaseApp] = React.useState<FirebaseApp | null>(app);
  const [firebaseAuth, setFirebaseAuth] = React.useState<Auth | null>(auth);

  React.useEffect(() => {
    if (!firebaseApp) {
      setFirebaseApp(initFirebase());
    }

    if (!firebaseAuth) {
      setFirebaseAuth(getAuth());
    }
  }, [firebaseApp, firebaseAuth]);

  const contextValue: FirebaseContextProps = React.useMemo(
    () => ({
      firebaseApp,
      firebaseAuth,
    }),
    [firebaseApp, firebaseAuth]
  );

  return (
    <FirebaseContext.Provider value={contextValue}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebaseContext = () =>
  React.useContext<FirebaseContextProps>(FirebaseContext);
