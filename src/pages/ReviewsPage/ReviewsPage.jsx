import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewMovie } from 'services/api';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchReviewsMovie = async () => {
      try {
        setIsLoading(true);

        const reviewData = await getReviewMovie(movieId);

        setMovieReviews(reviewData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviewsMovie();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>error.message</p>}
      {movieReviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewsPage;
