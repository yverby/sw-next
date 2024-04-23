import { map, uniqueId, cloneDeep, intersectionWith } from 'lodash';

import { TreeNode } from '@/lib/flow';

import { PeopleDetails } from '../types';

export function createPeopleDetailsTree(detailsData: PeopleDetails): TreeNode {
  const data = cloneDeep(detailsData);

  // It is necessary to redefine the set of starships that the character was on
  // for a specific film, in order to generate the node tree
  const details = {
    ...data,
    films: map(data.films, (film) => ({
      ...film,
      starships: intersectionWith(
        data.starships,
        film.starships,
        (starship, id) => starship.id === id
      ),
    })),
  };

  return {
    id: uniqueId('people-'),
    data: details,

    children: map(details.films, (film) => ({
      id: uniqueId('film-'),
      data: film,

      children: map(film.starships, (starship) => ({
        id: uniqueId('starship-'),
        data: starship,
      })),
    })),
  };
}
