import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { catalogCarsThunk } from './carsThunk';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,

  favourites: [],
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.authenticated = true;
  state.cars = state.cars.concat(payload);
};
const handleError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addToFavourites(state, action) {
      state.favourites.push(action.payload);
    },
    removeFromFavourites(state, action) {
      state.favourites = state.favourites.filter(
        car => car.id !== action.payload
      );
    },
  },

  extraReducers: builder =>
    builder
      .addCase(catalogCarsThunk.fulfilled, handleFulfilled)

      .addMatcher(isAnyOf(catalogCarsThunk.pending), handlePending)

      .addMatcher(isAnyOf(catalogCarsThunk.rejected), handleError),
});

export const carsReducer = carsSlice.reducer;
export const { addToFavourites, removeFromFavourites } = carsSlice.actions;
