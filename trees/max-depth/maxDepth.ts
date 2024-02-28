import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {

  let maxDepth: number = 0;
  let currentDepth: number = 0;

  let toVisit = [node];

  while (toVisit.length > 0) {

    const current: TreeNodeNum = toVisit.pop()!;

    if (current.children.length === 0) {
      // if it's a leaf node, save the number

      // TODO: save depth and compare depth

    }


  }


  return maxDepth;
}

export { maxDepth };
