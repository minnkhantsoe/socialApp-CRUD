import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit"
import userReducer from "./userSlice"

const reducer = combineReducers({
  user: userReducer
})

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
      serializableCheck: false,
    }),
})