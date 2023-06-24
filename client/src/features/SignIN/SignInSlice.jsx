import React from "react";
import axios from "axios";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import CheckingAPI from "./CheckAPI";

const baseURL = 'http://localhost:3000/api/v1';

export const fetchPost = createAsyncThunk('section/fetchPost', async (data, navigate) => {
    try {
      const response = await axios.post(baseURL, { data });
      const {
        firstname,
        _id: accountId,
        lastname,
        verification,
      } = response.data.accounts;
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate(
        `/complet-setup?vanluesname=${firstname}&id=${accountId}&ver=${verification}`
      );
      return response.data; // Return the data from the response
    } catch (error) {
      console.error(error);
      localStorage.removeItem('token');
      throw error; // Throw the error to be caught by the rejected action
    }
  });
  

export const signInSlice = createSlice({
    name: 'signin',
    initialState: {
        response: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchPost.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchPost.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(fetchPost.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.response = action.payload; // Store the response data in the state
        });
    }
});

export const signUserSelect = (state) => state.section.response;
export const status = (state) => state.section.status
;
export const error = (state) => state.section.error;

export default signInSlice.reducer;
