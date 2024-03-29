import {createAsyncThunk} from "@reduxjs/toolkit";

import instance from "../../apis/axios";
import {groupByDate} from "../../utils/transform";


export const fetchProgramDetails = createAsyncThunk
(
  'program/fetchDetails',
  async (branchId, { rejectWithValue }) => {
    try {
      const response = await instance.get(`SportProgram/${branchId}`);
      const {data, date, error, info, isSuccess, message} = response.data
      const groupByDates = groupByDate(data.events)
      return response.data = {
        ...response.data,
        data: groupByDates
      };
    } catch (error) {
      const errorMessage = error.response && error.response.data ? error.response.data : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);