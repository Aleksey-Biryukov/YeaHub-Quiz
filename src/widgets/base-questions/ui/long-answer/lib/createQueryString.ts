import type { QueryParams } from "@/shared";

export const createQueryString = (filters: QueryParams): string => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined) {
      params.set(key, String(value));
    }
  });
  return params.toString();
};
