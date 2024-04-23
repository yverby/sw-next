import { axios } from '@/lib/axios';

import { getStarships } from '../get-starships';

jest.mock('@/lib/axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('@/features/starships/api/get-starships', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getStarships', () => {
    it('should call axios.get with params', async () => {
      const params = { pilots: 1 };
      const response = { results: [] };

      mockAxios.get.mockResolvedValue(response);
      const starships = await getStarships(params);

      expect(starships).toEqual(response);
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith('/starships', { params });
    });
  });
});
