import dagre from 'dagre';
import { Edge, Node } from 'reactflow';
import { map, concat, flatMap } from 'lodash';

export interface TreeNode {
  id: string;
  data: Record<string, any>;
  type?: string;
  children?: TreeNode[];
}

export function getDefaultNode(node: TreeNode): Node {
  return {
    id: node.id,
    data: node.data,
    type: node.type ?? 'node',
    position: { x: 0, y: 0 },
  };
}

/**
 * The recursive function to convert a tree of nodes into an array of nodes for reactflow
 * @param parentNode The root node of the tree to start recursively creating reactflow nodes
 * @param getNode The function that can be used to generate specific nodes (optional)
 * @returns The flat array of reactflow nodes
 */
export function createNodes(
  parentNode: TreeNode,
  getNode: (node: TreeNode) => Node = getDefaultNode
): Node[] {
  return concat(
    getNode(parentNode),
    flatMap(parentNode.children, (node) => createNodes(node, getNode))
  );
}

export function getDefaultEdge(parent: TreeNode, node: TreeNode): Edge {
  return {
    id: [parent.id, node.id].join(' > '),
    source: parent.id,
    target: node.id,
  };
}

/**
 * The recursive function to convert a tree of nodes into an array of edges for reactflow
 * @param parentNode The root node of the tree to start recursively creating reactflow edges
 * @param getEdge The function that can be used to generate specific edges (optional)
 * @returns The flat array of reactflow edges
 */
export function createEdges(
  parentNode: TreeNode,
  getEdge: (parentNode: TreeNode, node: TreeNode) => Edge = getDefaultEdge
): Edge[] {
  return concat(
    map(parentNode.children, (node) => getEdge(parentNode, node)),
    flatMap(parentNode.children, (node) => createEdges(node, getEdge))
  );
}

/**
 * The function of creating a layout for nodes depending on edges
 * is based on the dagre algorithm
 * @param nodes The set of reactflow nodes
 * @param edges The set of reactflow edges
 * @param options The set of options to define the static size of the node (optional)
 * @returns The new object with modified nodes (their positions) and edges
 */
export function getLayoutedElements(
  nodes: Node[],
  edges: Edge[],
  options = { width: 200, height: 80 }
) {
  const dagreGraph = new dagre.graphlib.Graph();

  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: 'TB' });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { ...options });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);

    node.position = {
      x: nodeWithPosition.x - options.width / 2,
      y: nodeWithPosition.y - options.height / 2,
    };

    return node;
  });

  return { nodes, edges };
}
