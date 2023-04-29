import axios from "axios";
import React from "react";

const MOVIESDB_API_KEY = "2a2e83f1997f3263461520241fbdc619";
const MOVIESDB_API_KEY_V4_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTJlODNmMTk5N2YzMjYzNDYxNTIwMjQxZmJkYzYxOSIsInN1YiI6IjYzNTQwY2I4ODgwYzkyMDA3OTZkN2RlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S6_H0jSf05o1u5vWxHkCrl7B6SW3OR170PcYejsa4_Y";

interface PeliculasContextProps {}

const PeliculasContext = React.createContext<PeliculasContextProps>({});

export const PeliculasContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const getPopularMovies = React.useCallback(async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIESDB_API_KEY}&language=en-US&page=1`
    );
    console.log(data);
  }, []);

  React.useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

  return (
    <PeliculasContext.Provider value={{}}>{children}</PeliculasContext.Provider>
  );
};

export const usePeliculasContext = () =>
  React.useContext<PeliculasContextProps>(PeliculasContext);
