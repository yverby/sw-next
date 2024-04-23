import { axios } from '@/lib/axios';

import { getPeople, getPeopleById } from '../get-people';

jest.mock('@/lib/axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('@/features/films/api/get-people', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getPeople', () => {
    it('should call axios.get with params', async () => {
      const params = { page: 1 };
      const response = { results: [] };

      mockAxios.get.mockResolvedValue(response);
      const people = await getPeople(params);

      expect(people).toEqual(response);
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith('/people', { params });
    });
  });

  describe('getPeopleById', () => {
    it('should call axios.get with params', async () => {
      const params = { id: 1 };
      const response = {};

      mockAxios.get.mockResolvedValue(response);
      const people = await getPeopleById(params);

      expect(people).toEqual(response);
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith(`/people/${params.id}`);
    });
  });
});
