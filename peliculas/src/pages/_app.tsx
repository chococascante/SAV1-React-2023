import { FirebaseAuthContextProvider } from "@/contexts/firebase-auth-context";
import { FirebaseContextProvider } from "@/contexts/firebase-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseContextProvider>
      <FirebaseAuthContextProvider>
        <Component {...pageProps} />
      </FirebaseAuthContextProvider>
    </FirebaseContextProvider>
  );
}
