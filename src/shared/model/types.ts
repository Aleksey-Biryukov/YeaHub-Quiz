export interface ApiResponse<T> {
  data: T[];
  limit: number;
  page: number;
  total: number;
}

export type QueryParams = {
  limit?: number;
  page?: number;
  title?: string;
  specializationId?: number;
  skills?: number;
  complexity?: string;
  rate?: number;
};
