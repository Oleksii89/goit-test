import React from 'react';
import { StyledMovieList } from './MovieList.styled';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledMovieList>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              {movie.original_title}
            </Link>
          </li>
        );
      })}
    </StyledMovieList>
  );
};

export default MovieList;
