import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {

  if (node === null) return 0;
  if (node.children.length === 0) return 1;

  return Math.max(...node.children.map(c => maxDepth(c) + 1));
}

export { maxDepth };
