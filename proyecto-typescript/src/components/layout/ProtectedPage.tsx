import React from "react";
import { useFirebaseAuth } from "../../contexts/FirebaseAuthContext";
import { useNavigate } from "react-router-dom";

export const ProtectedPage: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { authUser } = useFirebaseAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser, navigate]);

  return <>{children}</>;
};
