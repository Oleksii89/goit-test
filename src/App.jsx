// import { Suspense, lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import SharedLayout from './components/SharedLayout/SharedLayout';
// import { Loader } from 'components/Loader/Loader';
import CarList from 'components/CarList/CarList';
import { Container } from 'components/Container/Container';
// import Modal from 'components/Modal/Modal';

// import { useState } from 'react';
//
// const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const MovieDetailsPage = lazy(() =>
//   import('pages/MovieDetailsPage/MovieDetailsPage')
// );

// const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));

export const App = () => {
  // const [modal, setModal] = useState({ isOpen: false });

  // const onOpenModal = () => {
  //   setModal({
  //     isOpen: true,
  //   });
  // };
  // const onCloseModal = () => {
  //   setModal({
  //     isOpen: false,
  //   });
  // };

  return (
    <Container>
      <CarList />
      {/* <Modal /> */}
    </Container>
    // <Suspense fallback={<Loader />}>
    //   <Routes>
    //     <Route path="/" element={<SharedLayout />}>
    //       <Route index element={<HomePage />} />
    //       <Route path="/movies" element={<MoviesPage />} />
    //       <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />

    //       <Route path="*" element={<HomePage />} />
    //     </Route>
    //   </Routes>
    // </Suspense>
  );
};
