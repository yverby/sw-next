import { infiniteQueryOptions } from '@tanstack/react-query';

import { axios } from '@/lib/axios';
import { getURLSearchParam } from '@/lib/search-params';
import { GetResourceParams, GetResourceResponse } from '@/types/api';

import { People } from '../types';

export interface GetPeopleParams extends GetResourceParams {}
export interface GetPeopleResponse extends GetResourceResponse<People> {}

export async function getPeople(params?: GetPeopleParams) {
  return axios.get<any, GetPeopleResponse>('/people', { params });
}

export function getPeopleInfiniteOptions(params?: GetPeopleParams) {
  return infiniteQueryOptions({
    queryKey: ['people', params],
    queryFn: ({ pageParam }) => getPeople({ page: pageParam }),

    initialPageParam: params?.page || 1,
    getNextPageParam: (lastPage) =>
      getURLSearchParam(lastPage.next, 'page', Number),
  });
}

export interface GetPeopleByIdParams {
  id: string | number;
}

export async function getPeopleById(params: GetPeopleByIdParams) {
  return axios.get<any, People>(`/people/${params.id}`);
}
