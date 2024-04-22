'use client';

import { useQuery } from '@tanstack/react-query';
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Stack,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';

import { Placeholder, Switch, SwitchCase } from '@/components/ui';

import { getPeopleDetailsOptions } from '../api/get-people-details';

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
        <Stack py={3} spacing={6} flex="1">
          <Heading as="h2" size="xl" noOfLines={1} fontWeight="900">
            {details.data?.name ?? 'Noname'}
          </Heading>

          <Card variant="outline" bg="transparent">
            <CardBody>
              <StatGroup opacity={0.6}>
                <Stat>
                  <StatLabel>Films</StatLabel>
                  <StatNumber>{details.data?.films.length ?? 0}</StatNumber>
                </Stat>

                <Stat>
                  <StatLabel>Starships</StatLabel>
                  <StatNumber>{details.data?.starships.length ?? 0}</StatNumber>
                </Stat>
              </StatGroup>
            </CardBody>
          </Card>

          <Card flex="1" variant="outline" bg="transparent" />
        </Stack>
      </SwitchCase>
    </Switch>
  );
}
