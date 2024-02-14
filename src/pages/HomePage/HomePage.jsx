import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
// import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendinghMovies } from 'services/api';

const HomePage = () => {
  // const [movies, setMovies] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  const movieList = useSelector(state => state.movieList.moviesData);
  const isLoading = useSelector(state => state.movieList.isLoading);
  const error = useSelector(state => state.movieList.error);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        // setIsLoading(true);
        dispatch({ type: 'movieList/setIsLoading', payload: true });
        const moviesData = await getTrendinghMovies();

        // setMovies(moviesData);
        dispatch({ type: 'movieList/setMoviesData', payload: moviesData });
      } catch (error) {
        // setError(error.message);
        dispatch({ type: 'movieList/setError', payload: error.message });
      } finally {
        // setIsLoading(false);
        dispatch({ type: 'movieList/setIsLoading', payload: false });
      }
    };
    fetchTrendingMovies();
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>error.message</p>}
      <h1>Trending today</h1>
      <MovieList movies={movieList}></MovieList>
    </>
  );
};

export default HomePage;
