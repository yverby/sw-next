import { axios } from '@/lib/axios';

import { getFilms } from '../get-films';

jest.mock('@/lib/axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('@/features/films/api/get-films', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getFilms', () => {
    it('should call axios.get with params', async () => {
      const params = { characters: 1 };
      const response = { results: [] };

      mockAxios.get.mockResolvedValue(response);
      const films = await getFilms(params);

      expect(films).toEqual(response);
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith('/films', { params });
    });
  });
});
