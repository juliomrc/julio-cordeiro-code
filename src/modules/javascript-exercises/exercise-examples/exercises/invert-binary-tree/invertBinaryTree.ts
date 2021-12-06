export interface BinaryTreeNode {
    value: number;
    left?: BinaryTreeNode;
    right?: BinaryTreeNode;
}

export function inPlaceInvertBinaryTree(node: BinaryTreeNode) {
    const right = node.right;
    node.right = node.left;
    node.left = right;
    if (node.left) inPlaceInvertBinaryTree(node.left);
    if (node.right) inPlaceInvertBinaryTree(node.right);
}

export function invertBinaryTree(node: BinaryTreeNode) {
    const right = node.left ? invertBinaryTree({ ...node.left }) : undefined;
    const left = node.right ? invertBinaryTree({ ...node.right }) : undefined;

    const invertedBinaryTree: BinaryTreeNode = {
        value: node.value,
        right,
        left,
    };

    return invertedBinaryTree;
}
