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
  if (node.children.length === 0) return node.val; // if we're at a leaf node

  // but if it does have children
  for (const child of node.children) {
    console.log("in for loop");

    console.log([...postOrder(child), node.val]);

    return [...postOrder(child), node.val];
  }

  return [];
}

export { preOrder, postOrder };


// function postOrder(node: BNodeNum | null): number[] {

//   let orderedVals: number[] = [];
//   let toVisit = [node];

//   while (toVisit.length > 0) {
//     // if (current. is null, you can return here)
//     const current = toVisit.shift()!;

//     if (current) {
//       for (const child of current.children) {
//         toVisit.push(child);
//       }
//       orderedVals.push(current.val);
//     }

//     if (toVisit.length === 0) return orderedVals;
//   }

//   return orderedVals;

// }