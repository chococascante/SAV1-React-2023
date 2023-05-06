import { render, waitFor, act } from "@testing-library/react";
import {
  IMovie,
  PeliculasContextProvider,
  usePeliculasContext,
} from "../../contexts/peliculas-context";
import { TestHookHarness } from "@/testing-utilities/TestHookHarness";
import axios from "axios";

const mockMovie = {
  poster_path: "",
  adult: false,
  overview: "",
  release_date: "",
  genre_ids: [],
  id: 1,
  original_title: "",
  original_language: "",
  title: "",
  backdrop_path: "",
  popularity: 1,
  vote_count: 1,
  video: false,
  vote_average: 1,
};

const MOVIESDB_API_KEY = "2a2e83f1997f3263461520241fbdc619";

describe("context/PeliculasContext", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each([true, false])(
    "should render, with emptyArray = %s",
    (emptyArray: boolean) => {
      const axiosGetSpy = jest.spyOn(axios, "get").mockResolvedValue({
        data: {
          results: emptyArray ? [] : [mockMovie],
        },
      });

      act(() => {
        render(
          <PeliculasContextProvider>
            <TestHookHarness
              callback={async () => {
                const { popularMovies } = usePeliculasContext();
                await waitFor(() => {
                  emptyArray
                    ? expect(popularMovies).toEqual([])
                    : expect(popularMovies).toEqual([mockMovie]);

                  expect(axiosGetSpy).toHaveBeenCalledTimes(1);
                  expect(axiosGetSpy).toHaveBeenCalledWith(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIESDB_API_KEY}&language=en-US&page=1`
                  );
                });
              }}
            />
          </PeliculasContextProvider>
        );
      });
    }
  );
});
