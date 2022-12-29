import { configureStore } from '@reduxjs/toolkit';

// reducers
import isLoading from './Slices/loadingSlice';
import pokes from './Slices/pokemonSlice';
import types from './Slices/typeSlice';

const store = configureStore({
  reducer: {
    isLoading,
    pokes,
    types,
  },
});

export default store;
