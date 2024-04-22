import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { getQueryClient } from '@/lib/query-client';
import { PeopleDetails } from '@/features/people/components';
import { getPeopleDetailsOptions } from '@/features/people/api';

export default async function PeopleDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const queryClient = getQueryClient();
  await queryClient.fetchQuery(getPeopleDetailsOptions(params));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PeopleDetails {...params} />
    </HydrationBoundary>
  );
}
