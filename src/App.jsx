import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);

const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
