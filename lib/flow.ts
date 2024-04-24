import dagre from 'dagre';
import { Edge, Node } from 'reactflow';
import { map, concat, flatMap, uniqueId } from 'lodash';

export interface TreeNode {
  id: string;
  data: Record<string, any>;
  type?: string;
  children?: TreeNode[];
}

/**
 * The recursive function to convert an input object into a tree of nodes for reactflow
 * @param source The object to convert
 * @param path The root path for the current node
 * @param paths The array of paths for subsequent tree nodes
 * @returns The tree of nodes
 */
export function createTree(
  source: Record<string, any>,
  path: string,
  paths: string[]
): TreeNode {
  const [nextPath, ...restPaths] = paths;

  return {
    id: uniqueId(`${path}-`),
    type: path,
    data: source,
    children: map(source[nextPath], (child) =>
      createTree(child, nextPath, restPaths)
    ),
  };
}

export function getDefaultNode(node: TreeNode): Node {
  return {
    id: node.id,
    data: node.data,
    type: node.type,
    position: { x: 0, y: 0 },
  };
}

/**
 * The recursive function to convert a tree of nodes into an array of nodes for reactflow
 * @param node The root node of the tree to start the recursive creation of reactflow nodes
 * @param getNode The function that can be used to generate specific nodes (optional)
 * @returns The flat array of reactflow nodes
 */
export function createNodes(
  node: TreeNode,
  getNode: (node: TreeNode) => Node = getDefaultNode
): Node[] {
  return concat(
    getNode(node),
    flatMap(node.children, (child) => createNodes(child, getNode))
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
 * The recursive function to convert a tree of nodes to an array of edges for reactflow
 * @param node The root node of the tree to start the recursive creation of reactflow edges
 * @param getEdge The function that can be used to create certain edges (optional)
 * @returns The flat array of reactflow edges
 */
export function createEdges(
  node: TreeNode,
  getEdge: (node: TreeNode, child: TreeNode) => Edge = getDefaultEdge
): Edge[] {
  return concat(
    map(node.children, (child) => getEdge(node, child)),
    flatMap(node.children, (child) => createEdges(child, getEdge))
  );
}

/**
 * The edge-dependent layout function for nodes is based on the dagre algorithm
 * @param nodes The flat array of reactflow nodes
 * @param edges The flat array of reactflow edges
 * @param options The set of options to define the static size of the node (optional)
 * @returns The new object with changed nodes (their positions) and edges
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
