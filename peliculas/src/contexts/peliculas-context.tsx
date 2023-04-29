import axios from "axios";
import React from "react";

const MOVIESDB_API_KEY = "2a2e83f1997f3263461520241fbdc619";
const MOVIESDB_API_KEY_V4_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTJlODNmMTk5N2YzMjYzNDYxNTIwMjQxZmJkYzYxOSIsInN1YiI6IjYzNTQwY2I4ODgwYzkyMDA3OTZkN2RlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S6_H0jSf05o1u5vWxHkCrl7B6SW3OR170PcYejsa4_Y";

export interface IMovie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

interface PeliculasContextProps {
  popularMovies: IMovie[];
}

const PeliculasContext = React.createContext<PeliculasContextProps>({
  popularMovies: [],
});

export const PeliculasContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [popularMovies, setPopularMovies] = React.useState<IMovie[]>([]);
  const getPopularMovies = React.useCallback(async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIESDB_API_KEY}&language=en-US&page=1`
    );
    console.log(response.data.results);
    setPopularMovies(response.data.results);
  }, []);

  React.useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

  const contextValue = React.useMemo(
    () => ({
      popularMovies,
    }),
    [popularMovies]
  );

  return (
    <PeliculasContext.Provider value={contextValue}>
      {children}
    </PeliculasContext.Provider>
  );
};

export const usePeliculasContext = () =>
  React.useContext<PeliculasContextProps>(PeliculasContext);
