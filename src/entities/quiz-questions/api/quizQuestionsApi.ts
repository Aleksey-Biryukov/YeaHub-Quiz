import { baseApi } from "@/shared";
export const quizQuestionsApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getQuestions: create.query({
      query: ({ limit, specializationId }) => ({
        url: "/interview-preparation/quizzes/mock/new",
        limit: limit,
        specializationId: specializationId,
      }),
    }),
  }),
  overrideExisting: true,
});
