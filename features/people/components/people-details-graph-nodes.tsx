import { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import {
  Card,
  CardBody,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

export const PeopleDetailsGraphNode = memo(
  ({ id, data, sourcePosition, targetPosition }: NodeProps) => {
    const borderColor = useColorModeValue('gray.200', 'gray.300');

    const title = id.split('-')[0] ?? 'Resource';
    const label = data.name ?? data.title;

    return (
      <Card w={200} borderColor={borderColor} shadow="sm" bg="transparent">
        <Handle type="source" position={sourcePosition as Position} />
        <CardBody p={0} py={2}>
          <Stack spacing={0} align="center">
            <Text noOfLines={1} casing="capitalize" fontWeight="900">
              {title}
            </Text>
            <Text noOfLines={1}>{label}</Text>
          </Stack>
        </CardBody>
        <Handle type="target" position={targetPosition as Position} />
      </Card>
    );
  }
);

PeopleDetailsGraphNode.displayName = 'PeopleDetailsGraphNode';
