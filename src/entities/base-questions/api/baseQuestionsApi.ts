import { baseApi } from "@/shared";
import type { Question } from "../model/types";
import type { QueryParams, ApiResponse } from "@/shared";

export const baseQuestionsApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getBaseQuestions: create.query<ApiResponse<Question>, QueryParams>({
      query: (params) => ({
        url: "/questions/public-questions",
        params: params,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetBaseQuestionsQuery } = baseQuestionsApi;
export const { useLazyGetBaseQuestionsQuery } = baseQuestionsApi;
