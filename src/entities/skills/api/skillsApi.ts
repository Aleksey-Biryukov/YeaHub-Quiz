import { baseApi } from "@/shared";
import type { ApiResponse } from "@/shared";
import type { Skills } from "../model/types";

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getSkills: create.query<ApiResponse<Skills>, void>({
      query: () => ({
        url: "/skills?page=1&limit=100",
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetSkillsQuery } = skillsApi;
