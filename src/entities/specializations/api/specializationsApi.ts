import { baseApi } from "@/shared";
import type { ApiResponse } from "@/shared";
import type { Specialization } from "@/entities/specializations";

export const specializationsApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getSpecializations: create.query<ApiResponse<Specialization>, void>({
      query: () => "/specializations?page=1&limit=100",
    }),
  }),
  overrideExisting: true,
});
