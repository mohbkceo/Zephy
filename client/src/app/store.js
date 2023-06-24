import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/CarSliese'
import likeReducer from '../features/lists/ListNames'
import sectionReducer from '../features/SignIN/SignInSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
    like: likeReducer,
    section: sectionReducer,
    }
});
