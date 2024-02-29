import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {

  // base case:
  // what the job is
  // when do we do the recursive call:

  // base case

  if (node === null) return 0;
  if (node.children.length === 0) return 1;


  for (const child of node.children) {
    console.log('maxDepth') // need to get max
    return maxDepth(child!) + 1;
  }


}

export { maxDepth };


// function maxDepth(node: TreeNodeNum | null): number {

//   let maxDepth: number = 0;
//   let currentDepth: number = 0;
//   let prevMaxDepth: number = 0;

//   let toVisit = [node];

//   while (toVisit.length > 0) {

//     const current: TreeNodeNum = toVisit.pop()!;
//     currentDepth++;
//     if (currentDepth > maxDepth) maxDepth = currentDepth;

//     console.log("current.children: ", current.children);
//     console.log("current.children.length: ", current.children.length);

//     if (!current.children) {
//       // currentDepth--;
//       currentDepth = maxDepth;
//       console.log("value: ", current.val);
//       console.log("depth : ", currentDepth);
//     }

//     for (const child of current.children) {
//       toVisit.push(child);
//     }



//   }
//   return maxDepth;
// }