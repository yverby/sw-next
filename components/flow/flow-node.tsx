import { Card, CardBody } from '@chakra-ui/react';
import { Handle, NodeProps, Position } from 'reactflow';

/**
 * The wrapper component for displaying nodes
 */
export function FlowNode({
  width = 200,
  children,
  targetPosition,
  sourcePosition,
}: React.PropsWithChildren<NodeProps & { width?: number }>) {
  return (
    <Card width={width} shadow="sm" bg="transparent">
      <Handle type="source" position={sourcePosition as Position} />
      <CardBody p={0} py={2}>
        {children}
      </CardBody>
      <Handle type="target" position={targetPosition as Position} />
    </Card>
  );
}
