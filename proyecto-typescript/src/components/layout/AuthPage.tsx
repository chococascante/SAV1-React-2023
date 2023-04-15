import React from "react";
import { useFirebaseAuth } from "../../contexts/FirebaseAuthContext";
import { useNavigate } from "react-router-dom";

export const AuthPage: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { authUser } = useFirebaseAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (authUser) {
      navigate("/");
    }
  }, [authUser, navigate]);

  return <>{children}</>;
};
