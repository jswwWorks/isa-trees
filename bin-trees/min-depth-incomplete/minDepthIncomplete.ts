import { BNodeNum } from "../common/bintree";

/** Minimum depth from node to an "incomplete node".
 *
 * An incomplete node is a node with 0 or 1 children (not 2).
 */

function minDepthToIncompleteNode(node: BNodeNum): number {

  if (node === null) return 0;
  if (!node.lnode || !node.rnode) return 1;

  // still need to add the counting

  if (node.lnode) minDepthToIncompleteNode(node.lnode);
  if (node.rnode) minDepthToIncompleteNode(node.rnode);
  /**
   *
   * game plan: base case is empty node or
   *  when we actually hit node w 0-1 children
   *
   */

  // return Math.max(...node.children.map(c => maxDepth(c) + 1));
}

export { minDepthToIncompleteNode };