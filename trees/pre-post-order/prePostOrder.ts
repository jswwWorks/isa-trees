import { BNodeNum } from "../common/binary-search-tree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {
  let orderedVals: number[] = [];
  let toVisit = [node];

  while (toVisit.length > 0) {
    // if (current. is null, you can return here)
    const current = toVisit.shift()!;
    // console.log("current: ", current);
    // console.log("toVisit: ", toVisit);
    if (current) {
      orderedVals.push(current.val);
      for (const child of current.children) {
        toVisit.push(child);
      }
    }

    if (toVisit.length === 0) return orderedVals;
  }

  return orderedVals;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {

  if (node === null) return []; // if initial node is null
  if (node.children.length === 0) return [node.val]; // if we're at a leaf node

  let orderedNums = [];
  for (const child of node.children) {
    console.log("in for loop");
    console.log([...postOrder(child), node.val]);
    orderedNums.push(...postOrder(child));
  }
  return [...orderedNums, node.val];
}

export { preOrder, postOrder };
