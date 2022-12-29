import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  reducers: {
    loader: (state, action) => {
      return action.payload;
    },
  },
});

export default loadingSlice.reducer;

export const { loader } = loadingSlice.actions;
