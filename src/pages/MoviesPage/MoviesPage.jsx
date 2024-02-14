import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/api';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    const fetchMovieByQuery = async () => {
      try {
        setIsLoading(true);

        const movieData = await getMovieByQuery(query);

        setMovies(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieByQuery();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchQuery = evt.currentTarget.elements.searchMovie.value;
    setSearchParams({ query: searchQuery });
  };

  return (
    <Suspense fallback={<Loader />}>
      {isLoading && <Loader />}
      {error && <p>error.message</p>}
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            name="searchMovie"
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <section>
        {movies.length > 0 && <MovieList movies={movies}></MovieList>}
      </section>
    </Suspense>
  );
};

export default MoviesPage;
