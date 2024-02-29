import { BNodeNum } from "../common/bintree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {
  const orderedNums = [];

  // Base case for null node: return empty array.
  if (node === null) return [];

  // If this node has no children, push the value to orderedNums and
  // dig no further down.
  if (node.lnode === null && node.rnode === null) {
    orderedNums.push(node.val);
    return orderedNums;
  }

  // Since the node we're inspecting has at least one child, we'll push
  // the current value to orderedNums and then inspect the children.
  orderedNums.push(node.val);

  // Recurse, first on the left node...
  if (node.lnode !== null) orderedNums.push(...preOrder(node.lnode));

  // ...then on the right node.
  if (node.rnode !== null) orderedNums.push(...preOrder(node.rnode));

  // Finished! Return the ordered numbers.
  return orderedNums;
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {
  return [42];
}

export { preOrder, postOrder };