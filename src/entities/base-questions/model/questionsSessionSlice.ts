import type { QueryParams } from "@/shared";
import type { Question } from "../model/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface QuestionsSession {
  questions: Question[];
  totalQuestions: number;
  currentIndex: number;
  currentPage: number;
  filters: QueryParams;
}

const initialState: QuestionsSession = {
  questions: [],
  totalQuestions: 0,
  filters: {},
  currentIndex: 0,
  currentPage: 0,
};

export const questionsSessionSlice = createSlice({
  name: "questionsSession",
  initialState,
  reducers: {
    setSession: (
      state,
      action: PayloadAction<{
        questions: Question[];
        totalQuestions: number;
        filters: QueryParams;
      }>,
    ) => {
      state.questions = action.payload.questions;
      state.filters = action.payload.filters;
      state.totalQuestions = action.payload.totalQuestions;
      state.currentIndex = 0;
    },

    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setSession, setCurrentIndex, setCurrentPage } =
  questionsSessionSlice.actions;

export default questionsSessionSlice.reducer;
