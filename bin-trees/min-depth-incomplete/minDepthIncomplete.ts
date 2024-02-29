import { BNodeNum } from "../common/bintree";

/** Minimum depth from node to an "incomplete node".
 *
 * An incomplete node is a node with 0 or 1 children (not 2).
 */

function minDepthToIncompleteNode(node: BNodeNum): number {

  if (node === null) return 0;
  if (!node.lnode || !node.rnode) return 1;

  let lDepth = 1;
  let rDepth = 1;

  if (node.lnode){
    lDepth++;
    minDepthToIncompleteNode(node.lnode);
  }

  if (node.rnode){
    rDepth++;
    minDepthToIncompleteNode(node.rnode);
  }

  return Math.min(lDepth, rDepth);

}

export { minDepthToIncompleteNode };