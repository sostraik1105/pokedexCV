import { createSlice } from '@reduxjs/toolkit';

const typeSlice = createSlice({
  name: 'type',
  initialState: '',
  reducers: {
    selected: (state, action) => {
      return action.payload;
    },
  },
});

export default typeSlice.reducer;

export const { selected } = typeSlice.actions;
