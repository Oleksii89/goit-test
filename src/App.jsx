import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectIsOpenModal } from 'redux/cars.selectors';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = lazy(() =>
  import('./components/SharedLayout/SharedLayout')
);
const HomePage = lazy(() => import('./pages/HomePage'));
const RentPage = lazy(() => import('./pages/RentPage'));
const FavouritePage = lazy(() => import('./pages/FavouritePage'));

function App() {
  const isOpenModal = useSelector(selectIsOpenModal);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    document.body.style.overflow = isOpenModal ? 'hidden' : '';
  }, [isOpenModal]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<RentPage />} />
            <Route path="/favourites" element={<FavouritePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
      {isOpenModal && <Modal />}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
