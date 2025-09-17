"use client";
const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  appointments: [],
};

const appointmentsSlice = createSlice({
  name: "appointments",   // ✅ required
  initialState,
  reducers: {
    addAppointment: (state, action) => {
        console.log('action:', action)
      const data = {
        id: nanoid(),
        ...action.payload   // ✅ now you can pass date, time, doctorName, therapy
      };
      state.appointments.push(data);
    }
  }
});

export const { addAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
