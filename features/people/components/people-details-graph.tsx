'use client';

import { useMemo } from 'react';
import ReactFlow, { useEdgesState, useNodesState } from 'reactflow';

import { FlowContainer } from '@/components/flow';
import { createEdges, createNodes, getLayoutedElements } from '@/lib/flow';

import { createPeopleDetailsTree } from '../lib/people-details';
import { PeopleDetails } from '../types';
import { PeopleDetailsGraphNode } from './people-details-graph-nodes';

export function PeopleDetailsGraph({ data }: { data: PeopleDetails }) {
  const elements = useMemo(() => {
    const tree = createPeopleDetailsTree(data);
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
        nodeTypes={{ node: PeopleDetailsGraphNode }}
      />
    </FlowContainer>
  );
}
