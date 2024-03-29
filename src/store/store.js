import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import branchReducer from "./slices/branch.slice";
import programReducer from "./slices/program.slice";
import filterReducer from "./slices/filter.slice";
import couponReducer from "./slices/coupon.slice";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['filter', 'coupon'],
};

const rootReducer = combineReducers({
  branch: branchReducer,
  program: programReducer,
  filter: filterReducer,
  coupon: couponReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function makeStore(initialState = {}) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
}

