import {clearAllListeners, createSlice} from '@reduxjs/toolkit';

import {fetchProgramDetails} from "../queries/program.query";

import {groupByDate} from "../../utils/transform";

const initialState = {
  dates: [],
  searchText: '',
  oneMatch: false,
  kingRatio: false,
  loading: false,
  error: null,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterDate: (state, action) => {
      const index = state.dates.findIndex(item => item.id === action.payload);

      if (index !== -1) {
        state.dates[index].selected = !state.dates[index].selected;
      } else {
        console.warn('Invalid index for filter dates');
      }
    },
    setFilterText: (state, action) => {
      state.searchText = action.payload;
    },
    setFilterOneMatch: (state) => {
      state.oneMatch = !state.oneMatch
    },
    setFilterKingRatio: (state) => {
      state.kingRatio = !state.kingRatio
    },
    clearAllFilters: (state) => {
      state.dates.forEach(item =>  item.selected = false);
      state.searchText = '';
      state.oneMatch = false;
      state.kingRatio = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgramDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProgramDetails.fulfilled, (state, action) => {
        state.loading = false;
        const dateList = action.payload.data.map(item => item.groupDate)
        state.dates = dateList.map((item, index) => ({
          id: index + 1,
          value: item,
          selected: false,
        }));
      })
      .addCase(fetchProgramDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
});

export const {
  setFilterDate,
  setFilterText,
  setFilterOneMatch,
  setFilterKingRatio,
  clearAllFilters
} = filterSlice.actions

export const { selectItem } = filterSlice.actions;

export default filterSlice.reducer;
