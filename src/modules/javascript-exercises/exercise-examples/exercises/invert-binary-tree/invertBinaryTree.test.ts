import {
    inPlaceInvertBinaryTree,
    invertBinaryTree,
    BinaryTreeNode,
} from "./invertBinaryTree";

describe("Invert binary tree", () => {
    it("Inverts binary tree in place", () => {
        const binaryTree: BinaryTreeNode = {
            value: 1,
            left: {
                value: 2,
            },
            right: {
                value: 3,
            },
        };
        inPlaceInvertBinaryTree(binaryTree);

        expect(binaryTree.right?.value).toBe(2);
    });
    it("Inverts binary tree", () => {
        const binaryTree: BinaryTreeNode = {
            value: 1,
            left: {
                value: 2,
            },
            right: {
                value: 3,
            },
        };
        const invertedBinaryTree = invertBinaryTree(binaryTree);

        expect(invertedBinaryTree.right?.value).toBe(binaryTree.left?.value);
    });
});
