// import { Suspense, lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import SharedLayout from './components/SharedLayout/SharedLayout';
// import { Loader } from 'components/Loader/Loader';
import { Car } from 'components/Car/Car';
import carsJson from '../src/cars';
import { Modal } from 'components/Modal/Modal';

const cars = carsJson;
// const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const MovieDetailsPage = lazy(() =>
//   import('pages/MovieDetailsPage/MovieDetailsPage')
// );

// const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));

export const App = () => {
  console.log(cars);
  return (
    <div>
      <ul>
        {cars.map(car => {
          return (
            <Car
              key={car.id}
              model={car.model}
              make={car.make}
              year={car.year}
              img={car.img}
              price={car.rentalPrice}
              favourite={false}
            />
          );
        })}
      </ul>
      <Modal />
    </div>
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
