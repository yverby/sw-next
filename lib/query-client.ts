import { cache } from 'react';
import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
};

export const getQueryClient = cache(() => new QueryClient(queryClientConfig));
