'use client';

import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from '@tanstack/react-query';

import { queryClientConfig } from '@/lib/query-client';

export function QueryClientProvider({ children }: React.PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));

  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </ReactQueryClientProvider>
  );
}
