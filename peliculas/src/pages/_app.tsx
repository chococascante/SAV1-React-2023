import { FirebaseAuthContextProvider } from "@/contexts/firebase-auth-context";
import { FirebaseContextProvider } from "@/contexts/firebase-context";
import { PeliculasContextProvider } from "@/contexts/peliculas-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseContextProvider>
      <FirebaseAuthContextProvider>
        <PeliculasContextProvider>
          <Component {...pageProps} />
        </PeliculasContextProvider>
      </FirebaseAuthContextProvider>
    </FirebaseContextProvider>
  );
}
