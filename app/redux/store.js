"use client";
import { configureStore } from "@reduxjs/toolkit";
import { appointmentsReducer, signupReducer } from "./slice";

export const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
    users: signupReducer, // match slice name
  },
});
