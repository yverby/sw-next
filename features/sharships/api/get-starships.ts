import { axios } from '@/lib/axios';
import { GetResourceParams, GetResourceResponse } from '@/types/api';

import { Starship } from '../types';

export interface GetStarshipsParams extends GetResourceParams {
  pilots?: string | number;
}

export interface GetStarshipsResponse extends GetResourceResponse<Starship> {}

export async function getStarships(params?: GetStarshipsParams) {
  return axios.get<any, GetStarshipsResponse>('/starships', { params });
}
