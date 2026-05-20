import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = "https://api.yeatwork.ru";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: () => ({}),
});
