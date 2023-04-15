import React from "react";
import { FirebaseApp, initializeApp, getApps, getApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

let app: FirebaseApp | null = null;
let auth: Auth | null = null;

export interface FirebaseContextProps {
  firebaseApp: FirebaseApp | null;
  firebaseAuth: Auth | null;
}

const initFirebase = () => {
  if (!app || getApps().length === 0) {
    app = initializeApp({
      apiKey: "AIzaSyAnVsOUBI-eFYNR6E7iOXBWSv80o2u8Ew4",
      authDomain: "clasereact-272df.firebaseapp.com",
      projectId: "clasereact-272df",
      storageBucket: "clasereact-272df.appspot.com",
      messagingSenderId: "1065753768701",
      appId: "1:1065753768701:web:73a2e6ae7b8e0fe6310494",
      measurementId: "G-W16VKE67YK",
    });
  }

  return app;
};

const FirebaseContext = React.createContext<FirebaseContextProps>({
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

    if (firebaseApp) {
      getAnalytics(getApp());
    }
  }, [firebaseApp]);

  React.useEffect(() => {
    if (!firebaseAuth) {
      setFirebaseAuth(getAuth());
    }
  }, [firebaseAuth]);

  const contextValue: FirebaseContextProps = {
    firebaseApp,
    firebaseAuth,
  };

  return (
    <FirebaseContext.Provider value={contextValue}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () =>
  React.useContext<FirebaseContextProps>(FirebaseContext);
