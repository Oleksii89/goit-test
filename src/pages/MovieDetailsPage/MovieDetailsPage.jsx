import { Loader } from 'components/Loader/Loader';
import { BASE_POSTER_URL, DEFAULTIMG } from 'helper/helper';
import React, { Suspense, lazy, useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

import {
  StyledListGenre,
  StyledMovieGenre,
  StyledMovieImg,
  StyledMovieOverview,
  StyledMovieOverviewDescription,
  StyledMovieTitle,
  StyledMovieWrapper,
} from './MovieDetailsPage.styled';

const CastPage = lazy(() => import('../CastPage/CastPage'));
const ReviewsPage = lazy(() => import('../ReviewsPage/ReviewsPage'));

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHRef = useRef(location.state?.from) ?? '/';

  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieById = async () => {
      try {
        setIsLoading(true);

        const movieData = await getMovieById(movieId);

        setMovieDetails(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>error.message</p>}
      {movieDetails !== null && (
        <div>
          <Link to={backLinkHRef.current}>Go back</Link>

          <StyledMovieWrapper>
            <StyledMovieImg
              src={`${
                movieDetails.poster_path
                  ? BASE_POSTER_URL + movieDetails.poster_path
                  : DEFAULTIMG
              }`}
              alt="poster"
            />
            <div>
              <StyledMovieTitle>{movieDetails.original_title}</StyledMovieTitle>
              <p>User score: {Math.round(movieDetails.vote_average * 10)}%</p>
              <StyledMovieOverview>Overview </StyledMovieOverview>
              <StyledMovieOverviewDescription>
                {movieDetails.overview}
              </StyledMovieOverviewDescription>
              <StyledMovieGenre>Genres</StyledMovieGenre>
              <StyledListGenre>
                {movieDetails.genres?.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </StyledListGenre>
            </div>
          </StyledMovieWrapper>

          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="cast" element={<CastPage />} />
                <Route path="reviews" element={<ReviewsPage />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
