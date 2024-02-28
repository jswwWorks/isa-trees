"use strict";

import { TreeNode, TreeNodeNum } from "../common/tree";

/** sumValues(): add up all values of node and its descendants.
 * Returns sum as an integer. */
function sumValues(node: TreeNodeNum): number {    // always type the return!
  // why? if you change what it returns, it won't silently infer the wrong return.

  let sum: number = 0;

  // let toVisit = new Stack<TreeNode>([this])

  // say this line is getting what we want: a treenode for the spot we're at
  // let toVisit: [] = new TreeNode<TreeNodeNum[]>([node]);
  // let toVisit = new TreeNode<TreeNodeNum[]>([node]);
  // let toVisit: TreeNodeNum[] = [];

  // let toVisit: TreeNode<number>[] = [node];

  let toVisit = [node];

  while (toVisit.length > 0) {
    const current = toVisit.pop()!; // ! if you know it won't be empty
    sum += current.val;

    for (const child of current.children) {
      toVisit.push(child);
    }
  }

  return sum;
}

export { sumValues };
