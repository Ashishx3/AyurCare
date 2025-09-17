"use client";
const { configureStore } = require("@reduxjs/toolkit");
const appointmentsReducer = require("./slice").default;

export const store = configureStore({
  reducer: {
    appointments: appointmentsReducer   // ✅ now your slice is registered
  }
});
