import { TreeNodeNum } from "../common/tree";

/** numGreater(lowerBound): starting from the invoking node and moving
 * through its children, return a count of the number of nodes whose value
 * is greater than lowerBound. */

function numGreater(node: TreeNodeNum, lowerBound: number): number {

  let qualifyingNodesThatAreGreater: number = 0;

  let toVisit = [node];

  while (toVisit.length > 0) {

    const current: TreeNodeNum = toVisit.pop()!;
    // console.log('while loop ran, here is current:', current);

    if (current.val > lowerBound) qualifyingNodesThatAreGreater++;

    for (const child of current.children) {
      toVisit.push(child);
    }

  }

  return qualifyingNodesThatAreGreater;
}

export { numGreater };