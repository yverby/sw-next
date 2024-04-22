import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/lib/query-client';
import { PeopleList } from '@/features/people/components';
import { getPeopleInfiniteOptions } from '@/features/people/api';

export default async function PeoplePage() {
  const queryClient = getQueryClient();
  await queryClient.fetchInfiniteQuery(getPeopleInfiniteOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PeopleList />
    </HydrationBoundary>
  );
}
