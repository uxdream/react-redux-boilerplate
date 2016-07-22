export default function compare(tree1, tree2) {
  return JSON.stringify(tree1) === JSON.stringify(tree2);
}