'use client';

import { memo, useMemo } from 'react';
import { Text, Stack } from '@chakra-ui/react';
import { map, intersectionWith } from 'lodash';
import ReactFlow, { NodeProps, useEdgesState, useNodesState } from 'reactflow';

import { FlowNode, FlowContainer } from '@/components/flow';
import {
  createTree,
  createEdges,
  createNodes,
  getLayoutedElements,
} from '@/lib/flow';

import { PeopleDetails } from '../types';

export const createFlowNode = (type: string) =>
  /* eslint-disable react/display-name */
  memo((props: NodeProps) => (
    <FlowNode {...props}>
      <Stack spacing={0} align="center">
        <Text fontWeight="900">{type}</Text>
        <Text noOfLines={1}>{props.data.name ?? props.data.title}</Text>
      </Stack>
    </FlowNode>
  ));

export function PeopleDetailsFlow({ data }: { data: Partial<PeopleDetails> }) {
  const elements = useMemo(() => {
    const details = {
      ...data,
      films: map(data.films, (film) => ({
        ...film,
        // Overriding the array of starships the character was on to create a node tree
        starships: intersectionWith(
          data.starships,
          film.starships,
          (starship, id) => starship.id === id
        ),
      })),
    };

    const tree = createTree(details, 'people', ['films', 'starships']);
    return getLayoutedElements(createNodes(tree), createEdges(tree));
  }, [data]);

  const [nodes, , onNodesChange] = useNodesState(elements.nodes);
  const [edges, , onEdgesChange] = useEdgesState(elements.edges);

  return (
    <FlowContainer>
      <ReactFlow
        fitView
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={{
          films: createFlowNode('Film'),
          people: createFlowNode('People'),
          starships: createFlowNode('Starship'),
        }}
      />
    </FlowContainer>
  );
}
