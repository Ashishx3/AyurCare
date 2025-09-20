"use client";
import { configureStore } from "@reduxjs/toolkit";
import {
  appointmentsReducer,
  signupReducer,
  feedbackReducer,
  quizReducer,
  symptomsReducer,
} from "./slice";

export const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
    users: signupReducer,
    feedback: feedbackReducer,   // ✅ add this
    quiz: quizReducer,           // optional, if using quiz
    symptoms: symptomsReducer,   // optional, if using symptoms
  },
});
