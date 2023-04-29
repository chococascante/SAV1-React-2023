import Image from "next/image";

import { ProtectedPage } from "@/components/layouts/ProtectedPage";
import { usePeliculasContext } from "@/contexts/peliculas-context";
import { useFirebaseAuth } from "@/contexts/firebase-auth-context";
import { saveFavoriteMovie } from "@/services/firebase";

export default function Home() {
  const { popularMovies } = usePeliculasContext();
  const { user } = useFirebaseAuth();
  return (
    <ProtectedPage>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24}`}
      >
        <h1 className="text-4xl font-bold text-center">Popular Movies</h1>
        <ul className="flex flex-wrap">
          {popularMovies.map((movie) => (
            <li key={movie.id}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
              />
              <p>{movie.title}</p>
              <button onClick={() => user && saveFavoriteMovie(movie, user)}>
                Guardar en Favoritos
              </button>
            </li>
          ))}
        </ul>
      </main>
    </ProtectedPage>
  );
}
