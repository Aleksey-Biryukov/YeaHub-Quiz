import { createSlice } from "@reduxjs/toolkit";
import type { SpecializationState } from "./types";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState: SpecializationState = {
  selectedId: null,
};

export const specializationSlice = createSlice({
  name: "specialization",
  initialState,
  reducers: {
    setSpecialization: (state, action: PayloadAction<number | null>) => {
      state.selectedId = action.payload;
    },
    clearSpecialization: (state) => {
      state.selectedId = null;
    },
  },
});

export const { setSpecialization, clearSpecialization } =
  specializationSlice.actions;

export default specializationSlice.reducer;
