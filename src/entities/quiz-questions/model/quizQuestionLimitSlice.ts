import { createSlice } from "@reduxjs/toolkit";

interface QuizQuestionLimitState {
  count: number;
  min: number;
  max: number;
  step: number;
}

const initialState: QuizQuestionLimitState = {
  count: 35,
  min: 10,
  max: 50,
  step: 5,
};

export const quizQuestionLimitSlice = createSlice({
  name: "quizQuestionLimit",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.count + state.step <= state.max) {
        state.count += state.step;
      }
    },
    decrement: (state) => {
      if (state.count - state.step >= state.min) {
        state.count -= state.step;
      }
    },
    clear: (state) => {
      state.count = initialState.count;
    },
  },
});

export const { increment, decrement, clear } = quizQuestionLimitSlice.actions;
export default quizQuestionLimitSlice.reducer;
