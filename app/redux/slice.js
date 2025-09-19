"use client";
const { createSlice, nanoid } = require("@reduxjs/toolkit");

// ================== Appointments State ==================
const initialState = {
  appointments: [],
};

// ================== Users State ==================
const initialUsersState = {
  signupUsers: [],
};

// ================== Feedback State ==================
const initialFeedbackState = {
  feedbacks: [],
};

// ================== Quiz State ==================
const initialQuizState = {
  answers: [],   // raw answers
  dosha: null,   // model prediction result
};

// ================== Symptoms State ==================
const initialSymptomsState = {
  reports: [],
};

// ================== Appointments Slice ==================
const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      const data = {
        id: nanoid(),
        status: "Waiting", // default status
        ...action.payload,
      };
      state.appointments.push(data);
    },
    updateAppointmentStatus: (state, action) => {
      const { id, status } = action.payload;
      const appointment = state.appointments.find((a) => a.id === id);
      if (appointment) {
        appointment.status = status;
      }
    },
  },
});

// ================== Users Slice ==================
const signupSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: nanoid(),
        ...action.payload,
      };
      state.signupUsers.push(newUser);
    },
  },
});

// ================== Feedback Slice ==================
const feedbackSlice = createSlice({
  name: "feedback",
  initialState: initialFeedbackState,
  reducers: {
    addFeedback: (state, action) => {
      const newFeedback = {
        id: nanoid(),
        date: new Date().toISOString(),
        ...action.payload,
      };
      state.feedbacks.push(newFeedback);
    },
  },
});

// ================== Quiz Slice ==================
const quizSlice = createSlice({
  name: "quiz",
  initialState: initialQuizState,
  reducers: {
    sendQuizResult: (state, action) => {
      state.answers = action.payload; // save raw answers
    },
    setDoshaResult: (state, action) => {
      state.dosha = action.payload; // save model result
    },
    resetQuiz: (state) => {
      state.answers = [];
      state.dosha = null;
    },
  },
});

// ================== Symptoms Slice ==================
const symptomsSlice = createSlice({
  name: "symptoms",
  initialState: initialSymptomsState,
  reducers: {
    addSymptomReport: (state, action) => {
      const newReport = {
        id: nanoid(),
        date: new Date().toISOString(),
        ...action.payload,
      };
      state.reports.push(newReport);
    },
  },
});

// ✅ Export actions
export const { addAppointment, updateAppointmentStatus } = appointmentsSlice.actions;
export const { addUser } = signupSlice.actions;
export const { addFeedback } = feedbackSlice.actions;
export const { sendQuizResult, setDoshaResult, resetQuiz } = quizSlice.actions;
export const { addSymptomReport } = symptomsSlice.actions;

// ✅ Export reducers
export const appointmentsReducer = appointmentsSlice.reducer;
export const signupReducer = signupSlice.reducer;
export const feedbackReducer = feedbackSlice.reducer;
export const quizReducer = quizSlice.reducer;
export const symptomsReducer = symptomsSlice.reducer;
