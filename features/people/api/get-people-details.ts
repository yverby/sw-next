import { queryOptions } from '@tanstack/react-query';

import { getFilms } from '@/features/films/api';
import { getStarships } from '@/features/starships/api';

import { getPeopleById } from './get-people';

export interface GetPeopleDetailsParams {
  id: string | number;
}

export async function getPeopleDetails(params: GetPeopleDetailsParams) {
  const [details, films, starships] = await Promise.all([
    getPeopleById({ id: params.id }),
    getFilms({ characters: params.id }).then((res) => res.results),
    getStarships({ pilots: params.id }).then((res) => res.results),
  ]);

  return Promise.resolve({ ...details, films, starships });
}

export function getPeopleDetailsOptions(params: GetPeopleDetailsParams) {
  return queryOptions({
    queryKey: ['people', params],
    queryFn: () => getPeopleDetails(params),
  });
}
