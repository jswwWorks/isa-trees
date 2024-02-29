import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {

  let maxDepth: number = 0;
  let currentDepth: number = 0;
  let prevMaxDepth:

  let toVisit = [node];

  while (toVisit.length > 0) {

    const current: TreeNodeNum = toVisit.pop()!;
    currentDepth++;
    if (currentDepth > maxDepth) maxDepth = currentDepth;

    console.log("current.children: ", current.children);
    console.log("current.children.length: ", current.children.length);

    if (!current.children) {
      // currentDepth--;
      currentDepth = maxDepth;
      console.log("value: ", current.val);
      console.log("depth : ", currentDepth);
    }

    for (const child of current.children) {
      toVisit.push(child);
    }


  }
  return maxDepth;
}

export { maxDepth };
