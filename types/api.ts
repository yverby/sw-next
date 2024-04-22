export interface GetResourceParams {
  page?: number;
  search?: string;
}

export interface GetResourceResponse<Resource> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Resource[];
}
