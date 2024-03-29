import { createSlice } from '@reduxjs/toolkit';
import branchConfig from '../../configs/branch.json';

export const branchSlice = createSlice({
  name: 'branch',
  initialState: {
    items: branchConfig,
    selectedItemId: 1
  },
  reducers: {
    selectItem: (state, action) => {
      state.selectedItemId = action.payload;
    },
  },
});

export const { selectItem } = branchSlice.actions;

export default branchSlice.reducer;
