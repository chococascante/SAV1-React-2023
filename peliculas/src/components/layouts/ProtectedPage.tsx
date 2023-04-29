import { useFirebaseAuth } from "@/contexts/firebase-auth-context";
import { useRouter } from "next/navigation";
import React from "react";

export const ProtectedPage: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { user } = useFirebaseAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return <>{children}</>;
};
