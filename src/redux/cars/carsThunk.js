import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestCatalogCars } from '../../services/api';

export const catalogCarsThunk = createAsyncThunk(
  'cars/catalogCars',
  async (page, thunkAPI) => {
    try {
      const response = await requestCatalogCars(page);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
