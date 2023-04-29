import { useFirebaseAuth } from "@/contexts/firebase-auth-context";
import { useRouter } from "next/navigation";
import React from "react";

export const AuthPage: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { user } = useFirebaseAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return <>{children}</>;
};
