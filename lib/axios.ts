import Axios from 'axios';
import camelize from 'camelcase-keys';

import { API_URL } from '@/config/api';

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.response.use((response) =>
  camelize(response.data, { deep: true })
);
