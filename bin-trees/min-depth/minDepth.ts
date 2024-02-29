import { BNodeNum } from "../common/bintree";

/** Get minimum depth from node.
 *
 * Minimum depth: length of shortest path from node to a leaf.
 **/

function minDepth(node: BNodeNum): number {

  if (node === null) return 0;
  // if (!node.lnode || !node.rnode) return 1;
  // cut it off if don't have a left node or a right node
  if (node.lnode === null && node.rnode === null) return 1;

  let lDepth = 0;
  let rDepth = 0;

  if (node.lnode){
    // console.log("ldepth, current value after first inc: ", lDepth, node.val);
    lDepth += minDepth(node.lnode);
    // console.log("ldepth, after deeper dive: ", lDepth, node.val);
    // lDepth++;

  }

  if (node.rnode){
    // console.log("rdepth, current value: ", rDepth, node.val);
    // rDepth++;
    rDepth += minDepth(node.rnode);
  }

  console.log("current node:", node.val);
  console.log("vals:", "l:", lDepth, "r:", rDepth);


  if (lDepth > 0 && rDepth > 0) return 1 + Math.min(lDepth, rDepth);
  else if (lDepth) {
    console.log("only ldepth");
    return 1 + lDepth;
  }
  else {
    console.log("only rdepth");
    return 1 + rDepth;
  }

  // return 1 + Math.min(lDepth, rDepth);

}

export { minDepth };