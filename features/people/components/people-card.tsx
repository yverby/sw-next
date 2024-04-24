import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

import { People, PeopleDetails } from '../types';

export function PeopleCard({
  data,
}: {
  data?: Partial<People | PeopleDetails>;
}) {
  return (
    <Card shadow="sm" bg="transparent">
      <CardHeader opacity={0.9}>
        <Heading as="h3" fontSize={28} noOfLines={1} fontWeight="900">
          {data?.name ?? 'Noname'}
        </Heading>
      </CardHeader>

      <Divider />

      <CardBody>
        <StatGroup opacity={0.6}>
          <Stat>
            <StatLabel>Films</StatLabel>
            <StatNumber>{data?.films?.length ?? 0}</StatNumber>
          </Stat>

          <Stat>
            <StatLabel>Starships</StatLabel>
            <StatNumber>{data?.starships?.length ?? 0}</StatNumber>
          </Stat>
        </StatGroup>
      </CardBody>
    </Card>
  );
}
