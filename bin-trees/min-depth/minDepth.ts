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

  let lDepth = 1;
  let rDepth = 1;

  if (node.lnode){
    console.log("ldepth, current value: ", lDepth, node.val);
    lDepth++;
    minDepth(node.lnode);
  }

  if (node.rnode){
    console.log("rdepth, current value: ", rDepth, node.val);
    rDepth++;
    minDepth(node.rnode);
  }

  return Math.min(lDepth, rDepth);

}

export { minDepth };