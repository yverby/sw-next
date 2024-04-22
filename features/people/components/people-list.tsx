'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Button, SimpleGrid, Stack } from '@chakra-ui/react';

import { Placeholder, Switch, SwitchCase } from '@/components/ui';

import { getPeopleInfiniteOptions } from '../api/get-people';
import { PeopleCard } from './people-card';

export function PeopleList() {
  const people = useInfiniteQuery(getPeopleInfiniteOptions());

  const list = useMemo(
    () => people.data?.pages.flatMap((page) => page.results) ?? [],
    [people.data?.pages]
  );

  return (
    <Switch>
      <SwitchCase condition={people.isFetching}>
        <Placeholder loading />
      </SwitchCase>

      <SwitchCase condition={people.isError}>
        <Placeholder title="Oops!" subtitle={people.error?.message} />
      </SwitchCase>

      <SwitchCase condition={people.isSuccess}>
        <Stack spacing={6}>
          <SimpleGrid
            spacing={6}
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          >
            {list.map((data) => (
              <Link key={data.id} scroll={false} href={`/people/${data.id}`}>
                <PeopleCard data={data} />
              </Link>
            ))}
          </SimpleGrid>

          {people.hasNextPage && (
            <Button
              isLoading={people.isFetchingNextPage}
              onClick={() => people.fetchNextPage()}
            >
              Load more
            </Button>
          )}
        </Stack>
      </SwitchCase>
    </Switch>
  );
}
