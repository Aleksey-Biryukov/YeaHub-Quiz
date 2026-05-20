import { quizQuestionLimitReducer } from "@/entities/quiz-questions";
import { configureStore } from "@reduxjs/toolkit";
import { specializationReducer } from "@/entities/specializations";
import { baseApi } from "@/shared";
import { questionsSessionReducer } from "@/entities/base-questions";
export const appStore = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    quizQuestionLimitSlice: quizQuestionLimitReducer,
    specialization: specializationReducer,
    questionsSessionSlice: questionsSessionReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
