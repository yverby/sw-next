'use client';

import { useQuery } from '@tanstack/react-query';
import { Card, CardBody, Stack } from '@chakra-ui/react';

import { Placeholder, Switch, SwitchCase } from '@/components/ui';

import { getPeopleDetailsOptions } from '../api/get-people-details';
import { PeopleDetailsGraph } from './people-details-graph';
import { PeopleCard } from './people-card';

export function PeopleDetails({ id }: { id: string | number }) {
  const details = useQuery(getPeopleDetailsOptions({ id }));

  return (
    <Switch>
      <SwitchCase condition={details.isFetching}>
        <Placeholder loading />
      </SwitchCase>

      <SwitchCase condition={details.isError}>
        <Placeholder title="Oops!" subtitle={details.error?.message} />
      </SwitchCase>

      <SwitchCase condition={details.isSuccess}>
        <Stack flex="1" py={3} spacing={6}>
          <PeopleCard data={details.data} />

          <Card variant="outline" flex="1" shadow="md" bg="transparent">
            <CardBody as={Stack} flex="1" p={0}>
              <PeopleDetailsGraph data={details.data!} />
            </CardBody>
          </Card>
        </Stack>
      </SwitchCase>
    </Switch>
  );
}
