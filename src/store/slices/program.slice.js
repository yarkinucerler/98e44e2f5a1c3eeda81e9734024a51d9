import {createSlice} from "@reduxjs/toolkit";
import {fetchProgramDetails} from "../queries/program.query";

import {groupByDate} from "../../utils/transform";

export const programSlice = createSlice({
  name: 'program',
  initialState: {
    programs: null,
    loading: false,
    error: null,
  },
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgramDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProgramDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.programs = action.payload;
      })
      .addCase(fetchProgramDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})

export const {} = programSlice.actions

export default programSlice.reducer;