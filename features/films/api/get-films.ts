import { axios } from '@/lib/axios';
import { GetResourceParams, GetResourceResponse } from '@/types/api';

import { Film } from '../types';

interface GetFilmsParams extends GetResourceParams {
  characters?: string | number;
}

interface GetFilmsResponse extends GetResourceResponse<Film> {}

export async function getFilms(params?: GetFilmsParams) {
  return axios.get<any, GetFilmsResponse>('/films', { params });
}
