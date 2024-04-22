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

import { People } from '../types';

export function PeopleCard({ data }: { data: Partial<People> }) {
  return (
    <Card variant="outline" bg="transparent">
      <CardHeader>
        <Heading
          as="h3"
          opacity={0.9}
          fontSize={28}
          noOfLines={1}
          fontWeight="900"
        >
          {data.name ?? 'Noname'}
        </Heading>
      </CardHeader>

      <Divider />

      <CardBody>
        <StatGroup opacity={0.6}>
          <Stat>
            <StatLabel>Films</StatLabel>
            <StatNumber>{data.films?.length ?? 0}</StatNumber>
          </Stat>

          <Stat>
            <StatLabel>Starships</StatLabel>
            <StatNumber>{data.starships?.length ?? 0}</StatNumber>
          </Stat>
        </StatGroup>
      </CardBody>
    </Card>
  );
}
