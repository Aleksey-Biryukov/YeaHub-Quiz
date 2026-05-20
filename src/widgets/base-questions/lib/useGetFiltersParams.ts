import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import type { QueryParams } from "@/shared";

export const useGetFiltersParams = () => {
  const [searchParams] = useSearchParams();

  const filters = useMemo<QueryParams>(() => {
    return {
      page: Number(searchParams.get("page")) || 1,

      limit: Number(searchParams.get("limit")) || 10,

      title: searchParams.get("title") || undefined,

      specializationId:
        Number(searchParams.get("specializationId")) || undefined,

      complexity: searchParams.get("complexity") || undefined,

      rate: Number(searchParams.get("rate")) || undefined,
      skills: Number(searchParams.get("skills")) || undefined,
    };
  }, [searchParams]);

  return filters;
};
