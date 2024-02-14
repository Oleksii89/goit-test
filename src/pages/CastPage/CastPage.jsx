import { Loader } from 'components/Loader/Loader';
import { BASE_POSTER_URL, DEFAULTIMG } from 'helper/helper';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/api';
import { StyledCastList, StyledListItem } from './CastPage.styled';

const CastPage = () => {
  const { movieId } = useParams();
  const [movieCasts, setMovieCasts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchCastMovie = async () => {
      try {
        setIsLoading(true);

        const castData = await getCastMovie(movieId);

        setMovieCasts(castData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCastMovie();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>error.message</p>}
      {movieCasts !== null && (
        <StyledCastList>
          {movieCasts.map(({ id, profile_path, name, character }) => (
            <StyledListItem key={id}>
              <img
                src={`${
                  profile_path ? BASE_POSTER_URL + profile_path : DEFAULTIMG
                }`}
                alt="poster"
              />
              <b>{name}</b>
              <p>Character: {character}</p>
            </StyledListItem>
          ))}
        </StyledCastList>
      )}
    </div>
  );
};

export default CastPage;
