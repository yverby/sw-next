import { mocks } from '@/utils/test-utils';
import { getFilms } from '@/features/films/api';
import { getStarships } from '@/features/starships/api';

import { getPeopleById } from '../get-people';
import { getPeopleDetails } from '../get-people-details';

jest.mock('@/features/films/api');
jest.mock('@/features/starships/api');

// Mocking people api
jest.mock('../get-people');

const mock = mocks({
  getPeopleById,
  getFilms,
  getStarships,
});

describe('@/features/people/api/get-people-details', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getPeopleDetails', () => {
    it('should call all api requests', async () => {
      const details = { name: '' };
      const films: any = [];
      const starships: any = [];

      mock.getPeopleById.mockResolvedValue(details);
      mock.getFilms.mockResolvedValue({ results: films });
      mock.getStarships.mockResolvedValue({ results: starships });

      const response = await getPeopleDetails({ id: 1 });
      expect(response).toEqual({ ...details, films, starships });

      expect(mock.getPeopleById).toHaveBeenCalledWith({ id: 1 });
      expect(mock.getFilms).toHaveBeenCalledWith({ characters: 1 });
      expect(mock.getStarships).toHaveBeenCalledWith({ pilots: 1 });
    });
  });
});
